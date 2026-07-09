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
}

export default function RoundCheckbox<T extends FieldValues>({
  control,
  name,
  rules,
}: RoundCheckboxProps<T>) {
  const {
    field: { value, onChange, onBlur, ref },
  } = useController({ name, control, rules });

  return (
    <label
      className={cn(
        'w-5 h-5 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-200',
        value ? 'bg-black' : 'border border-auth-checkbox-border',
      )}
    >
      {value && <CheckBoxIcon />}
      <input
        type="checkbox"
        ref={ref}
        checked={!!value}
        onChange={onChange}
        onBlur={onBlur}
        className="hidden"
      />
    </label>
  );
}
