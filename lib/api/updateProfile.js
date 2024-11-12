import axios from 'axios';

export const updateProfile = async (token, profileData) => {
  try {
    const response = await axios.put('/api/profile', profileData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Update profile error:", error);
    throw error;
  }
};
