import React, { useState } from 'react'
const tagStyles = {
  "best-seller": "bg-yellow-100 text-yellow-700",
  popular: "bg-blue-100 text-blue-700",
  new: "bg-green-100 text-green-700",
};
const ProductCard = ({product, onAddToCart}) => {
    const [added, setAdded]= useState(false); 

    const handleBuyNow=()=>{
        onAddToCart(product); 
        setAdded(true); 
        setTimeout(()=> setAdded(false),2000); 
    }; 

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow relative">
        {
            product.tag &&(
                <span className={`absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full ${
                    tagStyles[product.tagType] || "bg-gray-100 text-gray-600"
                }`}>
                    {product.tag}
                </span>
            )
        }
         <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-2xl">
        {product.icon}
      </div>
      <div>
        <h3 className="font-bold text-gray-900 text-base">{product.name}</h3>
        <p className="text-gray-500 text-xs mt-1 leading-relaxed line-clamp-2">
          {product.description}
        </p>
      </div>
        <div className="flex items-baseline gap-1">
        <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
        <span className="text-gray-400 text-xs">
          /{product.period === "one-time" ? "One Time" : product.period === "mo" ? "mo" : product.period}
        </span>
      </div>

      <ul className='space-y-1.5'>
        {product.features.map((feature, index)=>(
           <li key={index} className="flex items-center gap-2 text-xs text-gray-600">
            <svg className="w-3.5 h-3.5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>{feature}
            </li> 
        ))}

      </ul>

      <button onClick={handleBuyNow} className={`btn w-full rounded-full border-0 font-semibold text-sm mt-auto transition-all ${
        added?"bg-green-500 hover:bg-green-600 text-white": "bg-gradient-to-r from-[#4f39f3] to-[#9514fa] hover:bg-purple-700 text-white"
      }`}>
        {added?"Added to Cart": "Buy Now"}
      </button>

    </div>
  )
}

export default ProductCard