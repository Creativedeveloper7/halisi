import { InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';
import React from 'react';


interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function AuthInput({ label, error, className, ...props }: AuthInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-normal text-white-700">{label}</label>
      <input
        className={cn(
          "w-full px-4 py-3 border border-gray-700 rounded-md text-gray-900", // Add rounded-md for border-radius and border-gray-300 for faded gray border
          "bg-transparent", // Change background color to white or any other color
          "placeholder:text-gray-500",
          "text-white-500",
        
          "focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent", // Corrected the focus ring color
          error && "border-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}