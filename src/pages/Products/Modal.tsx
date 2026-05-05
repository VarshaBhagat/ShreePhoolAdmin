import React from "react";

/* ✅ Form Type */
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

/* ✅ Props Type */
interface ModalProps {
  title: string; // ✅ ONLY HERE
  submitLabel?: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  form: ProductForm;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => Promise<void> | void;
  errors: FormErrors;
  preview: string | null;
}

/* ✅ Component */
const Modal: React.FC<ModalProps> = ({
  setShowModal,
  form,
  handleChange,
  handleImageChange,
  handleSubmit,
  errors,
  preview,
}) => {
  
  return (
    <div className="modal" onClick={() => setShowModal(false)}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <h2>Add Product</h2>
          <span
            className="close-btn"
            onClick={() => setShowModal(false)}
          >
            ✕
          </span>
        </div>

        {/* GRID FORM */}
        <div className="form-grid">
          <div>
            <input
              name="name"
              placeholder="Name *"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div>
            <input
              name="quantity"
              type="number"
              placeholder="Quantity *"
              value={form.quantity}
              onChange={handleChange}
            />
            {errors.quantity && (
              <p className="error">{errors.quantity}</p>
            )}
          </div>

          <div>
            <input
              name="price"
              placeholder="Price *"
              value={form.price}
              onChange={handleChange}
            />
            {errors.price && <p className="error">{errors.price}</p>}
          </div>

          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {errors.image && <p className="error">{errors.image}</p>}
          </div>

          <div className="full">
            <textarea
              name="description"
              placeholder="Description *"
              value={form.description}
              onChange={handleChange}
            />
            {errors.description && (
              <p className="error">{errors.description}</p>
            )}
          </div>

          {preview && (
            <div className="full">
              <img src={preview} className="preview" alt="Preview" />
            </div>
          )}

          <div className="checkbox-row">
            <label>Subscribed</label>
            <input
              type="checkbox"
              name="isSubcibed"
              checked={form.isSubcibed}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              name="quantitySubcribed"
              type="number"
              placeholder="Subscribed Qty"
              value={form.quantitySubcribed}
              onChange={handleChange}
              disabled={!form.isSubcibed}
              className={!form.isSubcibed ? "disabled" : ""}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="btn-group">
          <button className="btn primary" onClick={handleSubmit}>
            Submit
          </button>

          <button
            className="btn secondary"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;