import type { RegisterOptions, FieldValues, Path } from 'react-hook-form';
export const usernameRules = {
  required: 'Username is required',
  minLength: {
    value: 3,
    message: 'Username must be at least 3 characters',
  },
};
export const emailRules = {
  required: 'Email is required',
  pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
};

export const passwordRules = {
  required: 'Password is required',
  minLength: { value: 8, message: 'Must be at least 8 characters' },
};

export function confirmPasswordRules<T extends FieldValues>(
  password: string | undefined,
): RegisterOptions<T, Path<T>> {
  return {
    required: 'Please confirm your password',
    validate: (value) => value === password || 'Passwords do not match',
  } as RegisterOptions<T, Path<T>>;
}
