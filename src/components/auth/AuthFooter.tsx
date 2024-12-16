import { Link } from 'react-router-dom';

interface AuthFooterProps {
  text: string;
  linkText: string;
  linkTo: string;
}

export function AuthFooter({ text, linkText, linkTo }: AuthFooterProps) {
  return (
    <p className="mt-8 text-center text-sm text-gray-600">
      {text}{' '}
      <Link to={linkTo} className="text-orange-500 hover:text-orange-600 font-medium">
        {linkText}
      </Link>
    </p>
  );
}