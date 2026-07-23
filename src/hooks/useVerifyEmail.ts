import { useEffect, useRef } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { isAxiosError } from 'axios';
import { api } from '@/lib/api';
import {
  showSuccessToast,
  showWarningToast,
  showErrorToast,
} from '@/utils/toast';

export function useVerifyEmail() {
  const { id, hash } = useParams<{ id: string; hash: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const verifiedRef = useRef(false);

  useEffect(() => {
    if (verifiedRef.current) return;
    verifiedRef.current = true;

    async function verify() {
      if (!id || !hash) {
        showErrorToast('Invalid Link', 'Verification parameters are missing.');
        navigate('/login', { replace: true });
        return;
      }

      const queryString = searchParams.toString();
      const endpoint = `/email/verify/${id}/${hash}${queryString ? `?${queryString}` : ''}`;

      try {
        const response = await api.get(endpoint);
        const status = response.data?.status;

        if (status === 'already_verified') {
          showSuccessToast(
            'Email Already Verified',
            'Your email address is already verified.',
          );
        } else {
          showSuccessToast(
            'Email Verified',
            'Your email address has been verified successfully!',
          );
        }

        navigate('/login', { replace: true });
      } catch (err) {
        const isExpiredOrInvalid =
          isAxiosError(err) &&
          (err.response?.status === 400 || err.response?.status === 403);

        if (isExpiredOrInvalid) {
          const email =
            err.response?.data?.email ?? searchParams.get('email') ?? '';

          showWarningToast(
            'Verification Link Expired',
            'This verification link has expired. Please request a new one.',
          );
          navigate('/login', {
            replace: true,
            state: {
              verificationEmail: email,
              verificationExpired: true,
            },
          });
        } else {
          showErrorToast(
            'Verification Failed',
            'Something went wrong verifying your email.',
          );
          navigate('/login', { replace: true });
        }
      }
    }

    verify();
  }, [id, hash, searchParams, navigate]);
}
