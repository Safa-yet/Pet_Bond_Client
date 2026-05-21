import React from "react";

const services = [
  {
    title: "Wellness Care",
    desc: "Comprehensive health checks and vaccinations for every pet.",
    icon: "🩺",
    bg: "bg-white",
    text: "text-on-surface",
    iconBg: "bg-pri-fixed",
  },
  {
    title: "Behavioral Advice",
    desc: "Expert guidance to help you understand your pet.",
    icon: "🧠",
    bg: "bg-pri",
    text: "text-white",
    iconBg: "bg-white/20",
  },
  {
    title: "Nutrition Plans",
    desc: "Tailored food plans to keep your furry friend healthy.",
    icon: "🍖",
    bg: "bg-sec",
    text: "text-white",
    iconBg: "bg-white/20",
  },
];

const ServiceSec = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-surface-container-low to-surface container mx-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface">
            Our Services
          </h2>
          <p className="text-on-surface-variant mt-2 max-w-xl mx-auto">
            Everything we provide to ensure your pet lives a happy and healthy life.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              className={`${s.bg} ${s.text} p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden`}
            >
              {/* Glow effect */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl ${s.iconBg} flex items-center justify-center text-3xl mb-6`}
              >
                {s.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{s.title}</h3>

              <p className={s.text === "text-white" ? "text-white/80" : "text-on-surface-variant"}>
                {s.desc}
              </p>

              {/* Hover line */}
              <div className="mt-6 h-[2px] w-0 group-hover:w-full bg-current transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSec;