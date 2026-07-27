import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isAxiosError } from 'axios';
import { api, ensureCsrfCookie } from '@/lib/api';
import { showToast } from '@/components/UI/Toast/showToast';
import { passwordRules } from '@/utils/validation';

export function useResetPasswordForm() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';
  const emailParam = searchParams.get('email') || '';

  const navigate = useNavigate();
  const [checkingToken, setCheckingToken] = useState(true);

  const checkedRef = useRef(false);

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const passwordValue = watch('password');

  useEffect(() => {
    if (checkedRef.current) return;
    checkedRef.current = true;

    async function checkTokenValidity() {
      if (!token || !emailParam) {
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
        return;
      }

      try {
        await ensureCsrfCookie();
        await api.post('/verify-reset-token', {
          token,
          email: emailParam,
        });
      } catch {
        showToast(
          'warning',
          'Token Expired',
          'Password reset link has expired or is invalid.',
        );
        navigate('/forgot-password', {
          replace: true,
          state: {
            expired: true,
            email: emailParam,
            message: 'Password reset link has expired or is invalid.',
          },
        });
      } finally {
        setCheckingToken(false);
      }
    }

    checkTokenValidity();
  }, [token, emailParam, navigate]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await ensureCsrfCookie();
      await api.post('/reset-password', {
        token,
        email: emailParam,
        password: data.password,
        password_confirmation: data.confirmPassword,
      });

      showToast(
        'success',
        'Password Reset',
        'Your password has been reset successfully!',
      );
      navigate('/login');
    } catch (err) {
      if (isAxiosError(err)) {
        const responseData = err.response?.data;

        if (
          responseData?.status === 'invalid_token' ||
          err.response?.status === 400
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
              email: emailParam,
              message: 'Password reset link has expired or is invalid.',
            },
          });
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
    }
  });

  return {
    register,
    errors,
    submitting: isSubmitting,
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
