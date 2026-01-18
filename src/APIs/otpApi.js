import axiosInstance from './axios';

export const otpApi = {
  // Send OTP
  sendOTP: async (email) => {
    try {
      const response = await axiosInstance.post('/api/send-otp', { email });
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to send OTP' };
    }
  },

  // Verify OTP
  verifyOTP: async (email, otp) => {
    try {
      const response = await axiosInstance.post('/api/verify-otp', { email, otp });
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to verify OTP' };
    }
  },
};