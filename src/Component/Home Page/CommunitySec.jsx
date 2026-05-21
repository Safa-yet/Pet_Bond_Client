import React from 'react';

const CommunitySec = () => {
    return (
        <div className='mx-auto container my-8'>
            <section className="py-24 bg-[#0f172a] relative overflow-hidden rounded-xl">

  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-pri/20 rounded-full blur-[120px]"></div>

  <div className="absolute bottom-0 right-0 w-96 h-96 bg-sec/20 rounded-full blur-[120px]"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-20">

      <span className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide mb-6 backdrop-blur-md border border-white/10">
        Making A Difference
      </span>

      <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
        Our Community Impact
      </h2>

      <p className="text-lg text-gray-300 leading-relaxed">
        Together with animal lovers, volunteers, and shelters,
        we are building a brighter future for pets everywhere.
      </p>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 text-center hover:-translate-y-2 hover:bg-white/10 transition-all duration-500">

        <h3 className="text-5xl font-black text-white mb-4">
          5K+
        </h3>

        <p className="text-gray-300 uppercase tracking-[0.2em] text-sm">
          Pets Rescued
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 text-center hover:-translate-y-2 hover:bg-white/10 transition-all duration-500">

        <h3 className="text-5xl font-black text-white mb-4">
          3.2K
        </h3>

        <p className="text-gray-300 uppercase tracking-[0.2em] text-sm">
          Happy Families
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 text-center hover:-translate-y-2 hover:bg-white/10 transition-all duration-500">

        <h3 className="text-5xl font-black text-white mb-4">
          120+
        </h3>

        <p className="text-gray-300 uppercase tracking-[0.2em] text-sm">
          Partner Shelters
        </p>
      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 text-center hover:-translate-y-2 hover:bg-white/10 transition-all duration-500">

        <h3 className="text-5xl font-black text-white mb-4">
          24/7
        </h3>

        <p className="text-gray-300 uppercase tracking-[0.2em] text-sm">
          Support Available
        </p>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default CommunitySec;