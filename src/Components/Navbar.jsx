import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50 w-full">
<div className="w-full px-4 lg:px-8">

        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/" className="text-white">
              🛍️ MyShop
            </Link>
          </div>

          {/* Hamburger Icon (mobile only) */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex space-x-6">
            <Link
              to="/"
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-semibold transition"
            >
              Add Product
            </Link>
            <Link
              to="/displayProduct"
              className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-semibold transition"
            >
              Display Products
            </Link>
          </div>
        </div>

        {/* Mobile Nav Links */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col space-y-4 mt-2 ">
            <Link
              to="/"
              className="block bg-white/10 hover:bg-white/20 px-4 py-2 rounded text-sm font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Add Product
            </Link>
            <Link
              to="/displayProduct"
              className="block bg-white/10 hover:bg-white/20 px-9 py-3 rounded mb-4 text-sm font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Display Products
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
