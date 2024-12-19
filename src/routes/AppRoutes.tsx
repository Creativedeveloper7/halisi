import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { CategoryPage } from '../pages/CategoryPage';
import { BookingsPage } from '../pages/BookingsPage';
import { ProfilePage } from '../pages/ProfilePage';
import { Splash } from '../pages/Splash';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Welcome } from '../pages/Welcome';
import { SuccessRegistration } from '../pages/SuccessRegistration';
import { useAuth } from '../context/AuthContext';

export function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/home" /> : <Splash />} />
      <Route path="/signin" element={user ? <Navigate to="/home" /> : <SignIn />} />
      <Route path="/signup" element={user ? <Navigate to="/home" /> : <SignUp />} />
      <Route path="/welcome" element={user ? <Welcome /> : <Navigate to="/" />} />
      <Route path="/success-registration" element={<SuccessRegistration />} />
      <Route path="/home" element={user ? <HomePage /> : <Navigate to="/" />} />
      <Route path="/bookings" element={user ? <BookingsPage /> : <Navigate to="/" />} />
      <Route path="/profile" element={user ? <ProfilePage /> : <Navigate to="/" />} />
      <Route path="/category/:category" element={user ? <CategoryPage /> : <Navigate to="/" />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}