import type {
  UseFormRegister,
  RegisterOptions,
  FieldError,
  FieldValues,
  Path,
} from 'react-hook-form';
import ErrorIcon from '../UI/Icons/ErrorIcon';
import ErrorText from './ErrorText';

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
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-inter  text-base  text-[#344054]">{label}</label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className={`rounded-lg w-106.5 h-14 focus:outline-none hover:bg-[#F9FAFB] focus:ring-3 focus:ring-[#BCC7FF] focus:border-[#BCC7FF] transition-all ease-in-out duration-300 border py-4.5 px-4 placeholder:text-[#667085] font-inter text-base ${
            error ? 'border-[#FDA29B] pr-12' : 'border-[#D0D5DD]'
          }`}
          {...register(name, rules)}
        />
        {error && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            <ErrorIcon />
          </span>
        )}
      </div>
      {error && <ErrorText message={error.message ?? ''} />}
    </div>
  );
}
