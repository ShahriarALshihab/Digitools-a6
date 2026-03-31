import React from "react";

const steps = [
  {
    number: "01",
    icon: "👤",
    title: "Create Account",
    description: "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    number: "02",
    icon: "📦",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
  },
];

const Steps = () => {
  return (
    <section className="py-16 px-6 lg:px-16 bg-white" id="features">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Get Started In 3 Steps</h2>
          <p className="text-gray-500 text-sm mt-2">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-gray-50 rounded-2xl p-6 text-center relative border border-gray-100 hover:border-purple-200 transition-colors"
            >
             
              <div className="absolute top-4 right-4 w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">
                {step.number}
              </div>

              
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                {step.icon}
              </div>

              <h3 className="font-bold text-gray-900 text-base mb-2">{step.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
