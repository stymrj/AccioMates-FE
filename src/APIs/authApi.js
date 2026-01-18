import axiosInstance from './axios';

export const authApi = {
  // Sign Up
  signUp: async (userData) => {
    try {
      const response = await axiosInstance.post('/api/signup', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Sign up failed' };
    }
  },

  // Sign In
  signIn: async (credentials) => {
    try {
      const response = await axiosInstance.post('/api/signin', credentials);
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Sign in failed' };
    }
  },

  // Sign Out
  signOut: async () => {
    try {
      const response = await axiosInstance.post('/api/signout');
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Sign out failed' };
    }
  },

  // Get User Data
  getUserData: async () => {
    try {
      const response = await axiosInstance.get('/api/user');
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to fetch user data' };
    }
  },

  // Update Profile
  updateProfile: async (profileData) => {
    try {
      const response = await axiosInstance.put('/api/user/update', profileData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Failed to update profile' };
    }
  },
};