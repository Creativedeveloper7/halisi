import { InputHTMLAttributes } from 'react';
import { cn } from '../../../utils/cn';

interface FormFileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  preview?: string;
}

export function FormFileInput({ label, error, preview, className, ...props }: FormFileInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="file"
        className={cn(
          "w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900",
          "file:mr-4 file:py-2 file:px-4 file:border-0",
          "file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700",
          error && "border-red-500",
          className
        )}
        {...props}
      />
      {preview && (
        <img src={preview} alt="Preview" className="mt-2 max-w-xs rounded-lg" />
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}