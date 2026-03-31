import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="navbar bg-white shadow-sm px-6 lg:px-16 sticky top-0 z-50 border-b border-gray-100">
      <div className="navbar-start">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="#products" className="text-gray-600 font-medium">Products</a></li>
            <li><a href="#features" className="text-gray-600 font-medium">Features</a></li>
            <li><a href="#pricing" className="text-gray-600 font-medium">Pricing</a></li>
            <li><a href="#testimonials" className="text-gray-600 font-medium">Testimonials</a></li>
            <li><a href="#faq" className="text-gray-600 font-medium">FAQ</a></li>
          </ul>
        </div>
        <a className="text-2xl font-extrabold text-purple-600 tracking-tight">
          DigiTools
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-1">
          {["Products", "Features", "Pricing", "Testimonials", "FAQ"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 font-medium hover:text-purple-600 transition-colors rounded-lg text-sm"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <div className="indicator">
          <button className="btn btn-ghost btn-sm btn-circle relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-4H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="badge badge-xs bg-purple-600 text-white border-0 absolute -top-1 -right-1 min-w-[18px] h-[18px] text-[10px]">
                {cartCount}
              </span>
            )}
          </button>
        </div>
        <a className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors cursor-pointer hidden sm:block">
          Login
        </a>
        <button className="btn bg-purple-600 hover:bg-purple-700 text-white btn-sm rounded-full px-5 border-0 font-semibold">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;