import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-linear-to-r from-[#4f39f3] to-[#9514fa] text-white py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white mb-3">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-200 text-sm mb-8 max-w-lg mx-auto">
          Join thousands of professionals who are already using DigiTools to work smarter. Start your free trial today.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
          <a
            href="#products"
            className="btn bg-white text-purple-700 hover:bg-gray-50 rounded-full px-7 border-0 font-semibold"
          >
            Explore Products
          </a>
          <a
            href="#pricing"
            className="btn btn-outline border-white text-white hover:bg-white/10 rounded-full px-7 font-semibold"
          >
            View Pricing
          </a>
        </div>

        <p className="text-purple-300 text-xs">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
