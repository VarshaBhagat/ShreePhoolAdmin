// src/components/ProductCard.tsx

type Props = {
  name: string;
  price: number;
  onDelete: () => void;
  onUpdate: () => void;
};

export default function ProductCard({
  name,
  price,
  onDelete,
  onUpdate,
}: Props) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 10 }}>
      <h3>{name}</h3>
      <p>₹{price}</p>

      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}