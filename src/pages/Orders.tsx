// src/pages/Orders.tsx
import { useEffect, useState } from "react";
import API from "../services/api";

export default function Orders() {
  const [ordersData, setOrdersData] = useState<any>(null);

  const fetchOrders = async () => {
    try {
      const res = await API.get("/tomorrow-subscribed-orders");
      if (res.data && res.data.success) {
        setOrdersData(res.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch tomorrow's orders", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Tomorrow Orders</h1>

      {ordersData && (
        <div style={styles.summaryCard}>
          <h3>Delivery Date: {ordersData.date}</h3>
          <p><strong>Total Orders:</strong> {ordersData.total_orders}</p>
          <p><strong>Total Amount:</strong> ₹{ordersData.total_amount}</p>
        </div>
      )}

      {ordersData?.orders?.map((order: any, index: number) => (
        <div key={order.order_id || index} style={styles.card}>
          <div style={styles.cardContent}>
            {order.image && (
              <img 
                src={order.image} 
                alt={order.product_name} 
                style={styles.image} 
              />
            )}
            <div>
              <h3>{order.product_name}</h3>
              <p><strong>Order ID:</strong> {order.order_id}</p>
              <p><strong>Phone:</strong> {order.phone_number}</p>
              <p>
                <strong>Price:</strong> ₹{order.price} | <strong>Qty:</strong> {order.quantity} | <strong>Total:</strong> ₹{order.total_price}
              </p>
              <p><strong>Type:</strong> {order.type}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  summaryCard: {
    backgroundColor: "#f9f9f9",
    padding: "15px 20px",
    borderRadius: 8,
    marginBottom: 20,
    border: "1px solid #ddd",
  },
  card: {
    border: "1px solid #ddd",
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  cardContent: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    objectFit: "cover" as const,
    borderRadius: 8,
  },
};