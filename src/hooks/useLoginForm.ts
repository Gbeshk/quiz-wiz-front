import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isAxiosError } from 'axios';
import { showErrorToast, showWarningToast } from '@/utils/toast';
import { emailRules, passwordRules } from '@/utils/validation';
import { api } from '@/lib/api';
import type { LoginFormValues } from '@/types/auth';
import { useAuth } from '@/context/AuthContext';
import { useResendVerification } from '@/hooks/useResendVerification';

export function useLoginForm() {
  const {
    register,
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [unverifiedEmail, setUnverifiedEmail] = useState<string | null>(null);

  const { resend, resending, resent, cooldown } =
    useResendVerification(unverifiedEmail);

  const onSubmit = handleSubmit(async (data) => {
    setSubmitting(true);
    setUnverifiedEmail(null);

    try {
      await api.get('http://localhost:8000/sanctum/csrf-cookie');
      await login(data.email, data.password, data.remember);
      navigate('/quizzes');
    } catch (err) {
      if (isAxiosError(err) && err.response?.status === 403) {
        const email = err.response.data?.email ?? data.email;
        setUnverifiedEmail(email);
        showWarningToast(
          'Email not verified',
          'Please verify your email before logging in.',
        );
      } else if (isAxiosError(err) && err.response?.status === 422) {
        const message =
          err.response.data?.errors?.email?.[0] ??
          err.response.data?.message ??
          'Invalid credentials.';
        setError('email', { message });
        showErrorToast('Login failed', message);
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
    control,
    errors,
    submitting,
    onSubmit,
    unverifiedEmail,
    resending,
    resent,
    resendCooldown: cooldown,
    resendVerification: resend,
    rules: {
      email: emailRules,
      password: passwordRules,
    },
  };
}
