import { useEffect, useState } from "react";
import {
    User,
    Headphones,
    Trash2,
    LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "./api/profile";
import UserNavbar from "../../components/UserNavbar";

interface ProfileData {
    _id: string;
    phone_prefix: string;
    phone_number: string;
}

export default function Profile() {
    const navigate = useNavigate();

    const [profile, setProfile] =
        useState<ProfileData | null>(null);

    useEffect(() => {
        loadProfile();
    }, []);

    const loadProfile = async () => {
        try {
            const { data } = await getProfile();
            setProfile(data.data);
        } catch (error) {
            console.error(error);
        }
    };

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <>
            <UserNavbar />
            <div className="min-h-screen bg-violet-50 p-4 pt-28">

                <div className="max-w-4xl mx-auto">

                    {/* Profile Card */}
                    <div className="bg-white rounded-3xl shadow-sm p-6">

                        <div className="flex flex-col md:flex-row gap-5 items-start">

                            <div className="h-20 w-20 rounded-full bg-violet-500 flex items-center justify-center">
                                <User
                                    size={40}
                                    className="text-white"
                                />
                            </div>

                            <div className="flex-1">
                                <h1 className="text-3xl font-bold">
                                    User
                                </h1>

                                <div className="mt-2 text-gray-600">
                                    {profile?.phone_prefix}
                                    {profile?.phone_number}
                                </div>

                                <div className="mt-2 text-gray-500">
                                    Customer Account
                                </div>
                            </div>

                            <span className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full">
                                Subscriber
                            </span>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="bg-white rounded-3xl shadow-sm mt-5 p-6">

                        <div className="grid grid-cols-3 text-center">

                            <div>
                                <div className="text-3xl font-bold">
                                    2
                                </div>

                                <div className="text-gray-500">
                                    Orders
                                </div>
                            </div>

                            <div>
                                <div className="text-3xl font-bold">
                                    1
                                </div>

                                <div className="text-gray-500">
                                    Subscriptions
                                </div>
                            </div>

                            <div>
                                <div className="text-3xl font-bold">
                                    2
                                </div>

                                <div className="text-gray-500">
                                    Skipped
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Support Section */}
                    <div className="bg-white rounded-3xl shadow-sm mt-5 p-6">

                        <h2 className="text-gray-500 uppercase text-sm mb-4">
                            Support
                        </h2>

                        <button
                            onClick={() =>
                                navigate("/contact")
                            }
                            className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-violet-50 transition"
                        >
                            <div className="h-12 w-12 rounded-xl bg-violet-100 flex items-center justify-center">
                                <Headphones className="text-violet-600" />
                            </div>

                            <span className="font-medium text-lg">
                                Contact Us
                            </span>
                        </button>

                    </div>

                    {/* Delete */}
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <button className="w-full sm:w-56 bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition">
                            <Trash2 size={18} />
                            Delete Account
                        </button>

                        <button
                            onClick={logout}
                            className="w-full sm:w-56 bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition"
                        >
                            <LogOut size={18} />
                            Log Out
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}
