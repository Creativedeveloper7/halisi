import { useState } from 'react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up:', formData);
  };

  return (
    <AuthLayout
      image="/images/auth-image.jpg"
      title="Welcome to Halisi"
      subtitle="Your Journey Begins Here!"
    >
      <Logo />
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