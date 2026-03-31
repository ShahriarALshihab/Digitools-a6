import React from "react";

const CartSection = ({ cartItems, onRemove, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  if (cartItems.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center max-w-2xl mx-auto">
        <div className="text-6xl mb-4">🛒</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Your cart is empty
        </h3>
        <p className="text-gray-500 text-sm">
          Add some amazing digital tools to get started!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 max-w-2xl mx-auto shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-5">Your Cart</h3>

      <div className="space-y-3">
        {cartItems.map((item) => (
          <div
            key={item.cartId}
            className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-purple-50 rounded-xl flex items-center justify-center text-lg flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">
                  {item.name}
                </p>
                <p className="text-gray-400 text-xs">${item.price}</p>
              </div>
            </div>

            <button
              onClick={() => onRemove(item.cartId)}
              className="text-red-500 font-bold  bg-gray-300 p-1 rounded  hover:text-red-600 text-sm  transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
        <span className="text-sm text-gray-600 font-medium">Total</span>
        <span className="text-xl font-extrabold text-gray-900">${total}</span>
      </div>
      <button
        onClick={onCheckout}
        className="btn w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full border-0 font-semibold mt-4"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default CartSection;
