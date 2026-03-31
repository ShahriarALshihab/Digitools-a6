/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import products from "../data/product.json";
import ProductCard from "./ProductCard";
import CartSection from "./CartSection";
import { toast } from "react-toastify";

const MainSection = ({ cartItems, setCartItems }) => {
  const [activeTab, setActiveTab] = useState("products");

  const handleAddToCart = (product) => {
    const newItem = { ...product, cartId: Date.now() + Math.random() };
    setCartItems((prev) => [...prev, newItem]);
    toast.success(`"${product.name}" added to cart!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleRemove = (cartId) => {
    const item = cartItems.find((i) => i.cardId === cartId);
    setCartItems((prev) => prev.filter((i) => i.cartId !== cartId));
    toast.error(`❌ "${item?.name}" removed from cart.`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleCheckout = () => {
    setCartItems([]);
    toast.success("✅ Checkout successful!", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div id="products" className="py-14 px-6 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Premium Digital Tools
          </h2>
          <p>
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 border border-gray-200 inline-flex shadow-sm">
            <button
              onClick={() => setActiveTab("products")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === "products"
                  ? "bg-purple-600 text-white shadow"
                  : "text-gray-600 hover: text-gray-900"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-1.5 ${activeTab === "cart" ? "bg-purple-600 text-white shadow" : "text-gray-600 hover:text-gray-900"}`}
            >
              Cart
              {cartItems.length > 0 && (
                <span
                  className={`text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center px-1 font-bold${
                    activeTab === "cart"
                      ? "bg-white text-purple-600"
                      : "bg-purple-600 text-white"
                  }`}
                >
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
        {activeTab === "products" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              ></ProductCard>
            ))}
          </div>
        ) : (
          <CartSection
            cartItems={cartItems}
            onRemove={handleRemove}
            onCheckout={handleCheckout}
          ></CartSection>
        )}
      </div>
    </div>
  );
};

export default MainSection;
