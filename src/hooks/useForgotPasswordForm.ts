import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isAxiosError } from 'axios';
import { showSuccessToast, showErrorToast } from '@/utils/toast';
import { api, ensureCsrfCookie } from '@/lib/api';
import { emailRules } from '@/utils/validation';
import type { ForgotPasswordFormValues } from '@/types/auth';

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
    formState: { errors },
  } = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: state?.email || '',
    },
  });

  const [submitting, setSubmitting] = useState(false);
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
    setSubmitting(true);
    try {
      await ensureCsrfCookie();
      const response = await api.post('/forgot-password', {
        email: data.email,
      });
      showSuccessToast(
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
        showErrorToast('Request failed', message);
      } else {
        setError('email', {
          message: 'Something went wrong. Please try again.',
        });
        showErrorToast('Something went wrong', 'Please try again.');
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
    isExpired,
    onSubmit,
    rules: { email: emailRules },
  };
}
