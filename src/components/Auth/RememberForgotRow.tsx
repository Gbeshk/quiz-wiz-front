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
    <div className="flex items-center gap-3">
      <RoundCheckbox<T> control={control} name={name} />
      <div className="flex w-full items-center justify-between">
        <p className="font-inter text-auth-label text-base">
          Remember for 30 days
        </p>
        <Link
          to="/forgot-password"
          className="font-inter text-auth-label text-base hover:underline"
        >
          Forgot password?
        </Link>
      </div>
    </div>
  );
}
