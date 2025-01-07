import { InputHTMLAttributes } from 'react';
interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}
export declare function AuthInput({ label, error, className, ...props }: AuthInputProps): import("react/jsx-runtime").JSX.Element;
export {};
