import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';
import { api, ensureCsrfCookie } from '@/lib/api';
import { emailRules } from '@/utils/validation';
import type { ForgotPasswordFormValues } from '@/types/auth';

export function useForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>();
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setSubmitting(true);
    try {
      await ensureCsrfCookie();
      const response = await api.post('/forgot-password', {
        email: data.email,
      });
      toast.success(response.data?.message ?? 'Reset link sent.');
      setSent(true);
    } catch (err) {
      if (isAxiosError(err) && err.response?.status === 422) {
        const message =
          err.response.data?.errors?.email?.[0] ??
          err.response.data?.message ??
          'We could not find a user with that email.';
        setError('email', { message });
        toast.error(message);
      } else {
        setError('email', {
          message: 'Something went wrong. Please try again.',
        });
        toast.error('Something went wrong. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  });

  return {
    register,
    errors,
    submitting,
    sent,
    onSubmit,
    rules: { email: emailRules },
  };
}
