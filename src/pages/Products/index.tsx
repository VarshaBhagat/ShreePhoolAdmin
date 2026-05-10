import { useEffect, useState, ChangeEvent } from "react";
import API from "../../services/api";
import "./index.scss";
import Modal from "./Modal";
import List from "./List";
import axios from "axios";

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

export interface ProductForm {
  name: string;
  quantity: string;
  price: string;
  description: string;
  image: File | null;
  isSubcibed: boolean;
  quantitySubcribed: string;
}

export type FormErrors = Partial<Record<keyof ProductForm, string>>;

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  /* ✅ Add Modal */
  const [showModal, setShowModal] = useState(false);

  /* ✅ Edit Modal */
  const [showEditModal, setShowEditModal] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);

  const [form, setForm] = useState<ProductForm>({
    name: "",
    quantity: "",
    price: "",
    description: "",
    image: null,
    isSubcibed: false,
    quantitySubcribed: "",
  });

  const [editForm, setEditForm] = useState<ProductForm>({
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



const fetchProducts = async () => {
  try {
    const res = await API.get("/products");
    setProducts(res.data?.data || []);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const errorMsg = error.response?.data?.message || error.message;
      
      if (status === 404) {
        setProducts([]); // empty case
      } else if (status === 500) {
        console.error("Server Error (500):", error.response?.data);
        alert("Server error occurred. Please try again later.");
      } else {
        console.error(`API Error (${status}):`, errorMsg);
        alert(`Error: ${errorMsg}`);
      }
    } else {
      console.error("Unknown Error:", error);
      alert("An unexpected error occurred");
    }
  }
};
useEffect(() => {
  fetchProducts();
}, []);
  /* ✅ Common Change */
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    isEdit = false
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    const update = (prev: ProductForm) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    });

    isEdit
      ? setEditForm(update)
      : setForm(update);
  };

  /* ✅ Image */
  const handleImageChange = (
    e: ChangeEvent<HTMLInputElement>,
    isEdit = false
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      if (isEdit) {
        setEditForm((prev) => ({ ...prev, image: file }));
      } else {
        setForm((prev) => ({ ...prev, image: file }));
      }

      setPreview(URL.createObjectURL(file));
    }
  };

  /* ✅ Validation */
  const validate = (data: ProductForm): boolean => {
    const err: FormErrors = {};

    if (!data.name.trim()) err.name = "Name required";
    if (!data.quantity) err.quantity = "Quantity required";
    if (!data.price) err.price = "Price required";
    if (!data.description.trim()) err.description = "Description required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  /* ✅ Add Submit */
  const handleSubmit = async () => {
    if (!validate(form)) return;

    try {
      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        if (key === "image" && value instanceof File) {
          formData.append("image", value);
        } else {
          formData.append(key, String(value));
        }
      });

      await API.post(`/add-product`, formData);

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
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || "Failed to add product";
      console.error("Error adding product:", error.response?.data);
      alert(errorMsg);
    }
  };

  /* ✅ Edit Click */
  const handleUpdate = (item: Product) => {
    setEditId(item._id);

    setEditForm({
      name: item.name,
      quantity: String(item.quantity),
      price: item.price,
      description: item.description,
      image: null,
      isSubcibed: item.isSubcibed,
      quantitySubcribed: item.quantitySubcribed
        ? String(item.quantitySubcribed)
        : "",
    });

    setPreview(item.image || null);
    setShowEditModal(true);
  };

  /* ✅ Edit Submit */
  const handleEditSubmit = async () => {
    if (!editId) return;
    if (!validate(editForm)) return;

    try {
      const formData = new FormData();

      Object.entries(editForm).forEach(([key, value]) => {
        if (key === "image" && value instanceof File) {
          formData.append("image", value);
        } else {
          formData.append(key, String(value));
        }
      });

      await API.put(`/product/${editId}`, formData);

      setShowEditModal(false);
      fetchProducts();
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || "Failed to update product";
      console.error("Error updating product:", error.response?.data);
      alert(errorMsg);
    }
  };

  /* ✅ Delete */
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    
    try {
      await API.delete(`/product/${id}`);
      fetchProducts();
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || "Failed to delete product";
      console.error("Error deleting product:", error.response?.data);
      alert(errorMsg);
    }
  };

  return (
    <div className="page">
      <h1>Products</h1>

      <List
        products={products}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />

      <button
        className="btn primary add-product"
        onClick={() => setShowModal(true)}
      >
       Add Product
      </button>

      {/* ✅ ADD MODAL */}
      {showModal && (
        <Modal
          title="Add Product"
          setShowModal={setShowModal}
          form={form}
          handleChange={(e) => handleChange(e, false)}
          handleImageChange={(e) => handleImageChange(e, false)}
          handleSubmit={handleSubmit}
          errors={errors}
          preview={preview}
        />
      )}

      {/* ✅ EDIT MODAL */}
      {showEditModal && (
        <Modal
          title="Edit Product"
          setShowModal={setShowEditModal}
          form={editForm}
          handleChange={(e) => handleChange(e, true)}
          handleImageChange={(e) => handleImageChange(e, true)}
          handleSubmit={handleEditSubmit}
          errors={errors}
          preview={preview}
        />
      )}
    </div>
  );
}