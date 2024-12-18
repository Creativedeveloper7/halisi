import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AuthLayout } from '../components/auth/AuthLayout';
import { AuthInput } from '../components/auth/AuthInput';
import { SocialAuth } from '../components/auth/SocialAuth';
import { AuthDivider } from '../components/auth/AuthDivider';
import { AuthFooter } from '../components/auth/AuthFooter';
import { Button } from '../components/common/Button';
import { Logo } from '../components/auth/Logo';
import type { AuthFormData } from '../types/auth';

export function SignIn() {
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const { user, error } = await signIn(formData.email, formData.password);

      if (error) {
        setError(error);
        return;
      }

      if (user) {
        navigate('/welcome');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    }
  };

  return (
    <AuthLayout
      image="/images/sign up.png"
      title="Welcome back!"
      subtitle="Sign in to continue your journey"
    >
      <Logo />
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthInput
          label="Email address"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
        />
        <AuthInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
          required
        />
        <Button type="submit">Sign in</Button>
      </form>

      <AuthDivider />

      <SocialAuth
        onGoogleClick={() => console.log('Google sign in')}
        onFacebookClick={() => console.log('Facebook sign in')}
      />

      <AuthFooter
        text="Don't have an account?"
        linkText="Sign up"
        linkTo="/signup"
      />
    </AuthLayout>
  );
}