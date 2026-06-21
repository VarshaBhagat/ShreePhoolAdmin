import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserNavbar from "../../components/UserNavbar";

interface Transaction {
    _id: string;
    amount: number;
    type: "credit" | "debit" | "add";
    description?: string;
    createdAt: string;
}

const QUICK_AMOUNTS = [100, 200, 500, 1000];

export default function Wallet() {
    const navigate = useNavigate();
    const authHeader = async () => {
        const token = localStorage.getItem("token");
        if (!token || token === "null" || token === "undefined") return {};
        return { Authorization: `Bearer ${token}` };
    };


    const [balance, setBalance] = useState<number>(0);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [customAmount, setCustomAmount] = useState<string>("");


    const handlePayment = async (amount: string) => {
        const parsedAmount = Number(amount);
        const headers = await authHeader();
        if (!parsedAmount || parsedAmount < 1) {
            alert("Enter valid amount");
            return;
        }

        try {
            setLoading(true);

            const res = await axios.post(
                `${process.env.REACT_APP_BASE_URL}wallet/create-order`,
                {
                    amount: parsedAmount,
                },
                { headers }
            );

            if (!window.Razorpay) {
                alert("Razorpay SDK not loaded");
                return;
            }
const data = res.data.data;
            console.log("ORDER DATA:", data);

            const options = {
                key: data.key,
                amount: data.amount * 100, // IMPORTANT (Razorpay needs paise)
                currency: "INR",
                order_id: data.order_id,   // ✅ FIXED HERE

                name: "FRENDROPS",
                description: "Wallet Recharge",

                handler: async (response: any) => {
                    const verify = await axios.post(
                        `${process.env.REACT_APP_BASE_URL}wallet/verify-payment`,
                        {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            amount: parsedAmount,
                        },
                        { headers }
                    );

                    if (verify.data.success) {
                        alert("Money added successfully");
                        navigate("/productList");
                    } else {
                        alert("Verification failed");
                    }
                },

                theme: {
                    color: "#7c3aed",
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();

        } catch (error) {
            console.error(error);
            alert("Payment Failed");
        } finally {
            setLoading(false);
        }
    };

    const fetchWallet = async () => {
        try {
            setLoading(true);
            const headers = await authHeader();

            const [walletRes, txRes] = await Promise.all([
                axios.get(`${process.env.REACT_APP_BASE_URL}wallet`, { headers }),
                axios.get(`${process.env.REACT_APP_BASE_URL}transactions`, { headers }),
            ]);
            setBalance(walletRes.data.data.balance || 0);
            setTransactions(txRes.data.data || []);
        } catch (error) {
            console.error("Wallet fetch error:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWallet();
    }, []);

    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const handleAddMoney = () => {
        if (!customAmount || Number(customAmount) < 1) {
            alert("Please enter a valid amount");
            return;
        }

        handlePayment(customAmount);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center bg-slate-50">
                <div className="h-12 w-12 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <>
            <UserNavbar></UserNavbar>
            <div className="min-h-screen bg-slate-100 py-28 px-4">
                <div className="max-w-5xl mx-auto">

                    {/* Wallet Balance Card */}
                    <div className="bg-gradient-to-r from-violet-600 to-purple-500 text-white rounded-3xl p-8 shadow-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                💳
                            </div>

                            <div>
                                <p className="text-white/80 text-sm">
                                    Wallet Balance
                                </p>

                                <h1 className="text-4xl md:text-5xl font-bold mt-1">
                                    ₹{balance.toFixed(2)}
                                </h1>
                            </div>
                        </div>

                        <p className="mt-4 text-white/70">
                            Available to use on orders
                        </p>
                    </div>

                    {/* Add Money Section */}
                    <div className="bg-white rounded-3xl p-6 mt-6 shadow-sm border border-slate-100">
                        <h2 className="text-xl font-bold text-gray-800 mb-5">
                            Add Money
                        </h2>

                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-gray-700">
                                ₹
                            </span>

                            <input
                                type="number"
                                value={customAmount}
                                onChange={(e) => setCustomAmount(e.target.value)}
                                placeholder="Enter amount"
                                className="w-full pl-12 pr-4 py-4 text-xl font-semibold border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                            />
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                            {QUICK_AMOUNTS.map((amount) => (
                                <button
                                    key={amount}
                                    onClick={() => setCustomAmount(String(amount))}
                                    className={`py-3 rounded-xl border font-semibold transition-all
                  ${customAmount === String(amount)
                                            ? "bg-violet-100 border-violet-500 text-violet-700"
                                            : "border-gray-200 text-gray-700 hover:bg-violet-50 hover:border-violet-300"
                                        }`}
                                >
                                    ₹{amount}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={handleAddMoney}
                            disabled={!customAmount}
                            className="w-full mt-5 bg-gradient-to-r from-violet-600 to-purple-500 text-white py-4 rounded-2xl font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Add ₹{customAmount || "0"}
                        </button>
                    </div>

                    {/* Transaction History */}
                    <div className="bg-white rounded-3xl p-6 mt-6 shadow-sm border border-slate-100">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="text-xl font-bold text-gray-800">
                                Transaction History
                            </h2>

                            <button
                                onClick={fetchWallet}
                                className="text-violet-600 font-medium hover:text-violet-700"
                            >
                                Refresh
                            </button>
                        </div>

                        {transactions.length === 0 ? (
                            <div className="py-16 text-center">
                                <div className="text-6xl mb-4">📄</div>

                                <h3 className="text-lg font-semibold text-gray-700">
                                    No Transactions Yet
                                </h3>

                                <p className="text-gray-500 mt-2">
                                    Add money to start using your wallet.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {transactions.map((tx) => {
                                    const isCredit =
                                        tx.type === "credit" || tx.type === "add";

                                    return (
                                        <div
                                            key={tx._id}
                                            className="flex items-center justify-between border border-slate-200 rounded-2xl p-4 hover:bg-slate-50 transition"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div
                                                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg
                          ${isCredit
                                                            ? "bg-green-100 text-green-600"
                                                            : "bg-red-100 text-red-600"
                                                        }`}
                                                >
                                                    {isCredit ? "↓" : "↑"}
                                                </div>

                                                <div>
                                                    <h4 className="font-semibold text-gray-800">
                                                        {tx.description ||
                                                            (isCredit
                                                                ? "Added to Wallet"
                                                                : "Wallet Payment")}
                                                    </h4>

                                                    <p className="text-sm text-gray-500">
                                                        {formatDate(tx.createdAt)}
                                                    </p>
                                                </div>
                                            </div>

                                            <div
                                                className={`font-bold text-lg
                        ${isCredit
                                                        ? "text-green-600"
                                                        : "text-red-600"
                                                    }`}
                                            >
                                                {isCredit ? "+" : "-"}₹{tx.amount}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    );
}