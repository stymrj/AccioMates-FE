export const APP_NAME = 'AccioMates';

export const ROLES = {
  STUDENT: 'student',
  MENTOR: 'mentor',
  ADMIN: 'admin',
};

export const ROUTES = {
  HOME: '/',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  DASHBOARD: '/dashboard',
};

export const API_ENDPOINTS = {
  SIGNUP: '/api/signup',
  SIGNIN: '/api/signin',
  SIGNOUT: '/api/signout',
  SEND_OTP: '/api/send-otp',
  VERIFY_OTP: '/api/verify-otp',
  USER: '/api/user',
  UPDATE_PROFILE: '/api/user/update',
};

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  INVALID_CREDENTIALS: 'Invalid username or password.',
  EMAIL_EXISTS: 'Email already registered.',
  REQUIRED_FIELD: 'This field is required.',
};