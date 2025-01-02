import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { AuthContextType, User, AuthResponse } from '../types/auth';
import { signInSchema, signUpSchema } from '../utils/validation';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUser({
          id: session.user.id, // This will be a UUID
          email: session.user.email!,
          fullName: session.user.user_metadata.full_name || '',
          createdAt: session.user.created_at,
        });
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email!,
          fullName: session.user.user_metadata.full_name || '',
          createdAt: session.user.created_at,
        });
      } else {
        setUser(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const validationResult = signInSchema.safeParse({ email, password });
      if (!validationResult.success) {
        return { 
          user: null, 
          error: validationResult.error.errors[0].message 
        };
      }

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { user: null, error: error.message };
      }

      const user: User = {
        id: data.user.id,
        email: data.user.email!,
        fullName: data.user.user_metadata.full_name || '',
        createdAt: data.user.created_at,
      };

      return { user, error: null };
    } catch (error) {
      return { user: null, error: 'An error occurred during sign in' };
    }
  };

  const signUp = async (email: string, password: string, fullName: string): Promise<AuthResponse> => {
    try {
      const validationResult = signUpSchema.safeParse({ email, password, fullName });
      if (!validationResult.success) {
        return { 
          user: null, 
          error: validationResult.error.errors[0].message 
        };
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) {
        return { user: null, error: error.message };
      }

      const user: User = {
        id: data.user!.id,
        email: data.user!.email!,
        fullName,
        createdAt: data.user!.created_at,
      };

      return { user, error: null };
    } catch (error) {
      return { user: null, error: 'An error occurred during sign up' };
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
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
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}