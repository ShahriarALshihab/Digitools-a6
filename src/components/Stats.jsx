import React from "react";

const Stats = () => {
  const stats = [
    { value: "50k+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" },
  ];
  return (
    <section className="bg-gradient-to-r from-[#4f39f3] to-[#9514fa] py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-around gap-8">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.label}>
              <div className="text-center">
                <p className="text-4xl font-extrabold text-white">
                  {stat.value}
                </p>
                <p className="text-purple-200 text-sm font-medium mt-1">
                  {stat.label}
                </p>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden sm:block w-px h-12 bg-purple-400 opacity-50"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
