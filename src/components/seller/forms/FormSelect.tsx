import { SelectHTMLAttributes } from 'react';
import { cn } from '../../../utils/cn';

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
}

export function FormSelect({ label, error, options, className, ...props }: FormSelectProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        className={cn(
          "w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900",
          "focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent",
          error && "border-red-500",
          className
        )}
        {...props}
      >
        <option value="">Select an option</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}