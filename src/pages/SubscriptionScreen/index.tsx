import { useState } from "react";
import {
  Calendar,
  CheckCircle,
  Info,
  Trash2,
  X,
} from "lucide-react";
import axios from "axios";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
}

interface Props {
  product: Product;
  onClose?: () => void;
}


const weekDays = [
  { label: "Mon", value: "mon" },
  { label: "Tue", value: "tue" },
  { label: "Wed", value: "wed" },
  { label: "Thu", value: "thu" },
  { label: "Fri", value: "fri" },
  { label: "Sat", value: "sat" },
  { label: "Sun", value: "sun" },
];

export default function SubscriptionScreen({
  product,
  onClose,
}: Props) {
  const [type, setType] = useState<
    "daily" | "weekly" | "custom"
  >("daily");

  const [quantity, setQuantity] = useState(1);

  const [selectedDays, setSelectedDays] =
    useState<string[]>([]);

  const [selectedDates, setSelectedDates] =
    useState<string[]>([]);

  const [loading, setLoading] = useState(false);

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  };

  const addCustomDate = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    if (!value) return;

    if (!selectedDates.includes(value)) {
      setSelectedDates([...selectedDates, value]);
    }

    e.target.value = "";
  };

  const handleSubscribe = async () => {
    try {
      setLoading(true);

      const token =
        localStorage.getItem("token");

      let payload: any = {
        product_id: product._id,
        type,
        quantity,
      };

      if (type === "daily") {
        payload.start_date =
          new Date().toISOString().split("T")[0];
      }

      if (type === "weekly") {
        payload.week_days = selectedDays;
        payload.start_date =
          new Date().toISOString().split("T")[0];
      }

      if (type === "custom") {
        payload.dates = selectedDates;
      }

      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}subscribe-product`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(data.message);
    } catch (error: any) {
      alert(
        error?.response?.data?.message ||
          "Subscription failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-end md:items-center justify-center">
      <div className="bg-white w-full md:max-w-2xl rounded-t-3xl md:rounded-3xl p-6">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Subscribe
            </h2>

            <p className="text-gray-500 mt-1">
              Set it once and enjoy{" "}
              <span className="text-purple-600 font-semibold">
                automatic
              </span>{" "}
              deliveries
            </p>
          </div>

          <button onClick={onClose}>
            <X size={28} />
          </button>
        </div>

        {/* Product Card */}
        <div className="mt-6 bg-purple-50 rounded-2xl p-4 flex gap-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 rounded-xl object-cover"
          />

          <div>
            <h3 className="font-bold text-xl">
              {product.name}
            </h3>

            <div className="mt-2 flex items-center gap-3">
              <span className="text-3xl font-bold text-purple-600">
                ₹{product.price}
              </span>

              {product.originalPrice && (
                <span className="line-through text-gray-400">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Schedule */}
        <h3 className="font-semibold text-xl mt-8 mb-4">
          Choose Delivery Schedule
        </h3>

        <div className="grid grid-cols-3 gap-3">

          <button
            onClick={() => setType("daily")}
            className={`rounded-2xl p-4 border transition ${
              type === "daily"
                ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white border-purple-600"
                : "bg-purple-50"
            }`}
          >
            <Calendar className="mx-auto mb-2" />
            <div className="font-semibold">
              Full Month
            </div>
            <div className="text-xs mt-1">
              Every day
            </div>
          </button>

          <button
            onClick={() => setType("weekly")}
            className={`rounded-2xl p-4 border transition ${
              type === "weekly"
                ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white border-purple-600"
                : "bg-purple-50"
            }`}
          >
            <Calendar className="mx-auto mb-2" />
            <div className="font-semibold">
              Weekly Days
            </div>
            <div className="text-xs mt-1">
              Choose weekdays
            </div>
          </button>

          <button
            onClick={() => setType("custom")}
            className={`rounded-2xl p-4 border transition ${
              type === "custom"
                ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white border-purple-600"
                : "bg-purple-50"
            }`}
          >
            <Calendar className="mx-auto mb-2" />
            <div className="font-semibold">
              Pick Dates
            </div>
            <div className="text-xs mt-1">
              Custom dates
            </div>
          </button>
        </div>

        {/* Weekly Days */}
        {type === "weekly" && (
          <div className="mt-5">
            <div className="flex flex-wrap gap-2">
              {weekDays.map((day) => (
                <button
                  key={day.value}
                  onClick={() =>
                    toggleDay(day.value)
                  }
                  className={`px-4 py-2 rounded-xl border ${
                    selectedDays.includes(day.value)
                      ? "bg-purple-600 text-white"
                      : ""
                  }`}
                >
                  {day.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Custom Dates */}
        {type === "custom" && (
          <div className="mt-5">
            <input
              type="date"
              onChange={addCustomDate}
              className="border rounded-xl px-4 py-3 w-full"
            />

            <div className="flex flex-wrap gap-2 mt-3">
              {selectedDates.map((date) => (
                <span
                  key={date}
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full"
                >
                  {date}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Quantity */}
        <div className="mt-6 bg-purple-50 rounded-2xl p-4 flex justify-between items-center">
          <span className="font-medium">
            Quantity (per delivery)
          </span>

          <div className="flex items-center gap-5">
            <button
              onClick={() =>
                setQuantity((q) =>
                  Math.max(1, q - 1)
                )
              }
              className="w-10 h-10 rounded-full bg-purple-200"
            >
              -
            </button>

            <span className="text-xl font-bold">
              {quantity}
            </span>

            <button
              onClick={() =>
                setQuantity((q) => q + 1)
              }
              className="w-10 h-10 rounded-full bg-purple-600 text-white"
            >
              +
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="mt-4 bg-purple-100 rounded-xl p-3 flex gap-2 items-center text-purple-700">
          <Info size={18} />
          <span>
            {type === "daily"
              ? "Every day • 30 deliveries"
              : type === "weekly"
              ? `${selectedDays.length} selected weekdays`
              : `${selectedDates.length} selected dates`}
          </span>
        </div>

        {/* Subscribe Button */}
        <button
          onClick={handleSubscribe}
          disabled={loading}
          className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-purple-700 to-purple-500 text-white text-lg font-bold"
        >
          {loading
            ? "Processing..."
            : "Update Subscription"}
        </button>

        {/* Remove */}
        <button className="w-full mt-4 py-4 rounded-2xl border-2 border-red-500 text-red-500 font-semibold flex justify-center items-center gap-2">
          <Trash2 size={18} />
          Remove Subscription
        </button>

      </div>
    </div>
  );
}