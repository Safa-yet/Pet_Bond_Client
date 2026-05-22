"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPaw } from "react-icons/fa";
import { SearchField } from "@heroui/react";
import { FiFileText } from "react-icons/fi";
import { LuHeartHandshake } from "react-icons/lu";
import { BiHome } from "react-icons/bi";


const steps = [
  {
    id: "01",
    title: "Discover Pets",
    description:
      "Explore adorable pets with verified medical records, personality insights, and perfect lifestyle compatibility.",
    icon: SearchField,
    color: "from-sky-500 to-cyan-400",
    glow: "bg-sky-400/20",
  },
  {
    id: "02",
    title: "Submit Request",
    description:
      "Complete a quick adoption form so we can understand your lifestyle and ideal furry companion.",
    icon: FiFileText,
    color: "from-orange-500 to-amber-400",
    glow: "bg-orange-400/20",
  },
  {
    id: "03",
    title: "Meet & Bond",
    description:
      "Schedule a meet-up and spend quality time with your future best friend before adoption.",
    icon: LuHeartHandshake,
    color: "from-pink-500 to-rose-400",
    glow: "bg-pink-400/20",
  },
  {
    id: "04",
    title: "Welcome Home",
    description:
      "Finalize the process and begin a lifetime of love, cuddles, happiness, and memories.",
    icon: BiHome,
    color: "from-emerald-500 to-green-400",
    glow: "bg-green-400/20",
  },
];

const JourneySec = () => {
  return (
    <section className="relative overflow-hidden py-28 bg-gradient-to-b from-white via-orange-50/30 to-white">
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-300/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-sky-300/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="inline-flex items-center gap-2 bg-pri/10 text-pri px-6 py-2 rounded-full text-sm font-bold tracking-wide mb-6 border border-pri/10 backdrop-blur-xl">
            <FaPaw className="w-4 h-4" />
            Simple & Transparent
          </span>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Your Adoption Journey
          </h2>

          <p className="text-lg md:text-xl text-gray-500 leading-[1.9]">
            Bringing home your furry family member should feel exciting,
            emotional, and beautifully stress-free.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Line */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-[2px] bg-gradient-to-r from-sky-400 via-pink-400 to-green-400 z-0 opacity-40" />

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Glow */}
                  <div
                    className={`absolute -inset-[1px] rounded-[34px] bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500`}
                  />

                  {/* Card */}
                  <div className="relative h-full bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] p-8 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02]">
                    {/* Hover Background Glow */}
                    <div
                      className={`absolute top-0 right-0 w-40 h-40 ${step.glow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
                    />

                    {/* Paw Decoration */}
                    <FaPaw
 className="absolute top-6 right-6 w-14 h-14 text-gray-100 group-hover:text-gray-200 transition-all duration-500" />

                    <div className="relative z-10">
                      {/* Step Label */}
                      <span className="text-xs uppercase tracking-[4px] text-gray-400 font-bold">
                        Step {step.id}
                      </span>

                      {/* Icon */}
                      <div
                        className={`mt-5 mb-7 w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center shadow-xl group-hover:rotate-6 transition-all duration-500`}
                      >
                        <Icon className="w-9 h-9" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-black text-gray-900 mb-4">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-500 leading-[1.9] text-[15px]">
                        {step.description}
                      </p>
                    </div>

                    {/* Bottom Gradient Line */}
                    <div
                      className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${step.color} transition-all duration-500`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySec;