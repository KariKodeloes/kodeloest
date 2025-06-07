
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { useAuth } from '../../hooks/useAuth';
import { useToast } from '../../hooks/use-toast';
import { Phone, MessageSquare } from 'lucide-react';

const AdminLogin = () => {
  const [step, setStep] = useState<'phone' | 'code'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [smsCode, setSmsCode] = useState('');
  const { sendSmsCode, verifySmsCode, isLoading } = useAuth();
  const { toast } = useToast();

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber) {
      toast({
        title: 'Feil',
        description: 'Vennligst skriv inn telefonnummer',
        variant: 'destructive'
      });
      return;
    }

    const success = await sendSmsCode(phoneNumber);
    
    if (success) {
      setStep('code');
      toast({
        title: 'SMS sendt',
        description: 'Skriv inn koden du mottok på SMS'
      });
    } else {
      toast({
        title: 'Feil',
        description: 'Ugyldig telefonnummer',
        variant: 'destructive'
      });
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!smsCode) {
      toast({
        title: 'Feil',
        description: 'Vennligst skriv inn SMS-kode',
        variant: 'destructive'
      });
      return;
    }

    const success = await verifySmsCode(phoneNumber, smsCode);
    
    if (!success) {
      toast({
        title: 'Feil',
        description: 'Ugyldig SMS-kode',
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-quicksand">Admin Innlogging</CardTitle>
        </CardHeader>
        <CardContent>
          {step === 'phone' ? (
            <form onSubmit={handleSendCode} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Telefonnummer
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="12345678"
                    className="pl-10"
                  />
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? 'Sender...' : 'Send SMS-kode'}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerifyCode} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  SMS-kode
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="text"
                    value={smsCode}
                    onChange={(e) => setSmsCode(e.target.value)}
                    placeholder="1234"
                    className="pl-10"
                    maxLength={4}
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  Kode sendt til {phoneNumber}
                </p>
              </div>
              <div className="space-y-2">
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? 'Verifiserer...' : 'Logg inn'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    setStep('phone');
                    setSmsCode('');
                  }}
                >
                  Tilbake
                </Button>
              </div>
            </form>
          )}
          
          <div className="mt-6 p-3 bg-blue-50 rounded-md">
            <p className="text-sm text-blue-800">
              <strong>Demo-innlogging:</strong><br />
              Telefon: 12345678<br />
              SMS-kode: 1234
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
