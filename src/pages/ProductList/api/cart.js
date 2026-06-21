// api/cart.js

import axios from "axios";

export const addToCart = async (productId, quantity = 1) => {
 const token = localStorage.getItem("token");

  return axios.post(
    `${process.env.REACT_APP_BASE_URL}add-to-cart`,
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