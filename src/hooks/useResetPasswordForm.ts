import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';
import { api, ensureCsrfCookie } from '@/lib/api';
import { confirmPasswordRules, passwordRules } from '@/utils/validation';
import type { ResetPasswordFormValues } from '@/types/auth';

export function useResetPasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [submitting, setSubmitting] = useState(false);

  const password = watch('password');
  const token = searchParams.get('token') ?? '';
  const email = searchParams.get('email') ?? '';

  const onSubmit = handleSubmit(async (data) => {
    setSubmitting(true);
    try {
      await ensureCsrfCookie();
      const response = await api.post('/reset-password', {
        token,
        email,
        password: data.password,
        password_confirmation: data.confirmPassword,
      });
      toast.success(response.data?.message ?? 'Password reset successfully.');
      navigate('/login');
    } catch (err) {
      if (isAxiosError(err) && err.response?.status === 422) {
        const message =
          err.response.data?.errors?.email?.[0] ??
          err.response.data?.message ??
          'This reset link is invalid or has expired.';
        toast.error(message);
        navigate('/login');
      } else {
        setError('password', {
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
    onSubmit,
    password,
    rules: {
      password: passwordRules,
      confirmPassword: confirmPasswordRules<ResetPasswordFormValues>(password),
    },
  };
}
