import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../../components/UserNavbar";
import { getProducts } from "./api/products";
import { addToCart } from "./api/cart";

export default function ProductList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");
    const loadProducts = async () => {
    const {data} = await getProducts();
    console.log(data)
    setProducts(data);
    setFilteredProducts(data);
  };
  
 const handleAddToCart = async (product) => {
  try {
    const { data } = await addToCart(product._id, 1);

    if (data.success) {
      alert("Added to cart successfully");
    }
  } catch (error) {
    console.error(error);

    alert(
      error?.response?.data?.message ||
      "Failed to add product to cart"
    );
  }
};
  useEffect(() => {
    loadProducts();
  }, []);



  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(filtered);
  }, [search, products]);

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Hero */}
      <UserNavbar />

      {/* Search */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-3 text-gray-400" />

          <input
            type="text"
            placeholder="Search flowers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border"
          />
        </div>
      </div>

      {/* Products */}
     <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {filteredProducts.map((product) => (
            <div
                key={product._id}
                onClick={() => navigate(`/product/${product._id}`)}
                className="bg-white rounded-[32px] p-5 shadow-lg hover:-translate-y-1 transition duration-300 h-full flex flex-col"
            >
                <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-2xl"
                />

                <div className="mt-5 flex flex-col flex-1">
                <h3 className="font-bold text-2xl leading-tight break-words min-h-[110px] text-gray-900">
                    {product.name}
                </h3>

                <p className="text-gray-500 mt-2 text-lg">
                    {product.description || "Each packet contains 10 grams"}
                </p>

                <div className="mt-auto pt-6 flex items-center justify-between">
                    <span className="text-3xl font-bold text-purple-600">
                    ₹{product.price}
                    </span>

                    <button className="bg-gradient-to-r from-purple-700 to-purple-500 text-white px-7 py-3 rounded-full font-medium text-lg hover:shadow-lg transition"
                    onClick={() => handleAddToCart(product)}
                    >
                    Add
                    </button>
                </div>
                </div>
            </div>
            ))}
        </div>
    </div>
    </div>
  );
}
