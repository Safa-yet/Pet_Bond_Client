import Image from 'next/image';
import React from 'react';
import { CiPlay1 } from 'react-icons/ci';
import { FaArrowRight, FaHeart } from 'react-icons/fa';
import { FaStar } from "react-icons/fa";
import { MdOutlineVolunteerActivism, MdVolunteerActivism } from 'react-icons/md';


const Hero = () => {
    return (
        <div>
             <section className="relative overflow-hidden py-20 lg:py-24">
          <div className=" mx-auto px-4 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left */}
            <div className="relative z-10 ">
              <div className="inline-flex bg-pri/20 items-center gap-1 bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full mb-6">
               <FaHeart />


                <span className="uppercase tracking-wider text-sm font-semibold">
                  Trusted by 10k+ Families
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Give a New Life to a{" "}
                <span className="text-pri">Furry Friend</span>
              </h1>

              <p className="text-lg text-neutral mb-10 max-w-lg leading-relaxed">
                Every paw has a story waiting for a happy ending. Connect with
                hundreds of lovable pets ready to bring joy and companionship
                to your home today.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-pri text-lg text-white py-4 px-8 rounded-full hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2">
                  Adopt a Pet
                  <FaArrowRight />

                </button>

                <button className="border-2 border-secondary text-secondary py-4 px-8 rounded-full hover:bg-secondary/5 transition-all flex items-center justify-center gap-2">
                 <CiPlay1 />


                  Success Stories
                </button>
              </div>

              {/* Users */}
              <div className="mt-16 flex items-center gap-6 p-6 bg-white rounded-2xl border border-surface-variant max-w-sm">
                <div className="flex -space-x-4">
                  <Image
                  width={1000}
                  height={1000}
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOH6JQ0KMHB_JJs_lcNAGQLEfeNn9s5hWxRut0MYDJLe-ShYYOiS2E60YYWeJbDCgxEnkvY9rtDOo4h9kO3m3-NtsGA7OBQlH4KcZFYhraACUUwEB4O1TdvbnlSr3woblOqCBMy4_GRVt8_ZyeQgNmLDFfAj9rqL78Ux_x9QmuuCPB5Mtr4cN1VH2yrJ92NYGgswuvB_qGEbRh5K1s4YPWOBjnKX-BYWaPhVdxUx8AmGPJzGuzKULWSzb86qkEtCBxD5n2K7r6G1-w"
                    alt="user"
                  />

                   <Image
                  width={1000}
                  height={1000}
                    className="w-12 h-12 rounded-full border-2 border-white object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFDmOU8GlMu0v8hLHwg87Uil49lmI4lGJIVfG11JAsbr1nzhAS7NOL3JPmgcwCffvD0oLKfaDNTToUEyU0qVVVKLEdnf_EFrECi5N7iuOdGGL1yjLLOoUoB4bl5Ku24jxdRYW7C8YbUXSxHNAx1A5Yyu4DxHVzLoshc7KZUyY3jz0ByJrFX11KniQuae9cFqzXKOkbja-yUsAsWWpXNTLRAFHUh1PARpPkZDBI-_fseOj0ErnWoXpJsscLv8m8_Di8dEDM0BAHoY3I"
                    alt="user"
                  />

                  <div className="w-12 h-12 rounded-full border-2 border-white bg-secondary-container flex items-center justify-center font-bold text-xs">
                    +13k
                  </div>
                </div>

                <div>
                  <p className="font-semibold">Families adopted</p>
                  <p className="text-sm text-on-surface-variant">
                    in the last year alone
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="relative h-[500px] lg:h-[600px] flex items-center justify-center">
              <div className="absolute inset-0 bg-orange-100 opacity-40 rounded-full scale-125"></div>

              <div className="relative w-full h-full">
                 <Image
                  width={1000}
                  height={1000}
                  className="absolute inset-0 w-full h-full object-cover rounded-[60%_40%_30%_70%/60%_30%_70%_40%] shadow-2xl z-20"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO-GQUJVdie5ioEVU158tqvgxWECa2Dx8SxIBCPgrYDUPspXkMSgVPDCSW6hrw-PAJFBU72BEFbtiEvQwD6onlAOvot5OfbcrcmVb2Eu4h-f__xzOpjNuRyycT0ueQDvIURG-gqJtj8Amh8TifZgZGihX_WXp3tcgMC9XX13smO--XFA9Sjk4X8sRFSEo3yZ7ruuC-OMo3JQphJj5p0QIM175t2dhmsuA0GZyJK93zi3KC7gDsA8FekOU7SGunL-jHISX2WEz9sl7z"
                  alt="cat"
                />

                {/* Floating Card */}
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl z-30 flex items-center gap-4">
                  <div className="w-12 h-12  bg-orange-400 rounded-full flex items-center justify-center">
<MdVolunteerActivism  className='text-white'/>

                  </div>

                  <div>
                    <p className="font-bold text-sm">Health Check</p>
                    <p className="text-xs text-on-surface-variant">
                      100% Certified
                    </p>
                  </div>
                </div>

                {/* Review */}
                <div className="absolute bottom-12 -left-8 bg-white p-5 rounded-2xl shadow-2xl z-30 max-w-[200px]">
                  <div className="flex items-center gap-1 text-primary mb-2">
                    {[...Array(5)].map((_, i) => (
                     <FaStar key={i} className='text-pri' />

                    ))}
                  </div>

                  <p className="text-xs italic">
                    "Found my best friend here! The process was so easy and
                    heartwarming."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
            
            
        </div>
    );
};

export default Hero;