export interface AuthFormData {
  email: string;
  password: string;
  fullName?: string;
}

export interface SocialAuthProps {
  onGoogleClick: () => void;
  onFacebookClick: () => void;
}