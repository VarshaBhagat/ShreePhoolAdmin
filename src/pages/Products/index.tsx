import { useEffect, useState, ChangeEvent } from "react";
import API from "../../services/api";
import "./index.scss";
import Modal from "./Modal";
import List from "./List";
import axios from "axios";
import Navbar from "../../components/Navbar";

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
  order_closing_time?: string | number | readonly string[] | undefined;
}

export interface ProductForm {
  name: string;
  quantity: string;
  price: string;
  description: string;
  image: File | null;
  order_closing_time: string | number | readonly string[] | undefined;
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
    order_closing_time: "",
  });

  const [editForm, setEditForm] = useState<ProductForm>({
    name: "",
    quantity: "",
    price: "",
    description: "",
    image: null,
    isSubcibed: false,
    quantitySubcribed: "",
    order_closing_time: "",
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});



  const fetchProducts = async () => {
    try {
      const res = await API.get("/products");
      setProducts(res.data?.data || []);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          setProducts([]); // empty case
        } else {
          console.log("API ERROR ❌", error.response?.data);
        }
      } else {
        console.log("UNKNOWN ERROR ❌", error);
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

    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (key === "image" && value instanceof File) {
        formData.append("image", value);
      } else {
        formData.append(key, String(value));
      }
    });

    await API.post(
      `/add-product`,
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
      order_closing_time: "",
    });

    setPreview(null);
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
        order_closing_time: item.order_closing_time || "",
    });

    setPreview(item.image || null);
    setShowEditModal(true);
  };

  /* ✅ Edit Submit */
  const handleEditSubmit = async () => {
    if (!editId) return;
    if (!validate(editForm)) return;

    const formData = new FormData();

    Object.entries(editForm).forEach(([key, value]) => {
      if (key === "image" && value instanceof File) {
        formData.append("image", value);
      } else {
        formData.append(key, String(value));
      }
    });

    await API.put(
      `/product/${editId}`,
      formData
    );

    setShowEditModal(false);
    fetchProducts();
  };

  /* ✅ Delete */
  const handleDelete = async (id: string) => {
    await API.delete(
      `/product/${id}`
    );
    fetchProducts();
  };

  return (
    <><Navbar />
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
    </>
  );
}