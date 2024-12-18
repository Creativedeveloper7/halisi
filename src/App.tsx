import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
        <Toaster position="top-center" />
      </BrowserRouter>
    </AuthProvider>
  );
}