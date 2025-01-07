export interface User {
    id: string;
    fullName: string;
    email: string;
    createdAt: string;
}
export interface AuthFormData {
    email: string;
    password: string;
    fullName?: string;
}
export interface AuthResponse {
    user: User | null;
    error: string | null;
}
export interface AuthContextType {
    user: User | null;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<AuthResponse>;
    signUp: (email: string, password: string, fullName: string) => Promise<AuthResponse>;
    signOut: () => Promise<void>;
}
