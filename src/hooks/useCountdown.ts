import { useEffect, useRef, useState } from 'react';

export function useCountdown(
  totalSeconds: number,
  isPaused: boolean,
  onExpire: () => void,
) {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const onExpireRef = useRef(onExpire);
  onExpireRef.current = onExpire;

  useEffect(() => {
    if (isPaused) return;
    if (secondsLeft <= 0) {
      onExpireRef.current();
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft, isPaused]);

  return secondsLeft;
}
