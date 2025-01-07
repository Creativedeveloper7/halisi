import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Toaster } from 'react-hot-toast';
export default function App() {
    return (_jsx(AuthProvider, { children: _jsxs(BrowserRouter, { children: [_jsx(AppRoutes, {}), _jsx(Toaster, { position: "top-center" })] }) }));
}
