import { supabase } from '../supabase';
import { AuthResponse, User } from '@/types/auth';
import { signInSchema, signUpSchema } from '@/utils/validation';

export async function signIn(email: string, password: string): Promise<AuthResponse> {
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
}

export async function signUp(
  email: string, 
  password: string, 
  fullName: string
): Promise<AuthResponse> {
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
}

export async function signOut(): Promise<void> {
  await supabase.auth.signOut();
}