import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isAxiosError } from 'axios';
import { api, ensureCsrfCookie } from '@/lib/api';
import { showSuccessToast, showErrorToast } from '@/utils/toast';
import {
  emailRules,
  passwordRules,
  confirmPasswordRules,
  usernameRules,
} from '@/utils/validation';
import type { RegisterFormValues } from '@/types/auth';

export function useRegisterForm() {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    control,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    mode: 'onChange',
  });

  const password = watch('password');

  const mapBackendErrors = (backendErrors: Record<string, string[]>) => {
    if (backendErrors?.username) {
      setError('username', { message: backendErrors.username[0] });
    }
    if (backendErrors?.email) {
      setError('email', { message: backendErrors.email[0] });
    }
    if (backendErrors?.password) {
      setError('password', { message: backendErrors.password[0] });
    }
    if (backendErrors?.password_confirmation) {
      setError('confirmPassword', {
        message: backendErrors.password_confirmation[0],
      });
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    setSubmitting(true);
    try {
      await ensureCsrfCookie();
      const response = await api.post('/register', {
        username: data.username,
        email: data.email,
        password: data.password,
        password_confirmation: data.confirmPassword,
        terms: data.acceptTerms,
      });
      showSuccessToast(
        'Registered successfully!',
        response.data?.message ?? 'Verification email is sent.',
      );
      navigate('/login');
    } catch (err) {
      if (isAxiosError(err) && err.response?.status === 422) {
        mapBackendErrors(err.response.data?.errors);
      } else {
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
    rules: {
      username: usernameRules,
      email: emailRules,
      password: passwordRules,
      confirmPassword: confirmPasswordRules<RegisterFormValues>(password),
    },
  };
}
