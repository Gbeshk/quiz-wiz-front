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
    <div className="flex items-center justify-between">
      <RoundCheckbox<T> control={control} name={name}>
        <p className="font-inter text-auth-label text-base">
          Remember for 30 days
        </p>
      </RoundCheckbox>

      <Link
        to="/forgot-password"
        className="font-inter text-auth-label text-base hover:underline"
      >
        Forgot password?
      </Link>
    </div>
  );
}
