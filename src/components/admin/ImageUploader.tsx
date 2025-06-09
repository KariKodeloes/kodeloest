
import React, { useState, useRef } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Upload, X, Image } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';
import { compressImage, createResponsiveImageSizes } from '../../utils/imageCompression';

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

    // Check file sizes (max 10MB per file)
    const maxSize = 10 * 1024 * 1024; // 10MB
    const oversizedFiles = imageFiles.filter(file => file.size > maxSize);
    if (oversizedFiles.length > 0) {
      toast({
        title: 'Feil',
        description: `Noen filer er for store. Maksimal størrelse er 10MB per fil.`,
        variant: 'destructive'
      });
      return;
    }

    setUploading(true);
    
    try {
      const uploadedUrls: string[] = [];
      
      for (const file of imageFiles) {
        console.log(`Processing file: ${file.name}, size: ${(file.size / 1024 / 1024).toFixed(2)}MB`);
        
        // Compress image for optimal display
        const compressedDataUrl = await compressImage(file, {
          maxWidth: 1200,
          maxHeight: 1200,
          quality: 0.85,
          format: 'webp'
        });
        
        uploadedUrls.push(compressedDataUrl);
        
        // Show success for each file
        toast({
          title: 'Bilde komprimert og lastet opp',
          description: `${file.name} ble behandlet og komprimert`
        });
      }
      
      if (multiple && onImagesUploaded) {
        onImagesUploaded(uploadedUrls);
      } else if (!multiple && uploadedUrls.length > 0) {
        onImageUploaded(uploadedUrls[0]);
      }
    } catch (error) {
      console.error('Error processing images:', error);
      toast({
        title: 'Feil ved behandling',
        description: 'Kunne ikke behandle bildene. Prøv igjen.',
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
            {uploading ? 'Komprimerer og laster opp...' : 'Dra bilder hit eller klikk for å velge'}
          </p>
          <p className="text-sm text-gray-500">
            {multiple ? 'PNG, JPG, GIF opptil 10MB hver (blir automatisk komprimert)' : 'PNG, JPG, GIF opptil 10MB (blir automatisk komprimert)'}
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
