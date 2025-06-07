
import React, { useState, useRef } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Upload, X, Image } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';

interface ImageUploaderProps {
  onImageUploaded: (imageUrl: string) => void;
  onImagesUploaded?: (imageUrls: string[]) => void;
  multiple?: boolean;
  currentImages?: string[];
  className?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  onImageUploaded,
  onImagesUploaded,
  multiple = false,
  currentImages = [],
  className = ''
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFiles(files);
  };

  const handleFiles = async (files: File[]) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length === 0) {
      toast({
        title: 'Feil',
        description: 'Kun bildefiler er tillatt',
        variant: 'destructive'
      });
      return;
    }

    if (!multiple && imageFiles.length > 1) {
      toast({
        title: 'Feil',
        description: 'Du kan kun laste opp ett bilde om gangen',
        variant: 'destructive'
      });
      return;
    }

    setUploading(true);
    
    try {
      const uploadedUrls: string[] = [];
      
      for (const file of imageFiles) {
        // Simulate upload - in a real app, this would upload to your server
        const fakeUrl = `/lovable-uploads/${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${file.name.split('.').pop()}`;
        uploadedUrls.push(fakeUrl);
        
        // Show success for each file
        toast({
          title: 'Lastet opp',
          description: `${file.name} ble lastet opp`
        });
      }
      
      if (multiple && onImagesUploaded) {
        onImagesUploaded(uploadedUrls);
      } else if (!multiple && uploadedUrls.length > 0) {
        onImageUploaded(uploadedUrls[0]);
      }
    } catch (error) {
      toast({
        title: 'Feil ved opplasting',
        description: 'Kunne ikke laste opp bildet',
        variant: 'destructive'
      });
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (indexToRemove: number) => {
    if (multiple && onImagesUploaded) {
      const newImages = currentImages.filter((_, index) => index !== indexToRemove);
      onImagesUploaded(newImages);
    }
  };

  return (
    <div className={className}>
      {/* Upload Area */}
      <Card 
        className={`border-2 border-dashed transition-colors ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        } ${uploading ? 'opacity-50' : ''}`}
      >
        <CardContent 
          className="p-8 text-center cursor-pointer"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="h-12 w-12 mx-auto mb-4 text-gray-400" />
          <p className="text-lg font-medium mb-2">
            {uploading ? 'Laster opp...' : 'Dra bilder hit eller klikk for å velge'}
          </p>
          <p className="text-sm text-gray-500">
            {multiple ? 'PNG, JPG, GIF opptil 10MB hver' : 'PNG, JPG, GIF opptil 10MB'}
          </p>
          
          <Button 
            variant="outline" 
            className="mt-4"
            disabled={uploading}
            onClick={(e) => {
              e.stopPropagation();
              fileInputRef.current?.click();
            }}
          >
            <Image className="h-4 w-4 mr-2" />
            Velg {multiple ? 'bilder' : 'bilde'}
          </Button>
        </CardContent>
      </Card>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple={multiple}
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Current Images Preview */}
      {multiple && currentImages.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Opplastede bilder:</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentImages.map((imageUrl, index) => (
              <div key={index} className="relative group">
                <div className="aspect-square overflow-hidden rounded-lg border">
                  <img
                    src={imageUrl}
                    alt={`Bilde ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeImage(index)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
