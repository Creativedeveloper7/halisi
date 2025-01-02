export const AUTH_ERRORS = {
    INVALID_CREDENTIALS: 'Invalid email or password',
    EMAIL_IN_USE: 'Email already in use',
    WEAK_PASSWORD: 'Password must be at least 6 characters',
    INVALID_EMAIL: 'Invalid email address',
    NETWORK_ERROR: 'Network error occurred. Please try again',
  } as const;
  
  export const ROUTES = {
    HOME: '/',
    SIGN_IN: '/signin',
    SIGN_UP: '/signup',
    WELCOME: '/welcome',
    PROFILE: '/profile',
    BOOKINGS: '/bookings',
    CATEGORY: '/category',
  } as const;
  
  export const API_ENDPOINTS = {
    AUTH: {
      SIGN_IN: '/auth/signin',
      SIGN_UP: '/auth/signup',
      SIGN_OUT: '/auth/signout',
    },
  } as const;