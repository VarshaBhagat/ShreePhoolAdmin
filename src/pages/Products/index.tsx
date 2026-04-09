import { useEffect, useState, ChangeEvent } from "react";
import API from "../../services/api";
import "./index.scss";
import Modal from "./Modal";
import List from "./List";

/* ✅ Types */
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

interface ProductForm {
  name: string;
  quantity: string;
  price: string;
  description: string;
  image: File | null;
  isSubcibed: boolean;
  quantitySubcribed: string;
}

type FormErrors = Partial<Record<keyof ProductForm, string>>;

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const [form, setForm] = useState<ProductForm>({
    name: "",
    quantity: "",
    price: "",
    description: "",
    image: null,
    isSubcibed: false,
    quantitySubcribed: "",
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  /* ✅ Fetch */
  const fetchProducts = async () => {
    const res = await API.get<{ data: Product[] }>(
      "http://localhost:5001/api/products"
    );
    setProducts(res.data?.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* ✅ Handle Change */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  /* ✅ Image Upload */
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setForm((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  /* ✅ Validation */
  const validate = (): boolean => {
    const err: FormErrors = {};

    if (!form.name.trim()) err.name = "Name is required";
    if (!form.quantity) err.quantity = "Quantity is required";
    if (!form.price) err.price = "Price is required";
    if (!form.description.trim())
      err.description = "Description is required";
    if (!form.image) err.image = "Image is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  /* ✅ Submit */
  const handleSubmit = async () => {
    if (!validate()) return;

    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (key === "image" && value instanceof File) {
        formData.append("image", value);
      } else {
        formData.append(key, String(value));
      }
    });

    try {
      await API.post(
        "http://localhost:5001/api/add-product",
        formData
      );

      setShowModal(false);
      fetchProducts();

      setForm({
        name: "",
        quantity: "",
        price: "",
        description: "",
        image: null,
        isSubcibed: false,
        quantitySubcribed: "",
      });

      setPreview(null);
      setErrors({});
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  /* ✅ Delete */
  const handleDelete = async (id: string) => {
    try {
      await API.delete(
        `http://localhost:5001/api/product/${id}`
      );
      fetchProducts();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  /* ✅ Update (basic for now) */
  const handleUpdate = (item: Product) => {
    console.log("Update:", item);
    setShowModal(true);
  };

  return (
    <div className="page">
      <h1>Products</h1>

      {/* ✅ PRODUCT LIST */}
    <List
      products={products}
      handleUpdate={handleUpdate}
      handleDelete={handleDelete}
    />

      {/* Add Button */}
      <button
        className="btn primary"
        onClick={() => setShowModal(true)}
      >
        ➕ Add Product
      </button>

      {/* Modal */}
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          form={form}
          setForm={setForm}
          handleChange={handleChange}
          handleImageChange={handleImageChange}
          handleSubmit={handleSubmit}
          errors={errors}
          preview={preview}
        />
      )}
    </div>
  );
}