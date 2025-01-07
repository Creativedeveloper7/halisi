import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AuthLayout } from '../components/auth/AuthLayout';
import { AuthInput } from '../components/auth/AuthInput';
import { SocialAuth } from '../components/auth/SocialAuth';
import { AuthDivider } from '../components/auth/AuthDivider';
import { AuthFooter } from '../components/auth/AuthFooter';
import { Button } from '../components/common/Button';
import { Logo } from '../components/auth/Logo';
export function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);
    const { signIn } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const { user, error } = await signIn(formData.email, formData.password);
            if (error) {
                setError(error);
                return;
            }
            if (user) {
                navigate('/welcome');
            }
        }
        catch (err) {
            setError('An unexpected error occurred');
        }
    };
    return (_jsxs(AuthLayout, { image: "/images/sign up.png", title: "Welcome back!", subtitle: "Sign in to continue your journey", children: [_jsx(Logo, {}), error && _jsx("div", { className: "text-red-500 mb-4", children: error }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsx(AuthInput, { label: "Email address", type: "email", placeholder: "Enter your email", value: formData.email, onChange: e => setFormData(prev => ({ ...prev, email: e.target.value })), required: true }), _jsx(AuthInput, { label: "Password", type: "password", placeholder: "Enter your password", value: formData.password, onChange: e => setFormData(prev => ({ ...prev, password: e.target.value })), required: true }), _jsx(Button, { type: "submit", children: "Sign in" })] }), _jsx(AuthDivider, {}), _jsx(SocialAuth, { onGoogleClick: () => console.log('Google sign in'), onFacebookClick: () => console.log('Facebook sign in') }), _jsx(AuthFooter, { text: "Don't have an account?", linkText: "Sign up", linkTo: "/signup" })] }));
}
