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
export function SignUp() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);
    const { signUp } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const { user, error } = await signUp(formData.email, formData.password, formData.fullName || '');
            if (error) {
                setError(error);
                return;
            }
            if (user) {
                navigate('/success-registration');
            }
        }
        catch (err) {
            setError('An unexpected error occurred');
        }
    };
    return (_jsxs(AuthLayout, { image: "/images/sign up.png", title: "Welcome to Halisi", subtitle: "Your Journey Begins Here!", children: [_jsx(Logo, {}), error && _jsx("div", { className: "text-red-500 mb-4", children: error }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsx(AuthInput, { label: "Full name", type: "text", placeholder: "Enter your full name", value: formData.fullName, onChange: e => setFormData(prev => ({ ...prev, fullName: e.target.value })), required: true }), _jsx(AuthInput, { label: "Email address", type: "email", placeholder: "Enter your email", value: formData.email, onChange: e => setFormData(prev => ({ ...prev, email: e.target.value })), required: true }), _jsx(AuthInput, { label: "Password", type: "password", placeholder: "Create a password", value: formData.password, onChange: e => setFormData(prev => ({ ...prev, password: e.target.value })), required: true }), _jsx(Button, { type: "submit", children: "Sign up" })] }), _jsx(AuthDivider, {}), _jsx(SocialAuth, { onGoogleClick: () => console.log('Google sign up'), onFacebookClick: () => console.log('Facebook sign up') }), _jsx(AuthFooter, { text: "Already have an account?", linkText: "Sign in", linkTo: "/signin" })] }));
}
