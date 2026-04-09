// src/components/Navbar.tsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={styles.nav}>
      <h2>🌸 ShreePhool Admin</h2>

      <div>
        <Link to="/">Products</Link>
        <Link to="/orders" style={{ marginLeft: 20 }}>
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
    background: "#6a0dad",
    color: "white",
  },
};