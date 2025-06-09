
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/use-toast';
import { Lock } from 'lucide-react';

const AdminLogin = () => {
  const [adminCode, setAdminCode] = useState('');
  const { verifyAdminCode, isLoading } = useAuth();
  const { toast } = useToast();

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!adminCode) {
      toast({
        title: 'Feil',
        description: 'Vennligst skriv inn admin-kode',
        variant: 'destructive'
      });
      return;
    }

    const success = await verifyAdminCode(adminCode);
    
    if (!success) {
      toast({
        title: 'Feil',
        description: 'Ugyldig admin-kode',
        variant: 'destructive'
      });
      setAdminCode('');
    }
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
                  onChange={(e) => setAdminCode(e.target.value)}
                  placeholder="Skriv inn admin-kode"
                  className="pl-10"
                />
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? 'Verifiserer...' : 'Logg inn'}
            </Button>
          </form>
          
          <div className="mt-6 p-3 bg-blue-50 rounded-md">
            <p className="text-sm text-blue-800">
              <strong>Demo-innlogging:</strong><br />
              Admin-kode: ADMIN2024
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
