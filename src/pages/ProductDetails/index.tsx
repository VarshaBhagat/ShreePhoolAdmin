import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import SubscriptionModal from "./SubscriptionModal";
import UserNavbar from "../../components/UserNavbar";

interface Product {
    _id?: string;
    id?: string;
    name: string;
    price: number;
    description?: string;
    weight?: string;
    qty?: string;
    image?: string;
    image_url?: string;
    is_subscribed?: boolean;
}

const API_BASE_URL = "http://187.127.165.63:5000/api";

export default function ProductDetails() {
    const [showSubscription, setShowSubscription] = useState(false);
    const { productId } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [isSubscribed, setIsSubscribed] = useState(false);

    useEffect(() => {
        if (productId) {
            fetchProduct();
        }
    }, [productId]);

    const fetchProduct = async () => {
        try {
            setLoading(true);

            const response = await axios.get(
                `${API_BASE_URL}/product/${productId}`
            );

            const data =
                response.data?.data ||
                response.data?.product ||
                response.data;

            setProduct(data);
            setIsSubscribed(data?.is_subscribed === true);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const increaseQty = async () => {
        const qty = quantity + 1;
        setQuantity(qty);

        try {
            await axios.post(`${API_BASE_URL}/basket/add`, {
                productId,
                quantity: qty,
                isTomorrow: true,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const decreaseQty = async () => {
        if (quantity <= 1) return;

        const qty = quantity - 1;
        setQuantity(qty);

        try {
            await axios.post(`${API_BASE_URL}/basket/update`, {
                productId,
                quantity: qty,
                isTomorrow: true,
            });
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600" />
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex h-screen items-center justify-center">
                Product not found
            </div>
        );
    }

    const image =
        product.image ||
        product.image_url ||
        "https://via.placeholder.com/600x400";

    return (
        <>
            <UserNavbar />
            <div className="min-h-screen bg-violet-50 py-28 px-4">
                <div className="mx-auto max-w-4xl">
                    <button
                        onClick={() => navigate(-1)}
                        className="mb-6 flex items-center gap-2 text-violet-600 font-medium hover:text-violet-700"
                    >
                        ← Back
                    </button>

                    <div className="overflow-hidden rounded-3xl bg-white shadow-sm">

                        {/* Product Image */}
                        <img
                            src={image}
                            alt={product.name}
                            className="h-[400px] w-full object-cover"
                        />

                        <div className="p-6">

                            {/* Product Name */}
                            <h1 className="text-4xl font-bold text-slate-900">
                                {product.name}
                            </h1>

                            {/* Price */}
                            <div className="mt-3 text-3xl font-bold text-violet-600">
                                ₹{product.price}
                            </div>

                            {/* Weight */}
                            {(product.weight || product.qty) && (
                                <div className="mt-2 text-slate-500">
                                    {product.weight || product.qty}
                                </div>
                            )}

                            {/* Description */}
                            {product.description && (
                                <p className="mt-5 leading-7 text-slate-700">
                                    {product.description}
                                </p>
                            )}

                            {/* Subscription Banner */}
                            {isSubscribed && (
                                <div className="mt-6 flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-3 text-white">
                                    <span>✅</span>
                                    <span>
                                        You're subscribed — Daily Plan
                                    </span>
                                </div>
                            )}

                            {/* Subscribe Button */}
                            <button
                                onClick={() => setShowSubscription(true)}
                                className={`mt-6 w-full rounded-xl py-4 font-semibold transition ${isSubscribed
                                    ? "border-2 border-violet-600 bg-white text-violet-600"
                                    : "bg-violet-600 text-white hover:bg-violet-700"
                                    }`}
                            >
                                {isSubscribed
                                    ? "📅 Change Plan"
                                    : "📅 Subscribe"}
                            </button>

                            {/* Cart Section */}
                            <div className="mt-6 flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                                <span className="font-medium text-slate-700">
                                    Add to tomorrow's order
                                </span>

                                <div className="flex overflow-hidden rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white">
                                    <button
                                        onClick={decreaseQty}
                                        className="px-4 py-2 text-xl hover:bg-white/10"
                                    >
                                        −
                                    </button>

                                    <span className="flex min-w-[50px] items-center justify-center font-semibold">
                                        {quantity}
                                    </span>

                                    <button
                                        onClick={increaseQty}
                                        className="px-4 py-2 text-xl hover:bg-white/10"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {showSubscription && product && (
                    <SubscriptionModal
                        product={{
                            _id: product._id || product.id || "",
                            name: product.name,
                            image:
                                product.image ||
                                product.image_url ||
                                "",
                            price: product.price,
                        }}
                        onClose={() =>
                            setShowSubscription(false)
                        }
                    />
                )}
            </div>
        </>
    );
}
