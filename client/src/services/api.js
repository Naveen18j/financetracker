import axios from "axios";

const API_URL = "http://localhost:5000/api/transactions";

// Helper function to get the auth token
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const getTransactions = () =>
  axios.get(API_URL, { headers: getAuthHeaders() });

export const createTransaction = (data) =>
  axios.post(API_URL, data, { headers: getAuthHeaders() });

export const deleteTransaction = (id) =>
  axios.delete(`${API_URL}/${id}`, { headers: getAuthHeaders() });
