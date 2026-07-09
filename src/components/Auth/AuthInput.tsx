import { useState } from 'react';
import type {
  UseFormRegister,
  RegisterOptions,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';
import { ErrorIcon, Eye, EyeCrossed } from '@/components/UI/Icons';
import ErrorText from './ErrorText';
import { cn } from '@/lib/utils';

interface AuthInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T, Path<T>>;
  error?: FieldError;
}

export default function AuthInput<T extends FieldValues>({
  label,
  name,
  type = 'text',
  placeholder,
  register,
  rules,
  error,
}: AuthInputProps<T>) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-inter text-base text-auth-label">{label}</label>
      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          className={cn(
            'rounded-lg w-106.5 h-14 focus:outline-none hover:bg-auth-hover-bg focus:ring-3 focus:ring-auth-ring focus:border-auth-ring transition-all ease-in-out duration-300 border py-4.5 px-4 placeholder:text-auth-placeholder font-inter text-base',
            error || isPassword ? 'pr-12' : '',
            error ? 'border-auth-border-error' : 'border-auth-border',
          )}
          {...register(name, rules)}
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
          {error ? (
            <ErrorIcon />
          ) : isPassword ? (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <Eye /> : <EyeCrossed />}
            </button>
          ) : null}
        </div>
      </div>
      {error && <ErrorText message={error.message ?? ''} />}
    </div>
  );
}
