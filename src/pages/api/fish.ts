import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const getAllFish = async () => {
  const response = await axios.get(`${API_URL}/fish`);
  return response.data;
};

// export const getFishById = async (id: number) => {
//   const response = await axios.get(`${API_URL}/fish/${id}`);
//   return response.data;
// };
export const getFishById = async (id: string) => {
  try {
    console.log(`Fetching fish with ID: ${id}`);
    const response = await axios.get(`${API_URL}/fish/${id}`);
    console.log('Fish data received:', response.data);
    return response.data;
  } catch (error: any) {
    console.error(`Error fetching fish with ID ${id}:`, error.response?.data || error.message);
    throw error;
  }
};



