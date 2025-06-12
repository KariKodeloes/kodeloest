
import { useState, useEffect } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  adminCode: string | null;
}

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
      try {
        const { isAuthenticated, adminCode, timestamp } = JSON.parse(storedAuth);
        const now = Date.now();
        const oneHour = 60 * 60 * 1000;
        
        // Auto-logout after 1 hour
        if (now - timestamp < oneHour && isAuthenticated) {
          setAuthState({ isAuthenticated: true, adminCode });
        } else {
          localStorage.removeItem('admin_auth');
        }
      } catch (error) {
        // Remove corrupted auth data
        localStorage.removeItem('admin_auth');
      }
    }
  }, []);

  const verifyAdminCode = async (code: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Input validation
    if (!code || code.trim().length === 0) {
      setIsLoading(false);
      return false;
    }

    // Sanitize input
    const sanitizedCode = code.trim();
    
    // Basic length check to prevent excessively long inputs
    if (sanitizedCode.length > 100) {
      setIsLoading(false);
      return false;
    }
    
    // Simulate verification delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setIsLoading(false);
    
    // TODO: Replace with proper server-side authentication
    // For now, using environment variable or secure comparison
    const validAdminCode = import.meta.env.VITE_ADMIN_CODE || 'SECURE_ADMIN_2024';
    
    if (sanitizedCode === validAdminCode) {
      const authData = {
        isAuthenticated: true,
        adminCode: sanitizedCode,
        timestamp: Date.now()
      };
      
      localStorage.setItem('admin_auth', JSON.stringify(authData));
      setAuthState({ isAuthenticated: true, adminCode: sanitizedCode });
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
