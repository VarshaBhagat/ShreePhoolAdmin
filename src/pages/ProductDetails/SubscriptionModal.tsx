import { useState } from "react";
import {
  Calendar,
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
}

interface Props {
  product: Product;
  onClose: () => void;
}

const weekDays = [
  "mon",
  "tue",
  "wed",
  "thu",
  "fri",
  "sat",
  "sun",
];

export default function SubscriptionModal({
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
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((d) => d !== day)
      );
    } else {
      setSelectedDays([
        ...selectedDays,
        day,
      ]);
    }
  };

  const subscribe = async () => {
    try {
      setLoading(true);

      let payload: any = {
        product_id: product._id,
        quantity,
        type,
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

      const token =
        localStorage.getItem("token");

      const { data } = await axios.post(
        `http://187.127.165.63:5000/api/subscribe-product`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(data.message);

      onClose();
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
    <div className="fixed inset-0 z-50 bg-black/40 flex items-end justify-center">

      <div className="bg-white w-full max-w-2xl rounded-t-[40px] p-6 animate-slideUp max-h-[95vh] overflow-y-auto">

        {/* Handle */}
        <div className="w-20 h-1.5 bg-gray-300 rounded-full mx-auto mb-5" />

        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold">
              Subscribe
            </h2>

            <p className="text-gray-500">
              Set it once and enjoy{" "}
              <span className="text-purple-600 font-semibold">
                automatic
              </span>{" "}
              deliveries
            </p>
          </div>

          <button onClick={onClose}>
            <X size={30} />
          </button>
        </div>

        {/* Product */}
        <div className="mt-6 bg-purple-50 rounded-3xl p-4 flex gap-4">

          <img
            src={product.image}
            alt={product.name}
            className="w-24 h-24 rounded-xl object-cover"
          />

          <div>
            <h3 className="font-semibold text-2xl">
              {product.name}
            </h3>

            <div className="text-purple-600 text-3xl font-bold mt-2">
              ₹{product.price}
            </div>
          </div>
        </div>

        <p className="text-center text-gray-400 italic mt-3">
          Product prices may vary based on availability
        </p>

        {/* Schedule */}
        <h3 className="font-semibold text-xl mt-8 mb-4">
          Choose Delivery Schedule
        </h3>

        <div className="grid grid-cols-3 gap-3">

          <button
            onClick={() => setType("daily")}
            className={`rounded-3xl p-5 border ${
              type === "daily"
                ? "bg-gradient-to-r from-purple-700 to-purple-500 text-white"
                : "bg-purple-50"
            }`}
          >
            <Calendar className="mx-auto mb-2" />
            Full Month
          </button>

          <button
            onClick={() => setType("weekly")}
            className={`rounded-3xl p-5 border ${
              type === "weekly"
                ? "bg-gradient-to-r from-purple-700 to-purple-500 text-white"
                : "bg-purple-50"
            }`}
          >
            <Calendar className="mx-auto mb-2" />
            Weekly Days
          </button>

          <button
            onClick={() => setType("custom")}
            className={`rounded-3xl p-5 border ${
              type === "custom"
                ? "bg-gradient-to-r from-purple-700 to-purple-500 text-white"
                : "bg-purple-50"
            }`}
          >
            <Calendar className="mx-auto mb-2" />
            Pick Dates
          </button>

        </div>

        {/* Weekly Days */}
        {type === "weekly" && (
          <div className="flex flex-wrap gap-2 mt-5">
            {weekDays.map((day) => (
              <button
                key={day}
                onClick={() =>
                  toggleDay(day)
                }
                className={`px-4 py-2 rounded-xl border ${
                  selectedDays.includes(day)
                    ? "bg-purple-600 text-white"
                    : ""
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        )}

        {/* Custom Dates */}
        {type === "custom" && (
          <div className="mt-5">
            <input
              type="date"
              onChange={(e) => {
                const value =
                  e.target.value;

                if (
                  value &&
                  !selectedDates.includes(
                    value
                  )
                ) {
                  setSelectedDates([
                    ...selectedDates,
                    value,
                  ]);
                }
              }}
              className="border rounded-xl p-3 w-full"
            />

            <div className="flex flex-wrap gap-2 mt-3">
              {selectedDates.map((date) => (
                <span
                  key={date}
                  className="bg-purple-100 px-3 py-1 rounded-full"
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

          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                setQuantity(
                  Math.max(
                    1,
                    quantity - 1
                  )
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
                setQuantity(
                  quantity + 1
                )
              }
              className="w-10 h-10 rounded-full bg-purple-600 text-white"
            >
              +
            </button>

          </div>
        </div>

        <div className="mt-4 bg-purple-100 p-4 rounded-xl flex gap-2 items-center text-purple-700">
          <Info size={18} />
          Every day • 30 deliveries
        </div>

        <button
          onClick={subscribe}
          disabled={loading}
          className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-purple-700 to-purple-500 text-white text-xl font-bold"
        >
          {loading
            ? "Please wait..."
            : "Update Subscription"}
        </button>

        <button className="w-full mt-4 py-4 rounded-2xl border-2 border-red-500 text-red-500 flex items-center justify-center gap-2 font-semibold">
          <Trash2 size={18} />
          Remove Subscription
        </button>

      </div>
    </div>
  );
}