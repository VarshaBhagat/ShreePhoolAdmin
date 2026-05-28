import React from "react";
import {
    Clock3,
    Flower2,
    ShoppingBag,
    Truck,
    Phone,
    Mail,
    MapPin,
} from "lucide-react";

export default function Home() {
    const categories = [
        {
            title: "Fresh Flowers",
            image:
                "https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Puja Items",
            image:
                "https://images.unsplash.com/photo-1604608672516-f1b8f87c2d5b?q=80&w=1200&auto=format&fit=crop",
        },
        {
            title: "Temple Garland",
            image:
                "https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    const products = [
        {
            name: "Rose Garland",
            image:
                "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?q=80&w=1200&auto=format&fit=crop",
        },
        {
            name: "Morning Puja Kit",
            image:
                "https://images.unsplash.com/photo-1593697821028-7a4567c96d4c?q=80&w=1200&auto=format&fit=crop",
        },
        {
            name: "Jasmine Flowers",
            image:
                "https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    return (
        <div className="bg-[#fffdfb] min-h-screen overflow-hidden">
            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-violet-700 to-purple-500 shadow-xl">
                <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
                    <div className="text-white text-4xl font-bold">
                        🌸 FrendRops
                    </div>

                    <div className="hidden md:flex gap-10 text-white text-xl font-medium">
                        <a href="#home" className="hover:text-pink-200">
                            Home
                        </a>

                        <a href="#categories" className="hover:text-pink-200">
                            Categories
                        </a>

                        <a href="#products" className="hover:text-pink-200">
                            Products
                        </a>

                        <a href="#contact" className="hover:text-pink-200">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section
                id="home"
                className="relative h-[760px] flex items-center"
            >
                <img
                    src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1600&auto=format&fit=crop"
                    alt="flowers"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#fff5ef]/90 to-black/20"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
                    <div className="max-w-3xl">
                        <h1 className="text-[78px] leading-[84px] font-bold text-[#2d1457]">
                            Early Morning
                            <br />
                            Flower Delivery
                        </h1>

                        <p className="mt-8 text-[30px] text-[#2d1457] leading-relaxed">
                            Fresh flowers and puja item delivery to your doorstep
                            before sunrise 🌸
                        </p>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="-mt-20 relative z-20 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="bg-pink-50 rounded-[30px] p-8 shadow-lg">
                        <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center">
                            <Clock3 size={38} className="text-pink-600" />
                        </div>

                        <h3 className="text-3xl font-bold text-[#24123f] mt-6">
                            5 AM Delivery
                        </h3>

                        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                            Fresh flowers delivered early morning daily.
                        </p>
                    </div>

                    <div className="bg-violet-50 rounded-[30px] p-8 shadow-lg">
                        <div className="w-20 h-20 rounded-full bg-violet-100 flex items-center justify-center">
                            <Flower2 size={38} className="text-violet-600" />
                        </div>

                        <h3 className="text-3xl font-bold text-[#24123f] mt-6">
                            Fresh Flowers
                        </h3>

                        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                            Direct from flower farms every morning.
                        </p>
                    </div>

                    <div className="bg-orange-50 rounded-[30px] p-8 shadow-lg">
                        <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center">
                            <ShoppingBag size={38} className="text-orange-500" />
                        </div>

                        <h3 className="text-3xl font-bold text-[#24123f] mt-6">
                            Puja Essentials
                        </h3>

                        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                            Complete daily puja items available.
                        </p>
                    </div>

                    <div className="bg-green-50 rounded-[30px] p-8 shadow-lg">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                            <Truck size={38} className="text-green-600" />
                        </div>

                        <h3 className="text-3xl font-bold text-[#24123f] mt-6">
                            Fast Delivery
                        </h3>

                        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                            Timely doorstep delivery in your area.
                        </p>
                    </div>
                </div>
            </section>

            {/* CATEGORIES */}
            <section
                id="categories"
                className="max-w-7xl mx-auto px-6 py-24"
            >
                <h2 className="text-5xl font-bold text-center text-[#2d1457]">
                    Shop Categories
                </h2>

                <div className="w-28 h-1 bg-pink-500 mx-auto mt-5 rounded-full"></div>

                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="relative rounded-[35px] overflow-hidden shadow-2xl group"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-[340px] w-full object-cover group-hover:scale-110 transition duration-500"
                            />

                            <div className="absolute inset-0 bg-black/35 flex items-end p-8">
                                <h3 className="text-white text-5xl font-bold">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* PRODUCTS */}
            <section
                id="products"
                className="max-w-7xl mx-auto px-6 pb-24"
            >
                <h2 className="text-5xl font-bold text-[#2d1457] text-center">
                    Popular Products
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mt-14">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:shadow-2xl transition"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-[320px] w-full object-cover"
                            />

                            <div className="p-7 text-center">
                                <h3 className="text-3xl font-bold text-[#24123f]">
                                    {product.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-violet-600 rounded-[45px] px-14 py-16 shadow-2xl">
                    <div className="max-w-3xl text-white relative z-10">
                        <h2 className="text-6xl font-bold leading-tight">
                            Start Your Day With Divine Freshness
                        </h2>

                        <p className="mt-6 text-2xl leading-relaxed">
                            Subscribe for daily flower and puja item delivery.
                        </p>
                    </div>

                    <div className="absolute right-10 bottom-0 text-[180px] opacity-20">
                        🛵
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer
                id="contact"
                className="bg-[#12051f] text-white py-16"
            >
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-4xl font-bold">
                            🌸 FrendRops
                        </h3>

                        <p className="mt-5 text-gray-300 text-lg leading-relaxed">
                            Early morning flower & puja delivery service.
                        </p>

                        {/* <div className="flex gap-4 mt-6">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Facebook size={22} />
              </div>

              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Instagram size={22} />
              </div>
            </div> */}
                    </div>

                    <div>
                        <h4 className="text-2xl font-bold">
                            Quick Links
                        </h4>

                        <ul className="mt-6 space-y-4 text-lg text-gray-300">
                            <li>Home</li>
                            <li>Products</li>
                            <li>Orders</li>
                            <li>Contact Us</li>
                            <li><a href="/privacy-policy" className="hover:text-white/80">Privacy Policy</a></li>
                            <li><a href="/terms-conditions" className="hover:text-white/80">Terms & Conditions</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-2xl font-bold">
                            Contact
                        </h4>

                        <div className="mt-6 space-y-5 text-lg text-gray-300">
                            <div className="flex items-center gap-3">
                                <MapPin size={20} />
                                <span>Bangalore, India</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={20} />
                                <span>fernanddroops@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={20} />
                                <span>+91 8050515079</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-7 text-center text-gray-400 text-lg">
                    © 2026 FrendRops. All rights reserved.
                </div>
            </footer>
        </div>
    );
}