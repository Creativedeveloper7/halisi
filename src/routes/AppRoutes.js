import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: user ? _jsx(Navigate, { to: "/home" }) : _jsx(Splash, {}) }), _jsx(Route, { path: "/signin", element: user ? _jsx(Navigate, { to: "/home" }) : _jsx(SignIn, {}) }), _jsx(Route, { path: "/signup", element: user ? _jsx(Navigate, { to: "/home" }) : _jsx(SignUp, {}) }), _jsx(Route, { path: "/welcome", element: user ? _jsx(Welcome, {}) : _jsx(Navigate, { to: "/" }) }), _jsx(Route, { path: "/success-registration", element: _jsx(SuccessRegistration, {}) }), _jsx(Route, { path: "/home", element: user ? _jsx(HomePage, {}) : _jsx(Navigate, { to: "/" }) }), _jsx(Route, { path: "/bookings", element: user ? _jsx(BookingsPage, {}) : _jsx(Navigate, { to: "/" }) }), _jsx(Route, { path: "/profile", element: user ? _jsx(ProfilePage, {}) : _jsx(Navigate, { to: "/" }) }), _jsx(Route, { path: "/category/:category", element: user ? _jsx(CategoryPage, {}) : _jsx(Navigate, { to: "/" }) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/", replace: true }) })] }));
}
