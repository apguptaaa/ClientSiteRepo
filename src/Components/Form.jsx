import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: null,
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("image", formData.image);

    try {
      await axios.post("https://serverapirepo.onrender.com/api/productinsert", data);
      setMsg("✅ Product added successfully!");
      setFormData({ name: "", price: "", image: null });
    } catch (err) {
      console.error(err);
      setMsg("❌ Failed to add product.");
    }
  };

  return (
<div className="h-screen w-full bg-gradient-to-br from-[#f0f9ff] via-white to-[#fce7f3] flex items-center justify-center px-4">
  <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-200 p-6 flex flex-col justify-center h-[90vh]">
    <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
      🛍️ Add New Product
    </h1>

    <form
      onSubmit={handleSubmit}
      method="POST"
      encType="multipart/form-data"
      className="flex flex-col justify-between flex-grow"
    >
      <div className="space-y-5">
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="T-Shirt, Shoes..."
            required
            className="w-full px-4 py-2 text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="₹0.00"
            required
            className="w-full px-4 py-2 text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Upload Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white file:bg-indigo-100 file:text-indigo-800 file:px-4 file:py-2 file:rounded-md hover:file:bg-indigo-200 transition"
          />
        </div>
      </div>

      {/* Submit Button + Message + Back */}
      <div className="mt-6 text-center">
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-full shadow-md transition duration-300"
        >
          ➕ Add Product
        </button>

        {msg && (
          <p className="mt-3 text-sm font-medium text-green-600">{msg}</p>
        )}

        <div className="mt-4">
          <Link to="/displayproduct">
            <span className="text-sm text-indigo-600 hover:underline hover:text-indigo-800">
              🔙 Back to Product List
            </span>
          </Link>
        </div>
      </div>
    </form>
  </div>
</div>



  );
}

export default Form;
