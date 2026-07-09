import { Link } from 'react-router-dom';
import type { Control, FieldValues, Path } from 'react-hook-form';
import RoundCheckbox from './RoundCheckbox';

interface RememberForgotRowProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
}

export default function RememberForgotRow<T extends FieldValues>({
  control,
  name,
}: RememberForgotRowProps<T>) {
  return (
    <div className="flex gap-3 items-center">
      <RoundCheckbox<T> control={control} name={name} />
      <div className="flex items-center justify-between w-full">
        <p className="font-inter  text-base  text-[#344054]">
          Remember for 30 days
        </p>
        <Link
          to="/forgot-password"
          className="font-inter  text-base  text-[#344054] hover:underline"
        >
          Forgot password?
        </Link>
      </div>
    </div>
  );
}
