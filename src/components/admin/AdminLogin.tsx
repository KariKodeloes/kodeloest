
import React, { useState, useRef } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/use-toast';
import { Lock, AlertTriangle } from 'lucide-react';

const AdminLogin = () => {
  const [adminCode, setAdminCode] = useState('');
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const { verifyAdminCode, isLoading } = useAuth();
  const { toast } = useToast();
  const lastAttemptTime = useRef(0);

  const MAX_FAILED_ATTEMPTS = 5;
  const BLOCK_DURATION = 15 * 60 * 1000; // 15 minutes
  const MIN_TIME_BETWEEN_ATTEMPTS = 1000; // 1 second

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    const now = Date.now();
    if (now - lastAttemptTime.current < MIN_TIME_BETWEEN_ATTEMPTS) {
      toast({
        title: 'For mange forsøk',
        description: 'Vennligst vent før du prøver igjen',
        variant: 'destructive'
      });
      return;
    }
    lastAttemptTime.current = now;

    // Check if user is temporarily blocked
    if (isBlocked) {
      toast({
        title: 'Konto midlertidig blokkert',
        description: 'For mange mislykkede forsøk. Prøv igjen senere.',
        variant: 'destructive'
      });
      return;
    }

    // Input validation
    if (!adminCode || adminCode.trim().length === 0) {
      toast({
        title: 'Feil',
        description: 'Vennligst skriv inn admin-kode',
        variant: 'destructive'
      });
      return;
    }

    // Basic sanitization
    const sanitizedCode = adminCode.trim();
    
    if (sanitizedCode.length > 100) {
      toast({
        title: 'Feil',
        description: 'Admin-kode er for lang',
        variant: 'destructive'
      });
      return;
    }

    const success = await verifyAdminCode(sanitizedCode);
    
    if (!success) {
      const newFailedAttempts = failedAttempts + 1;
      setFailedAttempts(newFailedAttempts);
      
      if (newFailedAttempts >= MAX_FAILED_ATTEMPTS) {
        setIsBlocked(true);
        setTimeout(() => {
          setIsBlocked(false);
          setFailedAttempts(0);
        }, BLOCK_DURATION);
        
        toast({
          title: 'Konto blokkert',
          description: `For mange mislykkede forsøk. Kontoen er blokkert i 15 minutter.`,
          variant: 'destructive'
        });
      } else {
        toast({
          title: 'Feil',
          description: `Ugyldig admin-kode. ${MAX_FAILED_ATTEMPTS - newFailedAttempts} forsøk igjen.`,
          variant: 'destructive'
        });
      }
      
      setAdminCode('');
    } else {
      setFailedAttempts(0);
      setIsBlocked(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Basic input sanitization
    const sanitizedValue = value.replace(/[<>]/g, '');
    setAdminCode(sanitizedValue);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-quicksand">Admin Innlogging</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerifyCode} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Admin-kode
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  type="password"
                  value={adminCode}
                  onChange={handleInputChange}
                  placeholder="Skriv inn admin-kode"
                  className="pl-10"
                  maxLength={100}
                  disabled={isBlocked}
                  autoComplete="off"
                />
              </div>
            </div>
            
            {failedAttempts > 0 && !isBlocked && (
              <div className="flex items-center space-x-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <span className="text-sm text-yellow-800">
                  {failedAttempts} mislykkede forsøk. {MAX_FAILED_ATTEMPTS - failedAttempts} forsøk igjen.
                </span>
              </div>
            )}
            
            {isBlocked && (
              <div className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-md">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <span className="text-sm text-red-800">
                  Konto midlertidig blokkert på grunn av for mange mislykkede forsøk.
                </span>
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading || isBlocked}
            >
              {isLoading ? 'Verifiserer...' : 'Logg inn'}
            </Button>
          </form>
          
          <div className="mt-6 p-3 bg-blue-50 rounded-md">
            <p className="text-sm text-blue-800">
              <strong>Sikkerhet:</strong><br />
              Sett VITE_ADMIN_CODE som miljøvariabel for å endre admin-koden.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
