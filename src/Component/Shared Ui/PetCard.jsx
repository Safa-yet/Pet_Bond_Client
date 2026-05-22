import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiCake, BiMapPin } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { GiPawPrint } from "react-icons/gi";

const PetCard = ({ petInfo }) => {
  return (
    <div
      className="
        group overflow-hidden rounded-[30px]
        border border-gray-200/70 dark:border-white/10
        bg-white dark:bg-[#111827]
        shadow-sm dark:shadow-black/20
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={petInfo?.image}
          width={500}
          height={500}
          alt={petInfo?.petName}
          className="
            h-full w-full object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/80 via-black/20 to-transparent
          "
        />

        {/* Glow Effect */}
        <div
          className="
            absolute -right-10 -top-10
            h-40 w-40 rounded-full
            bg-[#ff6d33]/20 blur-3xl
          "
        />

        {/* Gender Badge */}
        <div className="absolute right-4 top-4 z-10">
          <span
            className="
              rounded-full
              border border-white/20
              bg-white/15 px-4 py-1.5
              text-xs font-semibold
              text-white backdrop-blur-xl
            "
          >
            {petInfo?.gender}
          </span>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-4 left-4 z-10">
          <h2 className="text-2xl font-extrabold text-white">
            {petInfo?.petName}
          </h2>

          <p className="text-sm text-gray-200">
            {petInfo?.breed || petInfo?.species}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-5 p-5">
        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3">
          {/* Age */}
          <div
            className="
              rounded-2xl
              border border-gray-100 dark:border-white/10
              bg-gray-50 dark:bg-[#1a2436]
              p-3
              transition
              hover:scale-[1.03]
            "
          >
            <div className="flex items-center gap-2">
              <BiCake
                size={18}
                className="text-[#ff6d33]"
              />

              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Age
                </p>

                <p className="text-sm font-bold text-gray-800 dark:text-white">
                  {petInfo?.age} Years
                </p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div
            className="
              rounded-2xl
              border border-gray-100 dark:border-white/10
              bg-gray-50 dark:bg-[#1a2436]
              p-3
              transition
              hover:scale-[1.03]
            "
          >
            <div className="flex items-center gap-2">
              <BiMapPin
                size={18}
                className="text-[#ff6d33]"
              />

              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Location
                </p>

                <p
                  className="
                    truncate text-sm
                    font-bold text-gray-800 dark:text-white
                  "
                >
                  {petInfo?.location}
                </p>
              </div>
            </div>
          </div>

          {/* Vaccination */}
          <div
            className="
              rounded-2xl
              border border-gray-100 dark:border-white/10
              bg-gray-50 dark:bg-[#1a2436]
              p-3
              transition
              hover:scale-[1.03]
            "
          >
            <div className="flex items-center gap-2">
              <BsShieldCheck
                size={18}
                className="text-[#22c55e]"
              />

              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Vaccinated
                </p>

                <p className="text-sm font-bold text-gray-800 dark:text-white">
                  {petInfo?.vaccinationStatus}
                </p>
              </div>
            </div>
          </div>

          {/* Fee */}
          <div
            className="
              rounded-2xl
              border border-gray-100 dark:border-white/10
              bg-gray-50 dark:bg-[#1a2436]
              p-3
              transition
              hover:scale-[1.03]
            "
          >
            <div className="flex items-center gap-2">
              <GiPawPrint
                size={18}
                className="text-[#ff6d33]"
              />

              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Fee
                </p>

                <p className="text-sm font-bold text-gray-800 dark:text-white">
                  ৳{petInfo?.adoptionFee}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          className="
            line-clamp-2 text-sm leading-relaxed
            text-gray-600 dark:text-gray-300
          "
        >
          {petInfo?.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <Link
            className="w-full"
            href={`/allpet/${petInfo?._id}`}
          >
            <Button
              className="
                h-12 w-full rounded-2xl
                bg-pri text-white
                font-semibold
                shadow-lg shadow-orange-500/20
                transition-all duration-300
                hover:scale-[1.03]
                hover:opacity-90
              "
            >
              View Details
            </Button>
          </Link>

          <Link
            className="w-full"
            href={`/allpet/${petInfo?._id}`}
          >
            <Button
              variant="ghost"
              className="
                h-12 w-full rounded-2xl
                border border-gray-200
                dark:border-white/10
                bg-white dark:bg-[#182233]
                text-gray-800 dark:text-white
                font-semibold
                transition-all duration-300
                hover:scale-[1.03]
                hover:bg-gray-100
                dark:hover:bg-[#22304a]
              "
            >
              Adopt
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PetCard;