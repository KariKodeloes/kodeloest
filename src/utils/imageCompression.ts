
// Image compression utility for optimizing uploaded images
interface CompressionOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
}

interface ImageSizes {
  thumbnail: string; // For project cards (400px max)
  medium: string;    // For detail view (1200px max)
  large: string;     // For popup/dialog (1920px max)
}

export const compressImage = async (
  file: File | string,
  options: CompressionOptions = {}
): Promise<string> => {
  const {
    maxWidth = 1920,
    maxHeight = 1920,
    quality = 0.85,
    format = 'webp'
  } = options;

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      // Calculate new dimensions while maintaining aspect ratio
      let { width, height } = img;
      
      if (width > maxWidth || height > maxHeight) {
        const aspectRatio = width / height;
        
        if (width > height) {
          width = Math.min(width, maxWidth);
          height = width / aspectRatio;
        } else {
          height = Math.min(height, maxHeight);
          width = height * aspectRatio;
        }
      }

      canvas.width = width;
      canvas.height = height;

      // Draw and compress
      ctx.drawImage(img, 0, 0, width, height);
      
      // Convert to desired format
      const mimeType = format === 'webp' ? 'image/webp' : 
                     format === 'png' ? 'image/png' : 'image/jpeg';
      
      try {
        const compressedDataUrl = canvas.toDataURL(mimeType, quality);
        resolve(compressedDataUrl);
      } catch (error) {
        // Fallback to JPEG if WebP is not supported
        const fallbackDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(fallbackDataUrl);
      }
    };

    img.onerror = () => reject(new Error('Failed to load image'));
    
    if (typeof file === 'string') {
      img.src = file;
    } else {
      img.src = URL.createObjectURL(file);
    }
  });
};

export const createResponsiveImageSizes = async (imageUrl: string): Promise<ImageSizes> => {
  try {
    const [thumbnail, medium, large] = await Promise.all([
      compressImage(imageUrl, { maxWidth: 400, maxHeight: 400, quality: 0.8 }),
      compressImage(imageUrl, { maxWidth: 1200, maxHeight: 1200, quality: 0.85 }),
      compressImage(imageUrl, { maxWidth: 1920, maxHeight: 1920, quality: 0.9 })
    ]);

    return { thumbnail, medium, large };
  } catch (error) {
    console.error('Error creating responsive image sizes:', error);
    // Fallback to original image
    return {
      thumbnail: imageUrl,
      medium: imageUrl,
      large: imageUrl
    };
  }
};

export const getOptimalImageSize = (context: 'thumbnail' | 'medium' | 'large', imageSizes?: ImageSizes, fallback?: string): string => {
  if (!imageSizes && !fallback) return '';
  
  if (imageSizes) {
    return imageSizes[context] || imageSizes.large || fallback || '';
  }
  
  return fallback || '';
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};
