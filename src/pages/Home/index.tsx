import React from "react";
import { Helmet } from "react-helmet-async";
import garlannd from "../../assets/garland.jpeg";
import freshFlower from "../../assets/merigold.jpeg";  
import pujaItem from "../../assets/pujaItem.jpeg";
import chandu from "../../assets/chandu.jpeg";
import ganeri from "../../assets/Ganeri.jpeg";  
import sugandharaja from "../../assets/Sugandharaja.jpeg"; 
import freshFlowers from "../../assets/freshFlower.jpeg";
import appIcon from "../../assets/appIcon.png";

import {
  Clock3,
  Flower2,
  ShoppingBag,
  Truck,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  const categories = [
    {
      title: "Fresh Flowers",
      image:
        freshFlower,
    },
    {
      title: "Puja Items",
      image:
        pujaItem,
    },
    {
      title: "Temple Garland",
      image: garlannd,
    },
  ];

  const products = [
    {
      name: "Sugandharaja",
      image:
       sugandharaja,
    },
    {
      name: "Chandu Flowers",
      image:
        chandu,
    },
    {
      name: "Ganeri Flowers",
      image:
        ganeri,
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          FrendRops | Fresh Flower & Puja Item Delivery in Bangalore
        </title>

        <meta
          name="description"
          content="Order fresh flowers, puja kits, garlands and temple essentials online. Early morning doorstep delivery across Bangalore."
        />

        <meta
          name="keywords"
          content="flower delivery Bangalore, puja flowers online, puja items delivery, morning flower delivery, garland delivery Bangalore, fresh flowers Bangalore"
        />

        <meta
          property="og:title"
          content="FrendRops | Fresh Flower & Puja Item Delivery"
        />

        <meta
          property="og:description"
          content="Fresh flowers, puja kits, garlands and daily delivery services in Bangalore."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "FrendRops",
            telephone: "+91 8050515079",
            email: "fernanddroops@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bangalore",
              addressCountry: "IN",
            },
          })}
        </script>
      </Helmet>

      <div className="bg-[#fffdfb] min-h-screen overflow-hidden">
        {/* NAVBAR */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-violet-700 to-purple-500 shadow-xl">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <div className="text-white text-3xl md:text-4xl font-bold">
              <img src={appIcon} alt="App Icon" className="w-12 h-12 inline-block mr-3" />
              FrendRops
            </div>

            <div className="hidden md:flex gap-8 text-white text-lg font-medium">
              <a href="#home" className="hover:text-pink-200">
                Home
              </a>

              <a href="#categories" className="hover:text-pink-200">
                Categories
              </a>

              <a href="#products" className="hover:text-pink-200">
                Products
              </a>

              <a href="#faq" className="hover:text-pink-200">
                FAQ
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
          className="relative min-h-screen flex items-center"
        >
          <img
            src={freshFlowers}
            alt="Fresh Flower Delivery Bangalore"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-black/20" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <span className="inline-block bg-violet-100 text-violet-700 px-4 py-2 rounded-full font-semibold mb-5">
                🌸 Bangalore's Trusted Flower Delivery Service
              </span>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#2d1457]">
                Fresh Flower &
                <br />
                Puja Item Delivery
                <br />
                In Bangalore
              </h1>

              <p className="mt-8 text-xl md:text-2xl text-gray-700 leading-relaxed">
                Get fresh flowers, garlands, puja kits, temple offerings and
                daily essentials delivered to your doorstep before sunrise.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">
                {/* <a
                  href="/products"
                  className="bg-violet-700 hover:bg-violet-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition"
                >
                  Shop Now
                </a> */}

                <a
                  href="tel:+918050515079"
                  className="bg-white border-2 border-violet-700 text-violet-700 px-8 py-4 rounded-xl text-lg font-semibold transition"
                >
                  Call Now
                </a>
              </div>

              <div className="flex flex-wrap gap-8 mt-12">
                <div>
                  <h3 className="text-3xl font-bold text-violet-700">
                    500+
                  </h3>
                  <p className="text-gray-600">Happy Customers</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-violet-700">
                    Early Morning
                  </h3>
                  <p className="text-gray-600">Morning Delivery</p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-violet-700">
                    100%
                  </h3>
                  <p className="text-gray-60x0">Fresh Flowers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mt-4 relative z-20 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-pink-50 rounded-[30px] p-8 shadow-lg">
              <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center">
                <Clock3 size={38} className="text-pink-600" />
              </div>

              <h3 className="text-2xl font-bold text-[#24123f] mt-6">
                Early Morning Delivery
              </h3>

              <p className="text-gray-600 mt-4">
                Daily fresh flower delivery before sunrise.
              </p>
            </div>

            <div className="bg-violet-50 rounded-[30px] p-8 shadow-lg">
              <div className="w-20 h-20 rounded-full bg-violet-100 flex items-center justify-center">
                <Flower2 size={38} className="text-violet-600" />
              </div>

              <h3 className="text-2xl font-bold text-[#24123f] mt-6">
                Fresh Flowers
              </h3>

              <p className="text-gray-600 mt-4">
                Sourced directly from flower farms every morning.
              </p>
            </div>

            <div className="bg-orange-50 rounded-[30px] p-8 shadow-lg">
              <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center">
                <ShoppingBag size={38} className="text-orange-500" />
              </div>

              <h3 className="text-2xl font-bold text-[#24123f] mt-6">
                Puja Essentials
              </h3>

              <p className="text-gray-600 mt-4">
                Complete puja kits, diyas, agarbatti and offerings.
              </p>
            </div>

            <div className="bg-green-50 rounded-[30px] p-8 shadow-lg">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <Truck size={38} className="text-green-600" />
              </div>

              <h3 className="text-2xl font-bold text-[#24123f] mt-6">
                Fast Delivery
              </h3>

              <p className="text-gray-600 mt-4">
                Reliable doorstep delivery across Bangalore.
              </p>
            </div>
          </div>
        </section>

        {/* PART 2 STARTS HERE */}
                {/* CATEGORIES */}
        <section
          id="categories"
          className="max-w-7xl mx-auto px-6 py-24"
        >
          <h2 className="text-5xl font-bold text-center text-[#2d1457]">
            Fresh Flowers & Puja Categories
          </h2>

          <div className="w-28 h-1 bg-pink-500 mx-auto mt-5 rounded-full"></div>

          <p className="text-center text-gray-600 text-xl mt-6 max-w-3xl mx-auto">
            Explore our wide range of fresh flowers, temple garlands,
            puja kits and daily worship essentials.
          </p>

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
                  <h3 className="text-white text-4xl font-bold">
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
          <h2 className="text-5xl font-bold text-center text-[#2d1457]">
            Best Selling Flowers & Puja Essentials
          </h2>

          <p className="text-center text-gray-600 text-xl mt-6">
            Popular products loved by our customers.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
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

                  {/* <button className="mt-5 bg-violet-700 text-white px-6 py-3 rounded-xl hover:bg-violet-800 transition">
                    Order Now
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-violet-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-bold text-center text-[#2d1457]">
              Why Choose FrendRops?
            </h2>

            <p className="text-center text-gray-600 mt-6 text-xl">
              Trusted by hundreds of families across Bangalore.
            </p>

            <div className="grid md:grid-cols-2 gap-10 mt-16">
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-center gap-4">
                  <CheckCircle className="text-green-600" size={28} />
                  <h3 className="text-2xl font-bold">
                    Fresh Flowers Daily
                  </h3>
                </div>

                <p className="text-gray-600 mt-4">
                  Fresh flowers sourced directly from farms every morning.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-center gap-4">
                  <CheckCircle className="text-green-600" size={28} />
                  <h3 className="text-2xl font-bold">
                    Early Morning Delivery
                  </h3>
                </div>

                <p className="text-gray-600 mt-4">
                  Deliveries begin before sunrise for your daily puja needs.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-center gap-4">
                  <CheckCircle className="text-green-600" size={28} />
                  <h3 className="text-2xl font-bold">
                    Affordable Pricing
                  </h3>
                </div>

                <p className="text-gray-600 mt-4">
                  Competitive pricing with subscription options available.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-center gap-4">
                  <CheckCircle className="text-green-600" size={28} />
                  <h3 className="text-2xl font-bold">
                    Trusted Local Service
                  </h3>
                </div>

                <p className="text-gray-600 mt-4">
                  Reliable service built specifically for Bangalore residents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        {/* <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-bold text-center text-[#2d1457]">
              Areas We Serve
            </h2>

            <p className="text-center text-gray-600 text-xl mt-6">
              Flower and puja item delivery across Bangalore.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mt-14">
              {[
                "Sarjapur",
                "Whitefield",
                "Bellandur",
                "Electronic City",
                "HSR Layout",
                "Marathahalli",
                "Varthur",
                "Brookefield",
                "Koramangala",
                "Indiranagar",
                "BTM Layout",
                "Sarjapur Road",
              ].map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md p-6 text-center font-semibold text-[#2d1457]"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* TESTIMONIALS */}
        <section className="bg-gradient-to-r from-violet-700 to-purple-600 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-5xl font-bold text-center text-white">
              What Customers Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill="#FFD700"
                      color="#FFD700"
                    />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Fresh flowers delivered every morning exactly on time.
                  Highly recommended.
                </p>

                <h4 className="font-bold mt-6 text-xl">
                  Priya Sharma
                </h4>

                <span className="text-gray-500">
                  Whitefield
                </span>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill="#FFD700"
                      color="#FFD700"
                    />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Great quality flowers and puja kits. The delivery is
                  always reliable.
                </p>

                <h4 className="font-bold mt-6 text-xl">
                  Ramesh Kumar
                </h4>

                <span className="text-gray-500">
                  Sarjapur
                </span>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      fill="#FFD700"
                      color="#FFD700"
                    />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Best flower delivery service in Bangalore. Fresh and
                  affordable.
                </p>

                <h4 className="font-bold mt-6 text-xl">
                  Anjali Gupta
                </h4>

                <span className="text-gray-500">
                  Bellandur
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PART 3 STARTS HERE */}
                {/* FAQ SECTION */}
        <section
          id="faq"
          className="max-w-7xl mx-auto px-6 py-24"
        >
          <h2 className="text-5xl font-bold text-center text-[#2d1457]">
            Frequently Asked Questions
          </h2>

          <p className="text-center text-gray-600 text-xl mt-6">
            Everything you need to know about FrendRops flower and puja item delivery.
          </p>

          <div className="mt-16 space-y-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#24123f]">
                Do you deliver flowers early in the morning?
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes. Our deliveries start as early as 5:00 AM so you receive
                fresh flowers before your daily puja and morning rituals.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#24123f]">
                Which areas do you serve?
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                We currently serve Sarjapur, Whitefield, Bellandur, HSR Layout,
                Electronic City, Marathahalli, Varthur and nearby Bangalore areas.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#24123f]">
                Can I subscribe for daily flower delivery?
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Absolutely. We offer daily and monthly subscription plans for
                fresh flower delivery and puja essentials.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#24123f]">
                Do you provide puja kits?
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes. We provide complete puja kits, garlands, agarbatti,
                camphor, diyas and other temple essentials.
              </p>
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="max-w-7xl mx-auto px-6 pb-24">
          <div className="relative overflow-hidden bg-gradient-to-r from-pink-500 to-violet-600 rounded-[45px] px-10 md:px-14 py-16 shadow-2xl">
            <div className="max-w-3xl text-white relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Start Your Day With Divine Freshness
              </h2>

              <p className="mt-6 text-xl md:text-2xl leading-relaxed">
                Subscribe for daily flower and puja item delivery directly to
                your doorstep.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                {/* <a
                  href="/products"
                  className="bg-white text-violet-700 px-8 py-4 rounded-xl font-semibold"
                >
                  Shop Now
                </a> */}

                <a
                  href="tel:+918050515079"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold"
                >
                  Call Us
                </a>
              </div>
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
            {/* Company */}
            <div>
              <h3 className="text-4xl font-bold">
                🌸 FrendRops
              </h3>

              <p className="mt-5 text-gray-300 text-lg leading-relaxed">
                Fresh flowers, puja kits, garlands and temple essentials
                delivered daily across Bangalore.
              </p>

              <div className="mt-6">
                <span className="inline-block bg-violet-700 px-4 py-2 rounded-full text-sm">
                  Trusted by Bangalore Families
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-2xl font-bold">
                Quick Links
              </h4>

              <ul className="mt-6 space-y-4 text-lg text-gray-300">
                <li>
                  <a href="#home" className="hover:text-white">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#categories" className="hover:text-white">
                    Categories
                  </a>
                </li>

                <li>
                  <a href="#products" className="hover:text-white">
                    Products
                  </a>
                </li>

                <li>
                  <a href="#faq" className="hover:text-white">
                    FAQ
                  </a>
                </li>

                <li>
                  <a
                    href="/privacy-policy"
                    className="hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="/terms-conditions"
                    className="hover:text-white"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-2xl font-bold">
                Contact Us
              </h4>

              <div className="mt-6 space-y-5 text-lg text-gray-300">
                <div className="flex items-center gap-3">
                  <MapPin size={20} />
                  <span>Bangalore, Karnataka, India</span>
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

        {/* WHATSAPP FLOATING BUTTON */}
        <a
          href="https://wa.me/918050515079"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl font-semibold transition-all duration-300"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}