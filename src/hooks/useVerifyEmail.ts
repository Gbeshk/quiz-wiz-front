import { useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { api } from '@/lib/api';

const MIN_DISPLAY_MS = 2000;
const REDIRECT_DELAY_MS = 1500;

export type VerifyStatus = 'verifying' | 'success' | 'error';

export function useVerifyEmail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const hasCalled = useRef(false);
  const [status, setStatus] = useState<VerifyStatus>('verifying');
  const [message, setMessage] = useState('Verifying your email address...');

  useEffect(() => {
    if (hasCalled.current) return;
    hasCalled.current = true;

    const startedAt = Date.now();
    const id = searchParams.get('id');
    const hash = searchParams.get('hash');
    const expires = searchParams.get('expires');
    const signature = searchParams.get('signature');

    if (!id || !hash || !expires || !signature) {
      setStatus('error');
      setMessage('Verification link is missing required information.');
      setTimeout(() => navigate('/login', { replace: true }), MIN_DISPLAY_MS);
      return;
    }

    api
      .get(`/email/verify/${id}/${hash}`, {
        params: { expires, signature },
      })
      .then((res) => {
        const msg = res.data?.message ?? 'Email verified successfully!';
        setStatus('success');
        setMessage(msg);
        toast.success(msg);
      })
      .catch((err) => {
        const msg =
          err.response?.data?.message ??
          'Verification link is invalid or expired.';
        setStatus('error');
        setMessage(msg);
        toast.error(msg);
      })
      .finally(() => {
        const elapsed = Date.now() - startedAt;
        const remaining = Math.max(MIN_DISPLAY_MS - elapsed, 0);

        setTimeout(() => {
          navigate('/login', { replace: true });
        }, remaining + REDIRECT_DELAY_MS);
      });
  }, [searchParams, navigate]);

  return { status, message };
}
