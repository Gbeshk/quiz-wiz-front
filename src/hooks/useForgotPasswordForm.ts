import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isAxiosError } from 'axios';
import { showToast } from '@/components/UI/Toast/showToast';
import { api, ensureCsrfCookie } from '@/lib/api';
import { emailRules } from '@/utils/validation';
import type { ForgotPasswordFormValues } from '@/types/auth';
import { useState } from 'react';

interface LocationState {
  expired?: boolean;
  email?: string;
  message?: string;
}

export function useForgotPasswordForm() {
  const location = useLocation();
  const state = location.state as LocationState | null;

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: state?.email || '',
    },
  });

  const [sent, setSent] = useState(false);
  const [isExpired, setIsExpired] = useState(false);

  const handledStateRef = useRef(false);

  useEffect(() => {
    if (handledStateRef.current) return;

    if (state?.expired) {
      handledStateRef.current = true;
      setIsExpired(true);
      if (state.email) {
        setValue('email', state.email);
      }
    }
  }, [state, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await ensureCsrfCookie();
      const response = await api.post('/forgot-password', {
        email: data.email,
      });
      showToast(
        'success',
        'Email sent!',
        response.data?.message ?? 'Check your inbox for the reset link.',
      );
      setSent(true);
      setIsExpired(false);
    } catch (err) {
      if (isAxiosError(err) && err.response?.status === 422) {
        const message =
          err.response.data?.errors?.email?.[0] ??
          err.response.data?.message ??
          'We could not find a user with that email.';
        setError('email', { message });
        showToast('error', 'Request failed', message);
      } else {
        setError('email', {
          message: 'Something went wrong. Please try again.',
        });
        showToast('error', 'Something went wrong', 'Please try again.');
      }
    }
  });

  return {
    register,
    errors,
    submitting: isSubmitting,
    sent,
    isExpired,
    onSubmit,
    rules: { email: emailRules },
  };
}
