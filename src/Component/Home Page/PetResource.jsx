import React from "react";

const resources = [
  {
    title: "Essential Nutrition Guide",
    desc: "Learn the basics of premium nutrition to keep your pet energetic and healthy.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuANFyImqwBJlQe4Lp22U9NRmY_HTn-KZKonzBaNH9zxUNYLTaWWRg-g6rFSvmbn4bt4pQ8rSzqXphmdcitMMi4c_NDM1SVrZrubjpvWhozMD8NCUKWRhqbuR-hMP4P85gs_s-riTrJ4DiYEWmWM1H80eBq_hO_bjRYD5asyfQhlJr9777-OZX6HvmC9gb6JLqibSpdVcNEMjkwQ6PdGxQ_OvEFZGXIUoL5diIVVrjyZKhCmESQiKmmXR_Trb9F4UCfDKjZE7zbQkA3G",
  },
  {
    title: "Positive Training Basics",
    desc: "Build a strong bond through compassionate, evidence-based training methods.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDG8w1F3WDty_LTaonhHYtRz5JOnZ0jWlHAuMF2kFhALgGR2hPgU-k-Nw0qIaNEVzOG8nChMyuZHhE3hi-mTEElhDG_ra1yOFOWSduPJ0AE4u1A-33k4ekWdH6kEaaLVAM-Bq4ebIE-l0LVIJdvUvOOBR-jPUVIkGXArxYjw2kv7s2WjnEQ8-RWhor-VyUnYLOCXRuf27QKg6vrBotc3rVA58oVjLoFdIcPORvP_x9_5399rozXFqepbzpZ-zeKzdYPq7rf8yxpeDM",
  },
  {
    title: "Safe Home Setup",
    desc: "Prepare your living space for a stress-free transition for your new furry friend.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXnhE80dUrJGtFCN46GlR91wl2IBkb1ngyRTT8x3xztATMHnVAF7kUAssw2p50_YhhKigZ9QSHDWPe02v0wfbrGtvFRoMlDTdRUWYIsqpRPBalg9-Z0Vmy6qQXaPhaSFbcRLaGlVu74I41RoQOZa5SjTAcEeCseUNw9mHW8yQQInF5ciEGt-E1bMLMM05eG1VinvYoKxs8bC6cfhcFKFSIF_MAu5SuEPwy_lgqQAy5Vkyd9bo8WqGLMVd-TYKWIN-ftp2Xb8fYYsJ0",
  },
  {
    title: "Grooming & Hygiene",
    desc: "Professional tips on maintaining your pet's coat and overall wellness at home.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0kEryogIfea4Vsqlg-YtavhMJkSqmcZ6Hfr5IAhqJIQhUq6EyAG_UEKMY1r8CqVjuJg-5Yu8RJ2wOpIBAJSGh82uxfn2pu_4l7oe8Q0I56nQ-LflRWPvaOd53TmrcjzHdx4SA6ykVUcK-yGyNVljxbEFbOBQMx3zjwg7paYK004zB3HGBcD0juRunwbNrBrRAQb-gZMGgrAQVaFGTEOdUNOwqMAPBTDnNY4PuJQyFgGDmCCvwjnmdwQ-Rm3NOj0natLrsAeFu2bwc",
  },
];

const PetResource = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-surface-container-low to-surface container mx-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface ">
              Pet Care Resources
            </h2>
            <p className="text-on-surface-variant mt-2">
              Expert advice for your new family member.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((item, idx) => (
            <article
              key={idx}
              className="group bg-white  dark:bg-gray-700 rounded-3xl overflow-hidden border border-surface-variant/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h4 className="text-lg  font-semibold text-on-surface group-hover:text-pri transition-colors">
                  {item.title}
                </h4>

                <p className="text-sm text-on-surface-variant mt-2 line-clamp-2">
                  {item.desc}
                </p>

                <button className="mt-4 text-pri font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  Read more →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetResource;