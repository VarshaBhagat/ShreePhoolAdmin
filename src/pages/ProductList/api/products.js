import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};