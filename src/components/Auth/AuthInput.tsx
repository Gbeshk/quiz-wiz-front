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
      <label className="font-inter text-auth-label text-base">{label}</label>
      <div className="relative">
        <input
          type={inputType}
          placeholder={placeholder}
          className={cn(
            'hover:bg-auth-hover-bg focus:ring-auth-ring focus:border-auth-ring placeholder:text-auth-placeholder font-inter h-14 w-full rounded-lg border px-4 py-4.5 text-base transition-all duration-300 ease-in-out focus:ring-3 focus:outline-none',
            error || isPassword ? 'pr-12' : '',
            error ? 'border-auth-border-error' : 'border-auth-border',
          )}
          {...register(name, rules)}
        />
        <div className="absolute top-1/2 right-4 flex -translate-y-1/2 items-center">
          {error ? (
            <ErrorIcon />
          ) : isPassword ? (
            <button
              type="button"
              className="cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeCrossed /> : <Eye />}
            </button>
          ) : null}
        </div>
      </div>
      {error && <ErrorText message={error.message ?? ''} />}
    </div>
  );
}
