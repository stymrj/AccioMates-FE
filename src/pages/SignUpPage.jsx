import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, CheckCircle, Mail, User, Phone } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { signUp, clearError } from '../redux/slices/authSlice';
import { otpApi } from '../APIs/otpApi';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import PasswordInput from '../components/auth/PasswordInput';
import OTPInput from '../components/auth/OTPInput';

const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    // role: 'student'
  });
  const [otp, setOtp] = useState('');
  const [localError, setLocalError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setLocalError('');
    dispatch(clearError());
  };

  const handleSendOTP = async () => {
    if (!formData.email) {
      setLocalError('Please enter your email');
      return;
    }

    try {
      await otpApi.sendOTP(formData.email);
      setStep(2);
      setLocalError('');
    } catch (err) {
      setLocalError(err.error || 'Failed to send OTP');
    }
  };

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      setLocalError('Please enter a valid 6-digit OTP');
      return;
    }

    try {
      await otpApi.verifyOTP(formData.email, otp);
      setStep(3);
      setLocalError('');
    } catch (err) {
      setLocalError(err.error || 'Invalid OTP');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const result = await dispatch(signUp(formData));
    
    if (signUp.fulfilled.match(result)) {
      navigate('/signin');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center space-x-2 mb-2">
            <Sparkles className="w-8 h-8 text-indigo-600" />
            <span className="text-3xl font-bold gradient-text">
              AccioMates
            </span>
          </Link>
          <p className="text-gray-600">Create your account</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                step >= s ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                {step > s ? <CheckCircle className="w-6 h-6" /> : s}
              </div>
              {s < 3 && (
                <div className={`flex-1 h-1 mx-2 ${
                  step > s ? 'bg-indigo-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="card">
          {(localError || error) && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {localError || error}
            </div>
          )}

          {/* Step 1: Email Verification */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Email Verification
              </h2>
              <div className="space-y-4">
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  icon={Mail}
                  required
                />
                <Button
                  onClick={handleSendOTP}
                  disabled={loading || !formData.email}
                  className="w-full"
                >
                  {loading ? 'Sending...' : 'Send OTP'}
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: OTP Verification */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Enter OTP</h2>
              <p className="text-gray-600 mb-6">
                We sent a code to {formData.email}
              </p>
              <div className="space-y-4">
                <OTPInput value={otp} onChange={setOtp} />
                <Button
                  onClick={handleVerifyOTP}
                  disabled={loading || otp.length !== 6}
                  className="w-full"
                >
                  {loading ? 'Verifying...' : 'Verify OTP'}
                </Button>
                <button
                  onClick={handleSendOTP}
                  className="w-full text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Resend OTP
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Complete Profile */}
          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Complete Your Profile
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                  />
                  <Input
                    label="Last Name"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                  />
                </div>

                <Input
                  label="Username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="johndoe"
                  icon={User}
                  required
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  icon={Phone}
                  required
                />

                <PasswordInput
                  label="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  showStrength
                  required
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full"
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </Button>
              </div>
            </form>
          )}

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/signin" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;