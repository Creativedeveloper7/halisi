import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { AuthContextType, User, AuthResponse } from '../types/auth';
import mockUsers from '../data/mock-users.json';
import { signInSchema } from '../utils/validation';
import { signUpSchema } from '../utils/validation';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string): Promise<AuthResponse> => {
    try {
      // Validate input
      const validationResult = signInSchema.safeParse({ email, password });
      if (!validationResult.success) {
        const errorMessages = validationResult.error.errors.map(err => err.message).join(', ');
        return { user: null, error: errorMessages };
      }

      // Check credentials against mock data
      const mockUser = mockUsers.users.find(u => u.email === email);
      if (!mockUser) {
        return { user: null, error: 'Invalid email or password' };
      }

      // In a real app, you would hash and compare passwords
      // For demo, we'll just check if the user exists
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return { user: mockUser, error: null };
    } catch (error) {
      console.error('SignIn Error:', error);
      return { user: null, error: 'An error occurred during sign in' };
    }
  };

  const signUp = async (email: string, password: string, fullName: string): Promise<AuthResponse> => {
    try {
      // Validate input
      const validationResult = signUpSchema.safeParse({ email, password, fullName });
      if (!validationResult.success) {
        const errorMessages = validationResult.error.errors.map(err => err.message).join(', ');
        return { user: null, error: errorMessages };
      }

      // Check if email already exists
      const existingUser = mockUsers.users.find(u => u.email === email);
      if (existingUser) {
        return { user: null, error: 'Email already in use' };
      }

      // Create new user
      const newUser: User = {
        id: String(mockUsers.users.length + 1),
        fullName,
        email,
        password, // In a real app, hash the password
        createdAt: new Date().toISOString()
      };

      mockUsers.users.push(newUser); // Add new user to mock data
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      return { user: newUser, error: null };
    } catch (error) {
      console.error('SignUp Error:', error);
      return { user: null, error: 'An error occurred during sign up' };
    }
  };

  const signOut = async () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {

  }
  return context;
}
