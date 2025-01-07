import { ReactNode } from 'react';
import { AuthContextType } from '../types/auth';
export declare function AuthProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useAuth(): AuthContextType;
