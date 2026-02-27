import React, { useState } from 'react';
import { Mail, CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const EmailSubscription: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const { error: insertError } = await supabase
        .from('email_subscriptions')
        .insert([{ email, source: 'footer' }]);

      if (insertError) {
        if (insertError.code === '23505') { // Unique constraint violation
          setError('This email is already subscribed to our newsletter.');
        } else {
          throw insertError;
        }
      } else {
        setIsSubmitted(true);
        setEmail('');
      }
    } catch (err) {
      console.error('Error subscribing email:', err);
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-primary/10 p-6 rounded-xl text-center">
        <CheckCircle className="text-primary mx-auto mb-3" size={32} />
        <h4 className="font-bold text-lg mb-2 text-gray-800">Thank You!</h4>
        <p className="text-gray-600">You've successfully subscribed to our newsletter.</p>
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-bold text-lg mb-4 text-gray-800">Newsletter</h3>
      <p className="text-gray-700 mb-4">
        Subscribe to our newsletter for the latest biopesticide updates, farming tips, and exclusive offers.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        
        {error && (
          <div className="text-red-600 text-sm bg-red-50 p-2 rounded">
            {error}
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn btn-primary flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin mr-2" size={18} />
              Subscribing...
            </>
          ) : (
            <>
              <Mail className="mr-2" size={18} />
              Subscribe
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default EmailSubscription;