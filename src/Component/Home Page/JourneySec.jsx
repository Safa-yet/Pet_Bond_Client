import React from 'react';

const JourneySec = () => {
    return (
        <div className='mx-auto container'>
            <section className="py-24 bg-gradient-to-b from-white to-orange-50/40 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-20">

      <span className="inline-flex items-center gap-2 bg-pri/10 text-pri px-5 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">
        Simple & Transparent
      </span>

      <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
        Your Adoption Journey
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed">
        Bringing home your new furry family member should feel joyful,
        exciting, and stress-free.
      </p>
    </div>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Step 1 */}
      <div className="group relative bg-white rounded-[32px] p-8 shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2">

        <div className="absolute top-0 right-0 w-32 h-32 bg-pri/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        <div className="relative z-10">

          <div className="w-16 h-16 rounded-2xl bg-pri text-white flex items-center justify-center text-2xl font-black shadow-lg mb-6">
            1
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Discover Pets
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Explore hundreds of adorable pets with verified medical records,
            personality insights, and lifestyle compatibility.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="group relative bg-white rounded-[32px] p-8 shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2">

        <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        <div className="relative z-10">

          <div className="w-16 h-16 rounded-2xl bg-secondary text-white flex items-center justify-center text-2xl font-black shadow-lg mb-6">
            2
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Submit Request
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Complete a quick adoption form so we can understand your home,
            lifestyle, and ideal pet companion.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="group relative bg-white rounded-[32px] p-8 shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2">

        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        <div className="relative z-10">

          <div className="w-16 h-16 rounded-2xl bg-pink-500 text-white flex items-center justify-center text-2xl font-black shadow-lg mb-6">
            3
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Meet & Bond
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Schedule a meet-up and spend quality time with your future furry
            friend before finalizing adoption.
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="group relative bg-white rounded-[32px] p-8 shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2">

        <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

        <div className="relative z-10">

          <div className="w-16 h-16 rounded-2xl bg-green-500 text-white flex items-center justify-center text-2xl font-black shadow-lg mb-6">
            4
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Welcome Home
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Finalize the process and begin a lifetime of love, happiness,
            cuddles, and unforgettable memories.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default JourneySec;