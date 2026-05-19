import React from 'react';

const PetCard = () => {
    return (
        <div>
           {/* Featured Pets */}
        <section className="py-xl max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex justify-between items-end mb-lg">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">
                Featured Friends
              </h2>

              <p className="text-on-surface-variant font-body-md">
                Discover pets waiting for a home like yours.
              </p>
            </div>

            <button className="text-primary font-bold flex items-center gap-xs hover:gap-sm transition-all group">
              View All Pets
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {/* Card */}
            <div className="group relative bg-white rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR1rZNlOmHMR9IdAoH4BF-D5Xh4w0hIAOyRDO-XCS3MiYTfmhfRxqoHEVMvQwx13PLcS36zFSEBSAxI5z6LcHljxVCKh3YGIT09HvPxfHiYD-VUklpyv0-ZjCHsI0k2lU4C-gyn75QCR2rNz_qlfaCMyN_JpZxCpvIpHXnmfitOEQMGv1f8AdHp4HlWhvEB_15z3HmxOwQOTG_10XiA2s0Q_VQxGWYcjet_JM_LIO0Iealb7VT61krO7aL5CxSrifLQwBCuNIU1MdA"
                  alt="Buddy"
                />

                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/70 backdrop-blur-md text-on-surface text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full">
                    Available
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                    Buddy
                  </h3>

                  <div className="flex items-center gap-1 text-on-surface-variant/70 text-[12px] font-medium uppercase tracking-wider">
                    <span className="material-symbols-outlined text-sm">
                      location_on
                    </span>

                    Austin, TX
                  </div>
                </div>

                <p className="text-on-surface-variant font-medium text-sm mb-6">
                  Beagle • 2 Years • Male
                </p>

                <div className="mt-auto">
                  <button className="w-full bg-surface-container-low group-hover:bg-primary text-on-surface group-hover:text-on-primary py-4 rounded-2xl font-bold transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    );
};

export default PetCard;