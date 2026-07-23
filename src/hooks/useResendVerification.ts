import { useState, useEffect, useRef, useCallback } from 'react';
import { isAxiosError } from 'axios';
import { api } from '@/lib/api';
import {
  showSuccessToast,
  showErrorToast,
  showWarningToast,
} from '@/utils/toast';

const DEFAULT_COOLDOWN_SECONDS = 60;
const STORAGE_PREFIX = 'resend_verification_until:';

function readStoredCooldown(email: string | null): number {
  if (!email) return 0;
  const stored = localStorage.getItem(STORAGE_PREFIX + email);
  if (!stored) return 0;

  const until = Number(stored);
  const remaining = Math.ceil((until - Date.now()) / 1000);
  return remaining > 0 ? remaining : 0;
}

function storeCooldown(email: string | null, seconds: number) {
  if (!email) return;
  const until = Date.now() + seconds * 1000;
  localStorage.setItem(STORAGE_PREFIX + email, String(until));
}

export function useResendVerification(email: string | null) {
  const [resending, setResending] = useState(false);
  const [resent, setResent] = useState(false);
  const [cooldown, setCooldown] = useState(() => readStoredCooldown(email));
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setCooldown(readStoredCooldown(email));
  }, [email]);

  useEffect(() => {
    if (cooldown <= 0) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setCooldown((seconds) => (seconds <= 1 ? 0 : seconds - 1));
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [cooldown]);

  const resend = useCallback(async () => {
    if (!email || resending || cooldown > 0) return;

    setResending(true);
    try {
      await api.post('/email/resend-verification', { email });
      setResent(true);
      setCooldown(DEFAULT_COOLDOWN_SECONDS);
      storeCooldown(email, DEFAULT_COOLDOWN_SECONDS);
      showSuccessToast(
        'Verification email sent',
        'Please check your inbox for a new link.',
      );
    } catch (err) {
      if (isAxiosError(err) && err.response?.status === 429) {
        const retryAfter =
          Number(err.response.headers['retry-after']) ||
          DEFAULT_COOLDOWN_SECONDS;
        setCooldown(retryAfter);
        storeCooldown(email, retryAfter);
        showWarningToast(
          'Slow down',
          `Please wait ${retryAfter}s before trying again.`,
        );
      } else {
        showErrorToast('Something went wrong', 'Please try again.');
      }
    } finally {
      setResending(false);
    }
  }, [email, resending, cooldown]);

  return { resend, resending, resent, cooldown };
}
