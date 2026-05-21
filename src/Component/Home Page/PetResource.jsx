import React from 'react';

const PetResource = () => {
    return (
        <div>
            <section className="py-xl bg-surface-container-low">
  <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
    
    <div className="flex justify-between items-end mb-lg">
      <div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">
          Pet Care Resources
        </h2>

        <p className="text-on-surface-variant font-body-md">
          Expert advice for your new family member.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
      
      {/* Resource Card 1 */}
      <article className="group cursor-pointer">
        
        <div className="aspect-video rounded-2xl overflow-hidden mb-md shadow-sm">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuANFyImqwBJlQe4Lp22U9NRmY_HTn-KZKonzBaNH9zxUNYLTaWWRg-g6rFSvmbn4bt4pQ8rSzqXphmdcitMMi4c_NDM1SVrZrubjpvWhozMD8NCUKWRhqbuR-hMP4P85gs_s-riTrJ4DiYEWmWM1H80eBq_hO_bjRYD5asyfQhlJr9777-OZX6HvmC9gb6JLqibSpdVcNEMjkwQ6PdGxQ_OvEFZGXIUoL5diIVVrjyZKhCmESQiKmmXR_Trb9F4UCfDKjZE7zbQkA3G"
            alt="Pet nutrition guide"
          />
        </div>

        <h4 className="font-headline-sm text-headline-sm group-hover:text-primary transition-colors mb-xs">
          Essential Nutrition Guide
        </h4>

        <p className="text-on-surface-variant font-body-md line-clamp-2">
          Learn the basics of premium nutrition to keep your pet energetic and
          healthy.
        </p>
      </article>

      {/* Resource Card 2 */}
      <article className="group cursor-pointer">
        
        <div className="aspect-video rounded-2xl overflow-hidden mb-md shadow-sm">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDG8w1F3WDty_LTaonhHYtRz5JOnZ0jWlHAuMF2kFhALgGR2hPgU-k-Nw0qIaNEVzOG8nChMyuZHhE3hi-mTEElhDG_ra1yOFOWSduPJ0AE4u1A-33k4ekWdH6kEaaLVAM-Bq4ebIE-l0LVIJdvUvOOBR-jPUVIkGXArxYjw2kv7s2WjnEQ8-RWhor-VyUnYLOCXRuf27QKg6vrBotc3rVA58oVjLoFdIcPORvP_x9_5399rozXFqepbzpZ-zeKzdYPq7rf8yxpeDM"
            alt="Pet training basics"
          />
        </div>

        <h4 className="font-headline-sm text-headline-sm group-hover:text-primary transition-colors mb-xs">
          Positive Training Basics
        </h4>

        <p className="text-on-surface-variant font-body-md line-clamp-2">
          Build a strong bond through compassionate, evidence-based training
          methods.
        </p>
      </article>

      {/* Resource Card 3 */}
      <article className="group cursor-pointer">
        
        <div className="aspect-video rounded-2xl overflow-hidden mb-md shadow-sm">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXnhE80dUrJGtFCN46GlR91wl2IBkb1ngyRTT8x3xztATMHnVAF7kUAssw2p50_YhhKigZ9QSHDWPe02v0wfbrGtvFRoMlDTdRUWYIsqpRPBalg9-Z0Vmy6qQXaPhaSFbcRLaGlVu74I41RoQOZa5SjTAcEeCseUNw9mHW8yQQInF5ciEGt-E1bMLMM05eG1VinvYoKxs8bC6cfhcFKFSIF_MAu5SuEPwy_lgqQAy5Vkyd9bo8WqGLMVd-TYKWIN-ftp2Xb8fYYsJ0"
            alt="Safe home setup"
          />
        </div>

        <h4 className="font-headline-sm text-headline-sm group-hover:text-primary transition-colors mb-xs">
          Safe Home Setup
        </h4>

        <p className="text-on-surface-variant font-body-md line-clamp-2">
          Prepare your living space for a stress-free transition for your new
          furry friend.
        </p>
      </article>

      {/* Resource Card 4 */}
      <article className="group cursor-pointer">
        
        <div className="aspect-video rounded-2xl overflow-hidden mb-md shadow-sm">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0kEryogIfea4Vsqlg-YtavhMJkSqmcZ6Hfr5IAhqJIQhUq6EyAG_UEKMY1r8CqVjuJg-5Yu8RJ2wOpIBAJSGh82uxfn2pu_4l7oe8Q0I56nQ-LflRWPvaOd53TmrcjzHdx4SA6ykVUcK-yGyNVljxbEFbOBQMx3zjwg7paYK004zB3HGBcD0juRunwbNrBrRAQb-gZMGgrAQVaFGTEOdUNOwqMAPBTDnNY4PuJQyFgGDmCCvwjnmdwQ-Rm3NOj0natLrsAeFu2bwc"
            alt="Pet grooming guide"
          />
        </div>

        <h4 className="font-headline-sm text-headline-sm group-hover:text-primary transition-colors mb-xs">
          Grooming & Hygiene
        </h4>

        <p className="text-on-surface-variant font-body-md line-clamp-2">
          Professional tips on maintaining your pet's coat and overall wellness
          at home.
        </p>
      </article>
    </div>
  </div>
</section>
        </div>
    );
};

export default PetResource;