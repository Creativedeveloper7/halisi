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

export function SignUp() {
  const [formData, setFormData] = useState<AuthFormData>({
    fullName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const { user, error } = await signUp(
        formData.email, 
        formData.password, 
        formData.fullName || ''
      );

      if (error) {
        setError(error);
        return;
      }

      if (user) {
        navigate('/success-registration');
      }
    } catch (err) {
      setError('An unexpected error occurred');
    }
  };

  return (
    <AuthLayout
      image="/images/sign up.png"
      title="Welcome to Halisi"
      subtitle="Your Journey Begins Here!"
    >
      <Logo />
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <AuthInput
          label="Full name"
          type="text"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={e => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
          required
        />
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
          placeholder="Create a password"
          value={formData.password}
          onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
          required
        />
        <Button type="submit">Sign up</Button>
      </form>

      <AuthDivider />

      <SocialAuth
        onGoogleClick={() => console.log('Google sign up')}
        onFacebookClick={() => console.log('Facebook sign up')}
      />

      <AuthFooter 
        text="Already have an account?"
        linkText="Sign in"
        linkTo="/signin"
      />
    </AuthLayout>
  );
}