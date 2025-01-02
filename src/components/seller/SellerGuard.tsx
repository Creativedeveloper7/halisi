import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSeller } from '../../hooks/UseSeller';

interface SellerGuardProps {
  children: ReactNode;
}

export function SellerGuard({ children }: SellerGuardProps) {
  const { loading, isSeller } = useSeller();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isSeller) {
    return <Navigate to="/seller/onboarding" />;
  }

  return <>{children}</>;
}