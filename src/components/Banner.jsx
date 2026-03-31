import React from "react";

const Banner = () => {
  return (
    <section className="bg-white py-10 lg:py-16 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
       
        <div className="flex-1 max-w-xl">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold text-purple-700">New: AI-Powered Tools Available</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Supercharge Your<br />
            <span className="text-gray-900">Digital Workflow</span>
          </h1>

          <p className="text-gray-500 text-sm lg:text-base mb-3 leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity software — all in one place. Start creating faster today.
          </p>

          <a href="#products" className="text-purple-600 font-semibold text-sm hover:underline mb-6 inline-block">
            Explore Products
          </a>

          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="#products"
              className="btn bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 border-0 font-semibold text-sm"
            >
              Explore Products
            </a>
            <button className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 rounded-full px-6 font-semibold text-sm gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>

       
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-md">
           
            <div className=" rounded-2xl overflow-hidden shadow-xl aspect-4/4 flex items-center justify-center">
            <img src="Images/banner.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
