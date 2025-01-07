import { ButtonHTMLAttributes } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    loading?: boolean;
}
export declare function Button({ children, variant, loading, className, disabled, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
