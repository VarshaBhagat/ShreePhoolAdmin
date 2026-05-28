// src/components/Navbar.tsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={styles.nav}>
      <h2>🌸 ShreePhool Admin</h2>

      <div>
        <Link to="/adminProduct" style={styles.link}>Products</Link>
        <Link to="/adminOrders" style={{ ...styles.link, marginLeft: 20 }}>
          Orders
        </Link>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#6c5ce7",
    color: "white",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};