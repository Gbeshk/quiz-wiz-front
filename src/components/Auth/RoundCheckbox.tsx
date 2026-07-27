import { useController } from 'react-hook-form';
import type {
  Control,
  RegisterOptions,
  FieldValues,
  Path,
} from 'react-hook-form';
import { CheckBoxIcon } from '@/components/UI/Icons';
import { cn } from '@/lib/utils';

interface RoundCheckboxProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
  hasError?: boolean;
  children?: React.ReactNode;
}

export default function RoundCheckbox<T extends FieldValues>({
  control,
  name,
  rules,
  children,
}: RoundCheckboxProps<T>) {
  const {
    field: { value, onChange, onBlur, ref },
  } = useController({ name, control, rules });

  return (
    <label className="flex cursor-pointer items-center gap-3">
      <input
        type="checkbox"
        ref={ref}
        checked={!!value}
        onChange={onChange}
        onBlur={onBlur}
        className="peer sr-only"
      />
      <div
        className={cn(
          'flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors duration-200',
          'peer-focus-visible:ring-2 peer-focus-visible:ring-black peer-focus-visible:ring-offset-2',
          value ? 'bg-black' : 'border-auth-checkbox-border border',
        )}
      >
        {value && <CheckBoxIcon />}
      </div>
      {children}
    </label>
  );
}
