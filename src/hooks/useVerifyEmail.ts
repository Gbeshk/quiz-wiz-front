import { useRef } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { api } from '@/lib/api';
import { showToast } from '@/components/UI/Toast/showToast';

export function useVerifyEmail() {
  const { id, hash } = useParams<{ id: string; hash: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const handledRef = useRef(false);

  const queryString = searchParams.toString();

  const { data, error } = useQuery({
    queryKey: ['verify-email', id, hash, queryString],
    queryFn: async () => {
      if (!id || !hash) throw new Error('missing_params');
      const endpoint = `/email/verify/${id}/${hash}${queryString ? `?${queryString}` : ''}`;
      const response = await api.get(endpoint);
      return response.data?.status;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  if (!handledRef.current) {
    if (data !== undefined) {
      handledRef.current = true;
      if (data === 'already_verified') {
        showToast(
          'success',
          'Email Already Verified',
          'Your email address is already verified.',
        );
      } else {
        showToast(
          'success',
          'Email Verified',
          'Your email address has been verified successfully!',
        );
      }
      navigate('/login', { replace: true });
    } else if (error) {
      handledRef.current = true;

      if (error instanceof Error && error.message === 'missing_params') {
        showToast(
          'error',
          'Invalid Link',
          'Verification parameters are missing.',
        );
        navigate('/login', { replace: true });
      } else if (
        isAxiosError(error) &&
        (error.response?.status === 400 || error.response?.status === 403)
      ) {
        const email =
          error.response?.data?.email ?? searchParams.get('email') ?? '';
        showToast(
          'warning',
          'Verification Link Expired',
          'This verification link has expired. Please request a new one.',
        );
        navigate('/login', {
          replace: true,
          state: { verificationEmail: email, verificationExpired: true },
        });
      } else {
        showToast(
          'error',
          'Verification Failed',
          'Something went wrong verifying your email.',
        );
        navigate('/login', { replace: true });
      }
    }
  }
}
