
import { useState, useEffect } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  adminCode: string | null;
}

const VALID_ADMIN_CODE = 'ADMIN2024'; // Simple admin code

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    adminCode: null
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const storedAuth = localStorage.getItem('admin_auth');
    if (storedAuth) {
      const { isAuthenticated, adminCode, timestamp } = JSON.parse(storedAuth);
      const now = Date.now();
      const oneHour = 60 * 60 * 1000;
      
      // Auto-logout after 1 hour
      if (now - timestamp < oneHour && isAuthenticated) {
        setAuthState({ isAuthenticated: true, adminCode });
      } else {
        localStorage.removeItem('admin_auth');
      }
    }
  }, []);

  const verifyAdminCode = async (code: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate verification delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setIsLoading(false);
    
    if (code === VALID_ADMIN_CODE) {
      const authData = {
        isAuthenticated: true,
        adminCode: code,
        timestamp: Date.now()
      };
      
      localStorage.setItem('admin_auth', JSON.stringify(authData));
      setAuthState({ isAuthenticated: true, adminCode: code });
      return true;
    }
    
    return false;
  };

  const logout = () => {
    localStorage.removeItem('admin_auth');
    setAuthState({ isAuthenticated: false, adminCode: null });
  };

  return {
    ...authState,
    isLoading,
    verifyAdminCode,
    logout
  };
};
