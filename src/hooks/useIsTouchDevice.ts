
import { useState, useEffect } from 'react';

export const useIsTouchDevice = (): boolean => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      // Check if device has touch capabilities
      const hasTouchPoints = 'maxTouchPoints' in navigator && navigator.maxTouchPoints > 0;
      const hasTouchStart = 'ontouchstart' in window;
      const hasTouchEvent = window.DocumentTouch && document instanceof window.DocumentTouch;
      
      // Detect if it's a touch device
      const isTouch = hasTouchPoints || hasTouchStart || hasTouchEvent;
      
      // Exclude large desktop touch screens (width > 1024px) to avoid hiding hints on desktop touch monitors
      const isLargeScreen = window.innerWidth > 1024;
      
      setIsTouchDevice(isTouch && !isLargeScreen);
    };

    checkTouchDevice();
    
    // Re-check on window resize
    window.addEventListener('resize', checkTouchDevice);
    
    return () => {
      window.removeEventListener('resize', checkTouchDevice);
    };
  }, []);

  return isTouchDevice;
};
