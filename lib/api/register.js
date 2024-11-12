import axios from 'axios';

export const register = async (userData) => {
  try {
    const response = await axios.post('/api/register', userData);
    return response.data;
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
};
