import axios from "axios";

const API_URL = 'http://187.127.165.63:5000/api';

export const getProfile = async () => {
  const token = localStorage.getItem("token");

  return axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
