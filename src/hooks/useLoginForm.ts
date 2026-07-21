import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';
import { emailRules, passwordRules } from '@/utils/validation';
import type { LoginFormValues } from '@/types/auth';
import { useAuth } from '@/context/AuthContext';
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

  const onSubmit = handleSubmit(async (data) => {
    setSubmitting(true);
    try {
      await login(data.email, data.password, data.remember);
      navigate('/quizzes');
    } catch (err) {
      if (isAxiosError(err) && err.response?.status === 422) {
        const message =
          err.response.data?.errors?.email?.[0] ??
          err.response.data?.message ??
          'Invalid credentials.';
        setError('email', { message });
        toast.error(message);
      } else {
        setError('email', {
          message: 'Something went wrong. Please try again.',
        });
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
      email: emailRules,
      password: passwordRules,
    },
  };
}
