
import { useState, useEffect } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  phoneNumber: string | null;
}

const ADMIN_PHONE = '12345678'; // Replace with your phone number
const VALID_SMS_CODE = '1234'; // For demo purposes - in production use a proper SMS service

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    phoneNumber: null
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const storedAuth = localStorage.getItem('admin_auth');
    if (storedAuth) {
      const { isAuthenticated, phoneNumber, timestamp } = JSON.parse(storedAuth);
      const now = Date.now();
      const oneHour = 60 * 60 * 1000;
      
      // Auto-logout after 1 hour
      if (now - timestamp < oneHour && isAuthenticated) {
        setAuthState({ isAuthenticated: true, phoneNumber });
      } else {
        localStorage.removeItem('admin_auth');
      }
    }
  }, []);

  const sendSmsCode = async (phoneNumber: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate SMS sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    
    // In a real app, you would send SMS here
    // For demo, we only accept the admin phone number
    return phoneNumber === ADMIN_PHONE;
  };

  const verifySmsCode = async (phoneNumber: string, code: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate verification delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setIsLoading(false);
    
    if (phoneNumber === ADMIN_PHONE && code === VALID_SMS_CODE) {
      const authData = {
        isAuthenticated: true,
        phoneNumber,
        timestamp: Date.now()
      };
      
      localStorage.setItem('admin_auth', JSON.stringify(authData));
      setAuthState({ isAuthenticated: true, phoneNumber });
      return true;
    }
    
    return false;
  };

  const logout = () => {
    localStorage.removeItem('admin_auth');
    setAuthState({ isAuthenticated: false, phoneNumber: null });
  };

  return {
    ...authState,
    isLoading,
    sendSmsCode,
    verifySmsCode,
    logout
  };
};
