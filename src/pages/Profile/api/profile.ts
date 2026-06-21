import axios from "axios";

export const getProfile = async () => {
  const token = localStorage.getItem("token");

  return axios.get(`${process.env.REACT_APP_BASE_URL}profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
