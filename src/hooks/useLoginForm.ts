import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isAxiosError } from 'axios';
import { showToast } from '@/components/UI/Toast/showToast';
import { emailRules, passwordRules } from '@/utils/validation';
import { ensureCsrfCookie } from '@/lib/api';
import type { LoginFormValues } from '@/types/auth';
import { useAuth } from '@/context/AuthContext';
import { useResendVerification } from '@/hooks/useResendVerification';

export function useLoginForm() {
  const {
    register,
    control,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>();
  const { login } = useAuth();
  const navigate = useNavigate();
  const [unverifiedEmail, setUnverifiedEmail] = useState<string | null>(null);

  const { resend, resending, resent, cooldown } =
    useResendVerification(unverifiedEmail);

  const onSubmit = handleSubmit(async (data) => {
    setUnverifiedEmail(null);

    try {
      await ensureCsrfCookie();
      await login(data.email, data.password, data.remember);
      navigate('/quizzes');
    } catch (err) {
      if (isAxiosError(err) && err.response?.status === 403) {
        const email = err.response.data?.email ?? data.email;
        setUnverifiedEmail(email);
        showToast(
          'warning',
          'Email not verified',
          'Please verify your email before logging in.',
        );
      } else if (isAxiosError(err) && err.response?.status === 422) {
        const message =
          err.response.data?.errors?.email?.[0] ??
          err.response.data?.message ??
          'Invalid credentials.';
        setError('email', { message });
        showToast('error', 'Login failed', message);
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
    control,
    errors,
    submitting: isSubmitting,
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
