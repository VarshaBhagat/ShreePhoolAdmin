import appIcon from "../assets/appIcon.png";

export default function UserNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-violet-700 to-purple-500 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-white text-3xl md:text-4xl font-bold">
          <img src={appIcon} alt="App Icon" className="w-12 h-12 inline-block mr-3" />
          FrendRops
        </div>

        <div className="hidden md:flex gap-8 text-white text-lg font-medium">
          <a href="/" className="hover:text-pink-200">
            Home
          </a>
          <a href="/productList" className="hover:text-pink-200">
            Products
          </a>
           <a href="/wallet" className="hover:text-pink-200">
            Wallet
          </a>

          <a href="/basket" className="hover:text-pink-200">
            Basket
          </a>

          <a href="/profile" className="hover:text-pink-200">
            Profile
          </a>
          <a href="/contact" className="hover:text-pink-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
