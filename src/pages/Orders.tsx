// src/pages/Orders.tsx
import { useEffect, useState } from "react";
import API from "../services/api";

export default function Orders() {
  const [orders, setOrders] = useState<any[]>([]);

  const fetchOrders = async () => {
    // const res = await API.get("/basket");
    // console.log(res.data);
    setOrders([]);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Tomorrow Orders</h1>

      {orders.map((order) => (
        <div key={order._id} style={styles.card}>
          <h3>User: {order.userName}</h3>

          {order.items.map((item: any) => (
            <p key={item.productId}>
              {item.name} - Qty: {item.quantity}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
  },
};