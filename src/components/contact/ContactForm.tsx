import React, { useState, useCallback, Suspense } from 'react';
import { Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import { validateForm } from '../../utils/validation';
import { trackEvent } from '../../utils/analytics';

// Lazy load success message component
const SuccessMessage = React.lazy(() => import('./SuccessMessage'));

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (error) setError('');
  }, [error]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const validationError = validateForm(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('submitting');
    
    try {
      // Simulate email sending (replace with actual implementation)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      trackEvent('form_submit', { type: 'contact', success: true });
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Failed to send message:', err);
      setError('Failed to send message. Please try again.');
      setStatus('error');
      trackEvent('form_submit', { type: 'contact', success: false });
    }
  }, [formData]);

  if (status === 'success') {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <SuccessMessage onReset={() => setStatus('idle')} />
      </Suspense>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <FormInput
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        disabled={status === 'submitting'}
        autoComplete="name"
      />
      
      <FormInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        disabled={status === 'submitting'}
        autoComplete="email"
      />
      
      <FormTextarea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        disabled={status === 'submitting'}
      />

      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="text-red-500 text-sm"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={status === 'submitting'}
        icon={<Send className="w-5 h-5" />}
        iconPosition="right"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}