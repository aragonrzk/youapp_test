import axios from 'axios';

export const getProfile = async (token) => {
  try {
    const response = await axios.get('/api/profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Get profile error:", error);
    throw error;
  }
};
