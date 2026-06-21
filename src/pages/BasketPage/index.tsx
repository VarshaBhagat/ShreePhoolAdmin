import { useEffect, useMemo, useState } from "react";
import {
  Calendar,
  Clock3,
  Wallet,
  Trash2,
} from "lucide-react";

import axios from "axios";
import UserNavbar from "../../components/UserNavbar";

interface BasketItem {
  id: string;
  product_id: string;
  date: string;
  product_name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function BasketPage() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"tomorrow" | "month">(
    "tomorrow"
  );

  const [basket, setBasket] = useState({
    tomorrowOrders: [] as BasketItem[],
    restOrders: [] as BasketItem[],
    totalDeliveries: 0,
    totalPrice: 0,
  });

  const fetchBasket = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}basket`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBasket(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBasket();
  }, []);

  const currentOrders =
    activeTab === "tomorrow"
      ? basket.tomorrowOrders
      : basket.restOrders;

  const total = useMemo(() => {
    return currentOrders.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [currentOrders]);

  const updateQuantity = async (
    id: string,
    quantity: number
  ) => {
    try {
      await axios.put(`${process.env.REACT_APP_BASE_URL}basket/update-quantity/${id}`, {
        quantity,
      });

      fetchBasket();
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = async (id: string) => {
    try {
      await axios.delete(`${process.env.REACT_APP_BASE_URL}basket/${id}`);

      fetchBasket();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        Loading...
      </div>
    );
  }

  return (
    <>
     <UserNavbar />
    <div className="bg-slate-50 pt-28 min-h-screen">
      <div className="max-w-6xl mx-auto p-4 bg-white rounded-3xl shadow-sm text-center">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Calendar className="text-violet-600" />
            <h1 className="text-2xl font-bold">
              My Basket
            </h1>
          </div>

          <button className="bg-violet-600 text-white rounded-full px-4 py-2 flex items-center gap-2">
            <Wallet size={16} />
            ₹0
          </button>
        </div>

        {/* Tabs */}

        <div className="flex gap-8 border-b mb-5">
          <button
            onClick={() => setActiveTab("tomorrow")}
            className={`pb-3 font-medium ${
              activeTab === "tomorrow"
                ? "border-b-2 border-violet-600 text-violet-600"
                : "text-gray-500"
            }`}
          >
            Tomorrow's Order
          </button>

          <button
            onClick={() => setActiveTab("month")}
            className={`pb-3 font-medium ${
              activeTab === "month"
                ? "border-b-2 border-violet-600 text-violet-600"
                : "text-gray-500"
            }`}
          >
            Rest of the Month
          </button>
        </div>

        {/* Notice */}

        <div className="bg-violet-100 rounded-xl p-3 mb-5 flex items-center gap-2 text-sm">
          <Clock3 size={16} />
          <span>
            We deliver only
            <span className="font-semibold">
              {" "}
              early morning
            </span>
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Orders */}

          <div className="lg:col-span-2 space-y-4">

            {currentOrders.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border-2 border-violet-500 p-4 shadow-sm"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.product_name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />

                  <div className="flex-1">

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-semibold text-lg">
                        {item.product_name}
                      </h3>

                      <span className="bg-violet-500 text-white text-xs px-3 py-1 rounded-full">
                        Subscribed
                      </span>
                    </div>

                    <p className="text-violet-600 text-sm mt-2">
                      Delivery: {item.date}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">

                      <span className="text-violet-600 text-xl font-bold">
                        ₹{item.price}
                      </span>

                      <div className="flex items-center gap-3">

                        <div className="bg-violet-500 rounded-xl flex items-center text-white overflow-hidden">
                          <button
                            className="px-4 py-2"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                Math.max(
                                  1,
                                  item.quantity - 1
                                )
                              )
                            }
                          >
                            -
                          </button>

                          <span className="px-4">
                            {item.quantity}
                          </span>

                          <button
                            className="px-4 py-2"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.quantity + 1
                              )
                            }
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() =>
                            removeItem(item.id)
                          }
                          className="text-red-500"
                        >
                          <Trash2 size={18} />
                        </button>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Summary */}

          <div>
            <div className="bg-white rounded-2xl p-5 shadow-sm sticky top-5">
              <h3 className="font-semibold text-lg mb-4">
                Order Summary
              </h3>

              <div className="flex justify-between mb-3">
                <span>Deliveries</span>
                <span>
                  {basket.totalDeliveries}
                </span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Sub Total</span>
                <span>₹{total}</span>
              </div>

              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
    </>
  );
}