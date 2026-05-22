"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

import {
  FaArrowRight,
  FaHeart,
  FaStar,
  FaPaw,
} from "react-icons/fa";

import {
  MdVolunteerActivism,
} from "react-icons/md";

import {
  CiPlay1,
} from "react-icons/ci";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <div className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-400/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-400/20 blur-[140px] rounded-full" />

      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-red-300/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* HERO */}
      <section className="relative py-20 lg:py-28 z-10">
        <div className="mx-auto px-4 md:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/70 dark:bg-white/5 backdrop-blur-2xl border border-white/20 px-5 py-2 rounded-full mb-8 shadow-xl"
            >
              <FaHeart className="text-pri" />

              <span className="uppercase tracking-[2px] text-xs md:text-sm font-bold">
                Trusted by 10k+ Families
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-[-3px] mb-8"
            >
              Give a New Life to a{" "}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Furry Friend
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg dark:text-shadow-white text-neutral max-w-xl leading-[1.9] mb-10"
            >
              Every paw has a story waiting for a happy ending. Connect
              with lovable pets ready to bring joy, comfort, and
              unconditional love into your life.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link href="/allpet">
                <Button
                  className="
                  group
                  bg-gradient-to-r from-orange-500 via-red-500 to-pink-500
                  text-white
                  text-lg
                  py-7
                  px-10
                  rounded-full
                  shadow-[0_20px_50px_rgba(255,115,0,0.35)]
                  hover:scale-105
                  transition-all
                  duration-500
                  border-0
                "
                >
                  Adopt a Pet

                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-all duration-300" />
                </Button>
              </Link>

              <Button
                className="
                bg-white/60
                dark:bg-white/5
                backdrop-blur-xl
                border
                border-white/20
                text-pri
                py-7
                px-10
                rounded-full
                hover:scale-105
                transition-all
                duration-500
                shadow-xl
              "
              >
                <CiPlay1 className="text-xl" />
                Success Stories
              </Button>
            </motion.div>

            {/* USERS + STATS */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="
              mt-16
              bg-white/70
              dark:bg-white/5
              backdrop-blur-2xl
              border border-white/20
              rounded-[28px]
              p-6
              shadow-2xl
              max-w-md
            "
            >
              <div className="flex items-center justify-between gap-6">
                {/* Avatars */}
                <div className="flex -space-x-4">
                  <Image
                    width={1000}
                    height={1000}
                    className="w-14 h-14 rounded-full border-4 border-white object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOH6JQ0KMHB_JJs_lcNAGQLEfeNn9s5hWxRut0MYDJLe-ShYYOiS2E60YYWeJbDCgxEnkvY9rtDOo4h9kO3m3-NtsGA7OBQlH4KcZFYhraACUUwEB4O1TdvbnlSr3woblOqCBMy4_GRVt8_ZyeQgNmLDFfAj9rqL78Ux_x9QmuuCPB5Mtr4cN1VH2yrJ92NYGgswuvB_qGEbRh5K1s4YPWOBjnKX-BYWaPhVdxUx8AmGPJzGuzKULWSzb86qkEtCBxD5n2K7r6G1-w"
                    alt="user"
                  />

                  <Image
                    width={1000}
                    height={1000}
                    className="w-14 h-14 rounded-full border-4 border-white object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFDmOU8GlMu0v8hLHwg87Uil49lmI4lGJIVfG11JAsbr1nzhAS7NOL3JPmgcwCffvD0oLKfaDNTToUEyU0qVVVKLEdnf_EFrECi5N7iuOdGGL1yjLLOoUoB4bl5Ku24jxdRYW7C8YbUXSxHNAx1A5Yyu4DxHVzLoshc7KZUyY3jz0ByJrFX11KniQuae9cFqzXKOkbja-yUsAsWWpXNTLRAFHUh1PARpPkZDBI-_fseOj0ErnWoXpJsscLv8m8_Di8dEDM0BAHoY3I"
                    alt="user"
                  />

                  <div className="w-14 h-14 rounded-full border-4 border-white bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center font-bold text-sm">
                    +13k
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-black text-lg">
                    Families adopted
                  </h3>

                  <p className="text-sm text-neutral">
                    in the last year alone
                  </p>
                </div>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  ["12K+", "Pets"],
                  ["98%", "Success"],
                  ["4.9★", "Rating"],
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/60 dark:bg-white/5 border border-white/20 rounded-2xl p-4 text-center"
                  >
                    <h4 className="font-black text-xl">
                      {item[0]}
                    </h4>

                    <p className="text-xs text-neutral">
                      {item[1]}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative h-[520px] lg:h-[700px] flex items-center justify-center"
          >
            {/* Gradient Ring */}
            <div className="absolute w-[85%] h-[85%] rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 blur-3xl opacity-20 animate-pulse" />

            {/* Floating Paw */}
            <FaPaw className="absolute top-10 left-10 text-[90px] text-orange-200/40 rotate-12" />

            {/* Main Floating Image */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="relative w-full h-full"
            >
              <Image
                width={1000}
                height={1000}
                className="
                absolute inset-0
                w-full
                h-full
                object-cover
                rounded-[60%_40%_30%_70%/60%_30%_70%_40%]
                shadow-[0_30px_80px_rgba(0,0,0,0.25)]
                ring-8
                ring-white/20
                z-20
              "
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO-GQUJVdie5ioEVU158tqvgxWECa2Dx8SxIBCPgrYDUPspXkMSgVPDCSW6hrw-PAJFBU72BEFbtiEvQwD6onlAOvot5OfbcrcmVb2Eu4h-f__xzOpjNuRyycT0ueQDvIURG-gqJtj8Amh8TifZgZGihX_WXp3tcgMC9XX13smO--XFA9Sjk4X8sRFSEo3yZ7ruuC-OMo3JQphJj5p0QIM175t2dhmsuA0GZyJK93zi3KC7gDsA8FekOU7SGunL-jHISX2WEz9sl7z"
                alt="pet"
              />

              {/* Floating Health Card */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                absolute
                top-4
                -right-4
                bg-white/70
                dark:bg-white/5
                backdrop-blur-2xl
                border border-white/20
                p-5
                rounded-3xl
                shadow-2xl
                z-30
                flex items-center gap-4
              "
              >
                <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <MdVolunteerActivism className="text-white text-2xl" />
                </div>

                <div>
                  <p className="font-black text-sm">
                    Health Check
                  </p>

                  <p className="text-xs text-neutral">
                    100% Certified
                  </p>
                </div>
              </motion.div>

              {/* Review Card */}
              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="
                absolute
                bottom-12
                -left-8
                bg-white/70
                dark:bg-white/5
                backdrop-blur-2xl
                border border-white/20
                p-6
                rounded-3xl
                shadow-2xl
                z-30
                max-w-[250px]
              "
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-pri" />
                  ))}
                </div>

                <p className="text-sm italic leading-relaxed text-neutral">
                  “Found my best friend here! The process was
                  smooth, emotional, and truly heartwarming.”
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div
        className={`relative py-6 overflow-hidden border-y transition-all duration-300 ${
          theme === "dark"
            ? "bg-white/[0.03] border-white/10"
            : "bg-pri/5 border-pri/10"
        }`}
      >
        {/* Gradient Fade */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-black to-transparent z-20" />

        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-black to-transparent z-20" />

        <Marquee
          speed={60}
          gradient={false}
          className="flex items-center"
        >
          {[
            "Find Your Best Friend",
            "Adopt • Love • Care",
            "Every Paw Deserves Love",
            "Give Pets a Happy Home",
            "Trusted Pet Adoption",
          ].map((text, index) => (
            <div
              key={index}
              className="mx-10 flex items-center gap-8"
            >
              <h2
                className="text-4xl md:text-6xl font-black uppercase tracking-wider whitespace-nowrap text-transparent"
                style={{
                  WebkitTextStroke:
                    theme === "dark"
                      ? "1.5px rgba(255,255,255,0.2)"
                      : "1.5px #A93700",
                }}
              >
                {text}
              </h2>

              <div className="w-3 h-3 rounded-full bg-pri" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;