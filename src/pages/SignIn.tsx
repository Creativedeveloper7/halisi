import { useState } from 'react';
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in:', formData);
  };

  return (
    <AuthLayout
      image="/images/sign up.png"
      title="Welcome back!"
      subtitle="Sign in to continue your journey"
    >
   
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
