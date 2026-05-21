import React from 'react';

const ServiceSec = () => {
    return (
        <div>
              {/* Services */}
      <section className="py-20 bg-[#eef5f7]">
        <div className="max-w-7xl mx-auto px-4 md:px-10 grid md:grid-cols-3 gap-8">
          {/* Card */}
          <div className="bg-white p-8 rounded-[30px] shadow hover:-translate-y-2 transition">
            <div className="w-16 h-16 rounded-2xl bg-[#ffdbcf] flex items-center justify-center text-3xl mb-6">
              🩺
            </div>

            <h3 className="text-2xl font-bold mb-3">Wellness Care</h3>

            <p className="text-gray-600 leading-relaxed">
              Comprehensive health checks and vaccinations for every pet.
            </p>
          </div>

          <div className="bg-[#a93700] text-white p-8 rounded-[30px] shadow hover:-translate-y-2 transition">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl mb-6">
              🧠
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Behavioral Advice
            </h3>

            <p className="text-white/80 leading-relaxed">
              Expert guidance to help you understand your pet.
            </p>
          </div>

          <div className="bg-[#0060ac] text-white p-8 rounded-[30px] shadow hover:-translate-y-2 transition">
            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl mb-6">
              🍖
            </div>

            <h3 className="text-2xl font-bold mb-3">Nutrition Plans</h3>

            <p className="text-white/80 leading-relaxed">
              Tailored food plans to keep your furry friend healthy.
            </p>
          </div>
        </div>
      </section>

        </div>
    );
};

export default ServiceSec;