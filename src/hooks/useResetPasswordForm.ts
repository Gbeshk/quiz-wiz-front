import { useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useQuery, useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { api, ensureCsrfCookie } from '@/lib/api';
import { showToast } from '@/components/UI/Toast/showToast';
import { passwordRules } from '@/utils/validation';

function redirectExpired(
  navigate: ReturnType<typeof useNavigate>,
  emailParam: string,
) {
  showToast(
    'warning',
    'Token Expired',
    'Password reset link has expired or is invalid.',
  );
  navigate('/forgot-password', {
    replace: true,
    state: {
      expired: true,
      email: emailParam || '',
      message: 'Password reset link has expired or is invalid.',
    },
  });
}

export function useResetPasswordForm() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';
  const emailParam = searchParams.get('email') || '';
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting: formSubmitting },
  } = useForm({
    defaultValues: { password: '', confirmPassword: '' },
  });

  const passwordValue = watch('password');

  const handledRef = useRef(false);

  const { isLoading: checkingToken, error: tokenError } = useQuery({
    queryKey: ['verify-reset-token', token, emailParam],
    queryFn: async () => {
      if (!token || !emailParam) throw new Error('missing_token_or_email');
      await ensureCsrfCookie();
      await api.post('/verify-reset-token', { token, email: emailParam });
      return true;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (tokenError && !handledRef.current) {
    handledRef.current = true;
    redirectExpired(navigate, emailParam);
  }

  const resetPasswordMutation = useMutation({
    mutationFn: async (data: { password: string; confirmPassword: string }) => {
      await ensureCsrfCookie();
      await api.post('/reset-password', {
        token,
        email: emailParam,
        password: data.password,
        password_confirmation: data.confirmPassword,
      });
    },
    onSuccess: () => {
      showToast(
        'success',
        'Password Reset',
        'Your password has been reset successfully!',
      );
      navigate('/login');
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        const responseData = err.response?.data;
        if (
          responseData?.status === 'invalid_token' ||
          err.response?.status === 400
        ) {
          redirectExpired(navigate, emailParam);
        } else if (responseData?.errors) {
          const passErr = responseData.errors.password?.[0];
          if (passErr) setError('password', { message: passErr });
          showToast('error', 'Reset Failed', 'Please fix the errors below.');
        } else {
          showToast(
            'error',
            'Error',
            responseData?.message || 'Something went wrong.',
          );
        }
      } else {
        showToast('error', 'Error', 'Something went wrong. Please try again.');
      }
    },
  });

  const onSubmit = handleSubmit((data) => resetPasswordMutation.mutate(data));

  return {
    register,
    errors,
    submitting: formSubmitting || resetPasswordMutation.isPending,
    checkingToken,
    onSubmit,
    rules: {
      password: passwordRules,
      confirmPassword: {
        required: 'Please confirm your password',
        validate: (value: string) =>
          value === passwordValue || 'Passwords do not match',
      },
    },
  };
}
