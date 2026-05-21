import React from "react";
import { GrFavorite } from "react-icons/gr";
import { MdOutlinePets } from "react-icons/md";

const HappyCoustomer = () => {
  return (
    <section className="relative overflow-hidden py-24 mx-auto container">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pri/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-sec/10 rounded-full blur-3xl"></div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-pri font-semibold uppercase tracking-[4px] mb-3">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-on-surface leading-tight mb-5">
            Happy Tails &
            <span className="text-pri"> Loving Families</span>
          </h2>

          <p className="text-on-surface-variant text-lg leading-relaxed">
            Thousands of pets have already found their forever homes through
            Maw Care. Here are some beautiful stories from our happy adopters.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="group relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            
            {/* Gradient Top */}
            <div className="h-2 w-full bg-gradient-to-r from-pri to-orange-400"></div>

            <div className="p-8 flex flex-col md:flex-row gap-8">
              
              {/* Image */}
              <div className="relative shrink-0">
                <img
                  className="w-full md:w-52 h-56 object-cover rounded-3xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6LDc7ILWvEAXLBsE6KeZ0_XwRmiI8u600cmf0OmwXTq8L47L8ND9pO7H2wd4sryUyr4GxNbHz2r1lOu8QG3yWhrQvTW-d9XOLlY84Izo1MU_6aGd67AQbOXNtxVjEjo-hTr9hZJzQoM71WRSde4LerMJ_x_GzhlFVwRlDr1_EG5c3hLTrFqpwZNy2S_wLtgBWQQHPW2o6WLtVj1_z5NPbqKgexiFZXWP8CUlaDxGg_BdBBzl3Qoiwfx24T-LlGDpBE-cI3abLagKh"
                  alt="Happy couple with adopted dog"
                />

                <div className="absolute -bottom-3 -right-3 bg-pri text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg">
                  <MdOutlinePets />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                
                {/* Stars */}
                <div className="flex items-center gap-1 text-yellow-400 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[22px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-on-surface-variant leading-relaxed text-lg italic mb-8">
                  “Adopting Max through Maw Care was the best decision we've
                  ever made. The process felt smooth, professional, and full of
                  genuine care for both pets and families.”
                </p>

                {/* User */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-pri/10 flex items-center justify-center">
                    <span className="font-bold text-pri text-lg">SJ</span>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-on-surface">
                      Sarah & James
                    </h4>

                    <p className="text-sm text-on-surface-variant">
                      Proud parents of Max 🐶
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white/70 backdrop-blur-xl border border-white/30 rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            
            <div className="h-2 w-full bg-gradient-to-r from-sec to-cyan-400"></div>

            <div className="p-8 flex flex-col md:flex-row gap-8">
              
              {/* Image */}
              <div className="relative shrink-0">
                <img
                  className="w-full md:w-52 h-56 object-cover rounded-3xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKukb4LMU4EMHScj4iOW5g9HkoXhWQYruSIehsvO3cgVcMu6tjRDDzK2jZbpjJ3FLQRrgAffx61Ce5HK1q-NGn7yZq_gLzDuI44SmGlGXmDqKWIVO5K3vbuiHd9-v2sGHfip3WY1zoq4Thncq1WwF8qeUjNWWGMpYA0OBGyiw07gAEDclD3NtnlXLDlhk-vxzsl8fO8VcmasjoLZczOQVT0xCUaOrkTJjlHDUbW_z_8XQ0esJWE3t8BPDZZdaARnjTg6hAspY-ZTMM"
                  alt="Woman with adopted kitten"
                />

                <div className="absolute -bottom-3 -right-3 bg-sec text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg">
                  <GrFavorite />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                
                {/* Stars */}
                <div className="flex items-center gap-1 text-yellow-400 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[22px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-on-surface-variant leading-relaxed text-lg italic mb-8">
                  “Maw Care truly cares about every pet and owner. Luna has
                  completely changed my life, and the support team made the
                  whole adoption journey stress-free.”
                </p>

                {/* User */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-sec/10 flex items-center justify-center">
                    <span className="font-bold text-sec text-lg">
                      EL
                    </span>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-on-surface">
                      Elena Rodriguez
                    </h4>

                    <p className="text-sm text-on-surface-variant">
                      Loving owner of Luna 🐱
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HappyCoustomer;