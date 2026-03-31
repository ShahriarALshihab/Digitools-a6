import React from "react";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for getting started",
    price: "$0",
    period: "/Month",
    badge: null,
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    cta: "Get Started Free",
    ctaStyle: "bg-gradient-to-r from-[#4f39f3] to-[#9514fa] text-white btn-outline border-purple-300 text-purple-700 hover:bg-purple-50",
    cardStyle: "bg-white border border-gray-200",
  },
  {
    name: "Pro",
    subtitle: "Best for professionals",
    price: "$29",
    period: "/Month",
    badge: "Most Popular",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    cta: "Start Pro Trial",
    ctaStyle: "bg-white text-purple-700 hover:bg-gray-50",
    cardStyle: "bg-gradient-to-r from-[#4f39f3] to-[#9514fa] border-0 text-white scale-105 shadow-2xl",
  },
  {
    name: "Enterprise",
    subtitle: "For teams and businesses",
    price: "$99",
    period: "/Month",
    badge: null,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    cta: "Contact Sales",
    ctaStyle: " bg-gradient-to-r from-[#4f39f3] to-[#9514fa] text-white btn-outline border-purple-300 text-purple-700 hover:bg-purple-50",
    cardStyle: "bg-white border border-gray-200",
  },
];

const Pricing = () => {
  return (
    <section className="py-16 px-6 lg:px-16 bg-gray-50" id="pricing">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 text-sm mt-2">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 flex flex-col gap-4 relative ${plan.cardStyle}`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              <div>
                <h3 className={`font-extrabold text-lg ${plan.name === "Pro" ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mt-0.5 ${plan.name === "Pro" ? "text-purple-200" : "text-gray-500"}`}>
                  {plan.subtitle}
                </p>
              </div>

              <div className="flex items-baseline gap-1">
                <span className={`text-4xl font-extrabold ${plan.name === "Pro" ? "text-white" : "text-gray-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.name === "Pro" ? "text-purple-200" : "text-gray-400"}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-2 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs">
                    <svg
                      className={`w-3.5 h-3.5 flex-shrink-0 ${plan.name === "Pro" ? "text-purple-200" : "text-purple-600"}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.name === "Pro" ? "text-purple-100" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`btn w-full  text-white")  rounded-full border font-semibold text-sm mt-2 ${plan.ctaStyle}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
