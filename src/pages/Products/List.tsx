import React from "react";

/* ✅ Product Type */
interface Product {
  _id: string;
  name: string;
  quantity: number;
  price: string;
  description: string;
  image?: string;
  isSubcibed: boolean;
  quantitySubcribed?: number;
}

/* ✅ Props Type */
interface ListProps {
  products: Product[];
  handleUpdate: (item: Product) => void;
  handleDelete: (id: string) => void;
}

/* ✅ Component */
const List: React.FC<ListProps> = ({
  products,
  handleUpdate,
  handleDelete,
}) => {
  return (
    <div className="product-list">
      {products.map((item) => (
        <div key={item._id} className="product-card">
          {/* Image */}
          <img
            src={item.image ? item.image : "/placeholder.png"}
            alt={item.name}
            className="product-img"
          />

          {/* Info */}
          <div className="product-info">
            <h3>{item.name}</h3>
            <p className="price">₹ {item.price}</p>
            <p className="desc">{item.description}</p>

            <p className="sub">
              {item.isSubcibed
                ? "✅ Subscribed"
                : "❌ Not Subscribed"}
            </p>

            {item.isSubcibed && (
              <p className="sub-qty">
                Qty: {item.quantitySubcribed}
              </p>
            )}
          </div>

          {/* Actions */}
          <div className="product-actions">
            <button
              className="btn edit"
              onClick={() => handleUpdate(item)}
            >
              ✏️ Update
            </button>

            <button
              className="btn delete"
              onClick={() => handleDelete(item._id)}
            >
              🗑 Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
