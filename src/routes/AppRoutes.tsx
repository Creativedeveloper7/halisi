import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Splash } from '../pages/Splash';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { Welcome } from '../pages/Welcome';
import { SuccessRegistration } from "../pages/SuccessRegistration"; // Include correct extension if necessary

import { useAuth } from '../context/AuthContext';

export function AppRoutes() {
  const location = useLocation();
  const { user } = useAuth();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={user ? <Navigate to="/welcome" /> : <Splash />} />
        <Route path="/signin" element={user ? <Navigate to="/welcome" /> : <SignIn />} />
        <Route path="/signup" element={user ? <Navigate to="/welcome" /> : <SignUp />} />
        <Route path="/welcome" element={user ? <Welcome /> : <Navigate to="/" />} />
        <Route path="/success-registration" element={<SuccessRegistration />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}