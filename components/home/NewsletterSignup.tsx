'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { MailCheck, Mail } from 'lucide-react';
import { sendEmail } from '@/lib/email';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Send notification email
      await sendEmail({
        to_email: 'info@excelia-bd.com',
        subject: 'New Newsletter Subscription',
        message: `New newsletter subscription from: ${email}`
      });

      setEmail('');
      toast({
        title: "Subscription confirmed!",
        description: "Thank you for subscribing to our newsletter.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#0B3C5D] to-[#328CC1] rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-xl">
              <Mail className="h-10 w-10 mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Updated with Industry Insights
              </h2>
              <p>
                Subscribe to our newsletter for exclusive content, the latest trends in business intelligence,
                and expert analysis delivered straight to your inbox.
              </p>
            </div>
            
            <div className="w-full md:w-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-lg">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow border-0 focus-visible:ring-0 text-foreground"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-[#006400] hover:bg-[#005100] text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Subscribe <MailCheck className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
              <p className="text-white/80 text-sm mt-2">
                We respect your privacy and will not share your information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;