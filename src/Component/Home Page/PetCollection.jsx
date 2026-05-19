import React from 'react';

const PetCollection = () => {
    return (
        <div>
            <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">
                Our Pet Collection
              </h2>

              <p className="text-on-surface-variant max-w-2xl mx-auto">
                Meet the wonderful personalities waiting to become part of your
                family.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Spanish Bulldog",
                  type: "Puppy",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuA4dANb6Gg4x7VQ5_8ZUjGzNt8E3N0RzGB1zKidHQNf4gssqkMm-C4dPDtjfzci4vuanq6mznj8aIzx4fhs7l5l5PV1GrGwj5IoEpoGQarMAa_jL1sTPViHek0aV2RCMT-TU5HlRM9cU7uis7-uCtq0ylF3-sHUbkkvEG1GFNf5-7Tm7MgMChfL_IRyV1AOMH8Odsh2orwkSEBQtcBxJnztcW53weKfvveISO_9yEDnBrfifmDLYYIIuEkTU32YzDvSUGukkRQCq04U",
                },
                {
                  name: "African Macaw",
                  type: "Adult",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuBvOJLGWIxEsxferrQPmh9Pl2dvuKqzfDvL7WTuaKz-D_zGMcv0tM69AzrLtYduRx7l6nDZCHE7_M3bXsxJFBxCEaYcwAJFnwWcWV2lQmiCloxViMISlUEgj__2rtPRD0_xKZbHveVsRPUzL8Sh0OePekb9AGMZxGhO01NPUMNVaF1OnCL_357pGfFuTE03oIW4_z-Xa0fo0DUXpDZisQcsYdjHHcJfIDyzhJJBZ8BwRUEQG_PPm6oFE-UyLfDcTM0sgrZTF_bxNZC6",
                },
                {
                  name: "Snowy Malt",
                  type: "Senior",
                  image:
                    "https://lh3.googleusercontent.com/aida-public/AB6AXuAPD7Fn5DQC_qAmklpi4bH8aU7km76V5BKWD2R2q79FEaCdWBXnBpradFqvaBZHp6Syw9N0Q2QmeF3OamWFwY-a5RBIuscxSgYas5XRe4izLR7UrlIM_F1dLldCWf-sKOX2Mi3dg-T1WpQuzRnfBwbmJmCIIYGA0sJ2ieft5zSsMoRRuzFyPB0oC5C0ERQhKORDzzXpdjWj-My5e8L9uUQHWCUpyb1zBXx9lRUsrOtX6gnGSjas2R89obcIRH-FVzjiv9QUfvY8yxeV",
                },
              ].map((pet, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-surface-variant group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={pet.image}
                      alt={pet.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold">{pet.name}</h3>

                      <span className="bg-tertiary-fixed px-2 py-1 rounded text-xs font-bold uppercase">
                        {pet.type}
                      </span>
                    </div>

                    <button className="w-full py-3 bg-surface-container-high text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        </div>
    );
};

export default PetCollection;