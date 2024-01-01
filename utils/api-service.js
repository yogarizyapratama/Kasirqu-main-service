import axios from "axios";

const BASE_URL = "https://dev-api-project.vercel.app/api"; // Ganti dengan URL API yang sesuai

// Fungsi untuk melakukan GET request
export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// Fungsi untuk melakukan POST request
export const postData = async (endpoint, data) => {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

// Fungsi untuk melakukan UPDATE (PUT) request
export const updateData = async (endpoint, data) => {
  try {
    const response = await axios.put(`${BASE_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

// Fungsi untuk melakukan DELETE request
export const deleteData = async (endpoint) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error;
  }
};
