import { ReactNode } from 'react';
interface AuthLayoutProps {
    children: ReactNode;
    image: string;
    title: string;
    subtitle: string;
}
export declare function AuthLayout({ children, image, title, subtitle }: AuthLayoutProps): import("react/jsx-runtime").JSX.Element;
export {};
