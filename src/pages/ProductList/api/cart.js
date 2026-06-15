// api/cart.js

import axios from "axios";
const API_URL = "http://187.127.165.63:5000/api";

export const addToCart = async (productId, quantity = 1) => {
 const token = localStorage.getItem("token");

  return axios.post(
    `${API_URL}/add-to-cart`,
    {
      product_id: productId,
      quantity,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};