import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SocialAuthProps } from '../../types/auth';

export function SocialAuth({ onGoogleClick, onFacebookClick }: SocialAuthProps) {
  return (
    <div className="flex gap-4 justify-center">
      <button
        onClick={onGoogleClick}
        className="p-2 rounded-none border-none-300 hover:bg-gray-50"
      >
        <FcGoogle className="w-6 h-6" />
      </button>
      <button
        onClick={onFacebookClick}
        className="p-2 rounded-none border-none-300 hover:bg-gray-50"
      >
        <FaFacebook className="w-6 h-6 text-blue-600" />
      </button>
    </div>
  );
}