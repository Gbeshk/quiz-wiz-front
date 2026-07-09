import { useState } from 'react';
import type {
  UseFormRegister,
  RegisterOptions,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';
import Eye from '../UI/Icons/Eye';
import EyeCrossed from '../UI/Icons/EyeCrossed';
import ErrorIcon from '../UI/Icons/ErrorIcon';
import ErrorText from './ErrorText';

interface PasswordInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T, Path<T>>;
  error?: FieldError;
  placeholder?: string;
}

export default function PasswordInput<T extends FieldValues>({
  label,
  name,
  register,
  rules,
  error,
  placeholder = 'must be 8 characters',
}: PasswordInputProps<T>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-inter text-base  text-[#344054]">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          className={`rounded-lg w-106.5 h-14 focus:outline-none hover:bg-[#F9FAFB] focus:ring-3 focus:ring-[#BCC7FF] focus:border-[#BCC7FF] transition-all ease-in-out duration-300 border py-4.5 px-4 pr-12 placeholder:text-[#667085] font-inter text-base ${
            error ? 'border-[#FDA29B]' : 'border-[#D0D5DD]'
          }`}
          {...register(name, rules)}
        />
        {error ? (
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            <ErrorIcon />
          </span>
        ) : (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <Eye /> : <EyeCrossed />}
          </button>
        )}
      </div>
      {error && <ErrorText message={error.message ?? ''} />}
    </div>
  );
}
