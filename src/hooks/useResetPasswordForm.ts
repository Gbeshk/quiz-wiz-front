import { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isAxiosError } from 'axios';
import { api } from '@/lib/api';
import {
  showSuccessToast,
  showErrorToast,
  showWarningToast,
} from '@/utils/toast';
import { passwordRules } from '@/utils/validation';

export function useResetPasswordForm() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') || '';
  const emailParam = searchParams.get('email') || '';

  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [checkingToken, setCheckingToken] = useState(true);

  const checkedRef = useRef(false);

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
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
        showWarningToast(
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
        await api.post('/verify-reset-token', {
          token,
          email: emailParam,
        });
      } catch {
        showWarningToast(
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
    setSubmitting(true);

    try {
      await api.post('/reset-password', {
        token,
        email: emailParam,
        password: data.password,
        password_confirmation: data.confirmPassword,
      });

      showSuccessToast(
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
          showWarningToast(
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

          showErrorToast('Reset Failed', 'Please fix the errors below.');
        } else {
          showErrorToast(
            'Error',
            responseData?.message || 'Something went wrong.',
          );
        }
      } else {
        showErrorToast('Error', 'Something went wrong. Please try again.');
      }
    } finally {
      setSubmitting(false);
    }
  });

  return {
    register,
    errors,
    submitting,
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
