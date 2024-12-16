import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Splash } from './pages/Splash';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/signin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
// App.tsx or any other component
