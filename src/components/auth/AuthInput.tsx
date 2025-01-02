import { InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function AuthInput({ label, error, className, ...props }: AuthInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        className={cn(
          "w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900",
          "placeholder:text-gray-500",
          "focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent",
          error && "border-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}