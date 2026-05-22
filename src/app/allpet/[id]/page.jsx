
import AdoptForm from "@/Component/Shared Ui/AdoptForm";
import { auth } from "@/lib/auth";
import { getSingleApi } from "@/lib/CallApi";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import {
  FaMapMarkerAlt,
  FaVenusMars,
  FaBirthdayCake,
  FaDog,
  FaHeart,
  FaShieldAlt,
  FaSyringe,
  FaPaw,
} from "react-icons/fa";

import { MdPayments, MdVerified } from "react-icons/md";
import { toast } from "react-toastify";

export default async function PetDetailsPage({ params }) {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  console.log(user, "adopt request");
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const { id } = await params;

  const pet = await getSingleApi(id, token);
  console.log("details", pet);

  const adoptRequest = async (prevState, formData) => {
  "use server";

  const fromInfo = Object.fromEntries(formData.entries());

  const requestInfo = {
    ...fromInfo,
    petId: pet?._id,
    ownerEmail: pet?.ownerEmail,
    requesterEmail: user?.email,
    requesterName: user?.name,
    status: "pending",
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/adoption-request`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },

      body: JSON.stringify(requestInfo),
    },
  );

  const data = await res.json();

  if (res.ok) {
    return {
      success: true,
      message: "Adoption request sent successfully 🐾",
    };
  }

  return {
    success: false,
    message: data?.message || "Something went wrong",
  };
};

  // const {petName,age,breed, description,gender,healthStatus,image,vaccinationStatus,_id,email,adoptationFee}= pet;

  return (
    <div className="min-h-screen bg-[#f4fafd] text-[#161d1f]">
      <section className="relative overflow-hidden py-20">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[#f7fbff]" />

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#ffb38a]/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#8ec5ff]/20 blur-3xl" />

        {/* GRID PATTERN */}
        <div
          className="
      absolute inset-0 opacity-[0.03]
      [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
      [background-size:60px_60px]
    "
        />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* ================= LEFT CONTENT ================= */}
            <div>
              {/* BADGE */}
              <div
                className={`
    inline-flex items-center gap-3
    rounded-full border px-5 py-3
    shadow-lg backdrop-blur-xl
    ${
      pet?.adopted
        ? "border-red-200 bg-red-50/80"
        : "border-green-200 bg-green-50/80"
    }
  `}
              >
                {/* ICON */}
                <div
                  className={`
      flex h-10 w-10
      items-center justify-center
      rounded-full text-white
      ${
        pet?.adopted
          ? "bg-gradient-to-r from-red-500 to-orange-500"
          : "bg-gradient-to-r from-green-500 to-emerald-500"
      }
    `}
                >
                  <MdVerified className="text-lg" />
                </div>

                {/* TEXT */}
                <span
                  className={`
      font-bold
      ${pet?.adopted ? "text-red-600" : "text-green-700"}
    `}
                >
                  {pet?.adopted ? "Already Adopted" : "Available For Adoption"}
                </span>
              </div>
              {/* HEADING */}
              <h1
                className="
            mt-8 text-5xl
            font-black leading-[1.05]
            tracking-[-2px]
            text-[#161d1f]
            md:text-7xl
          "
              >
                Meet{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#812800]">
                    {pet?.petName}
                  </span>

                  <span
                    className="
                absolute bottom-2 left-0
                h-4 w-full
                rounded-full
                bg-[#ffb38a]/40
              "
                  />
                </span>
              </h1>

              <h2
                className="
            mt-3 text-2xl
            font-bold text-[#5d6669]
            md:text-3xl
          "
              >
                {pet?.breed || "Golden Retriever"}
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
            mt-8 max-w-2xl
            text-lg leading-relaxed
            text-[#5d6669]
          "
              >
                {pet?.description ||
                  "Meet your future best friend. A loving, playful, and caring pet looking for a forever home filled with warmth and happiness."}
              </p>

              {/* INFO CARDS */}
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {/* LOCATION */}
                <div
                  className="
              group rounded-[28px]
              border border-white/40
              bg-white/70
              p-5
              shadow-lg
              backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-2
            "
                >
                  <div
                    className="
                mb-4 flex h-14 w-14
                items-center justify-center
                rounded-2xl
                bg-[#fff4ef]
                text-[#812800]
              "
                  >
                    <FaMapMarkerAlt className="text-2xl" />
                  </div>

                  <p className="text-sm text-gray-500">Location</p>

                  <h3 className="mt-1 font-black text-[#161d1f]">
                    {pet?.location || "Dhaka"}
                  </h3>
                </div>

                {/* AGE */}
                <div
                  className="
              group rounded-[28px]
              border border-white/40
              bg-white/70
              p-5
              shadow-lg
              backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-2
            "
                >
                  <div
                    className="
                mb-4 flex h-14 w-14
                items-center justify-center
                rounded-2xl
                bg-[#fff4ef]
                text-[#812800]
              "
                  >
                    <FaBirthdayCake className="text-2xl" />
                  </div>

                  <p className="text-sm text-gray-500">Age</p>

                  <h3 className="mt-1 font-black text-[#161d1f]">
                    {pet?.age || "2 Years"}
                  </h3>
                </div>

                {/* GENDER */}
                <div
                  className="
              group rounded-[28px]
              border border-white/40
              bg-white/70
              p-5
              shadow-lg
              backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-2
            "
                >
                  <div
                    className="
                mb-4 flex h-14 w-14
                items-center justify-center
                rounded-2xl
                bg-[#fff4ef]
                text-[#812800]
              "
                  >
                    <FaVenusMars className="text-2xl" />
                  </div>

                  <p className="text-sm text-gray-500">Gender</p>

                  <h3 className="mt-1 font-black text-[#161d1f]">
                    {pet?.gender || "Female"}
                  </h3>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="mt-12 flex flex-wrap gap-5">
                <button
                  className="
              group relative overflow-hidden
              rounded-full
              bg-gradient-to-r
              from-[#812800]
              to-[#b53b00]
              px-9 py-5
              text-lg font-bold
              text-white
              shadow-[0_15px_40px_rgba(129,40,0,0.25)]
              transition-all duration-300
              hover:scale-105
            "
                >
                  <span className="relative z-10">Adopt Now</span>

                  <div
                    className="
                absolute inset-0
                translate-y-full
                bg-white/10
                transition-transform duration-500
                group-hover:translate-y-0
              "
                  />
                </button>

                <button
                  className="
              rounded-full
              border border-[#812800]/10
              bg-white/80
              px-9 py-5
              text-lg font-bold
              text-[#812800]
              shadow-lg
              backdrop-blur-xl
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-[#fff4ef]
            "
                >
                  Save Pet
                </button>
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="relative">
              {/* GLOW */}
              <div className="absolute -left-10 top-10 h-52 w-52 rounded-full bg-[#ffb38a]/30 blur-3xl" />

              <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#8ec5ff]/30 blur-3xl" />

              {/* IMAGE CARD */}
              <div
                className="
            relative overflow-hidden
            rounded-[40px]
            border border-white/40
            bg-white/40
            p-3
            shadow-[0_20px_80px_rgba(0,0,0,0.12)]
            backdrop-blur-2xl
          "
              >
                {/* IMAGE */}
                <div className="relative h-[400px] overflow-hidden rounded-[32px] md:h-[650px]">
                  <Image
                    src={
                      pet?.image ||
                      "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
                    }
                    alt={pet?.petName || "Pet"}
                    fill
                    className="
                object-cover
                transition duration-700
                hover:scale-110
              "
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* FLOATING FEE CARD */}
                <div
                  className="
              absolute bottom-8 left-8
              rounded-[28px]
              border border-white/20
              bg-white/80
              p-5
              shadow-2xl
              backdrop-blur-xl
            "
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="
                  flex h-16 w-16
                  items-center justify-center
                  rounded-2xl
                  bg-gradient-to-r
                  from-[#812800]
                  to-[#b53b00]
                  text-white shadow-lg
                "
                    >
                      <FaHeart className="text-2xl" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Adoption Fee</p>

                      <h3 className="text-3xl font-black text-[#812800]">
                        ${pet?.adoptionFee || 250}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* FLOAT BADGE */}
                <div
                  className="
              absolute right-8 top-8
              rounded-full
              bg-white/80
              px-5 py-3
              text-sm font-bold
              text-[#161d1f]
              shadow-lg
              backdrop-blur-xl
            "
                >
                  🐾 Loving Companion
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8">
        {/* Background Blur */}
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#ffb38a]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#8ec5ff]/20 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-12">
          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-10 lg:col-span-8">
            {/* QUICK STATS */}
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {[
                {
                  icon: <FaDog />,
                  title: "Breed",
                  value: pet?.breed || "Golden",
                },
                {
                  icon: <FaBirthdayCake />,
                  title: "Age",
                  value: pet?.age || "2 Years",
                },
                {
                  icon: <FaVenusMars />,
                  title: "Gender",
                  value: pet?.gender || "Female",
                },
                {
                  icon: <MdPayments />,
                  title: "Fee",
                  value: `$${pet?.adoptionFee || 250}`,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
              group relative overflow-hidden
              rounded-[32px]
              border border-white/40
              bg-white/70
              p-6
              shadow-[0_10px_40px_rgba(0,0,0,0.06)]
              backdrop-blur-xl
              transition-all duration-500
              hover:-translate-y-2
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            "
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#812800]/10 blur-2xl" />

                  <div
                    className="
                mb-5 flex h-16 w-16
                items-center justify-center
                rounded-3xl
                bg-gradient-to-br
                from-[#812800]
                to-[#b53b00]
                text-2xl text-white
                shadow-lg
              "
                  >
                    {item.icon}
                  </div>

                  <p className="text-sm font-medium text-gray-500">
                    {item.title}
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-[#161d1f]">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>

            {/* HEALTH INFO */}
            <div
              className="
          relative overflow-hidden
          rounded-[36px]
          border border-white/40
          bg-white/70
          p-8
          shadow-[0_10px_40px_rgba(0,0,0,0.06)]
          backdrop-blur-xl
        "
            >
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#812800]/5 blur-3xl" />

              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-4">
                  <div
                    className="
                flex h-16 w-16
                items-center justify-center
                rounded-3xl
                bg-gradient-to-r
                from-[#812800]
                to-[#b53b00]
                text-white shadow-lg
              "
                  >
                    <FaShieldAlt className="text-2xl" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Verified Health</p>

                    <h2 className="text-3xl font-black text-[#161d1f]">
                      Health Information
                    </h2>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {[
                    {
                      label: "Vaccinated",
                      icon: <FaSyringe />,
                    },
                    {
                      label: "Microchipped",
                      icon: <FaShieldAlt />,
                    },
                    {
                      label: "Friendly",
                      icon: <FaHeart />,
                    },
                    {
                      label: "Healthy",
                      icon: <FaPaw />,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="
                  flex items-center gap-3
                  rounded-full
                  border border-[#812800]/10
                  bg-[#fff4ef]
                  px-5 py-3
                  font-semibold text-[#211a16]
                  transition-all duration-300
                  hover:scale-105
                "
                    >
                      <span className="text-[#812800]">{item.icon}</span>

                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ABOUT */}
            <div
              className="
          relative overflow-hidden
          rounded-[36px]
          border border-white/40
          bg-white/70
          p-8 md:p-10
          shadow-[0_10px_40px_rgba(0,0,0,0.06)]
          backdrop-blur-xl
        "
            >
              <div className="absolute -bottom-10 -right-10 h-52 w-52 rounded-full bg-[#ffb38a]/10 blur-3xl" />

              <div className="relative z-10">
                <span
                  className="
              inline-flex rounded-full
              bg-[#fff4ef]
              px-4 py-2
              text-sm font-bold
              uppercase tracking-wider
              text-[#812800]
            "
                >
                  About Pet
                </span>

                <h2 className="mt-6 text-4xl font-black text-[#161d1f]">
                  Meet {pet?.petName || "Luna"}
                </h2>

                <div className="mt-6 space-y-5 text-lg leading-relaxed text-[#5d6669]">
                  <p>
                    {pet?.description ||
                      "This adorable pet is full of love, energy, and affection. Perfect for families, individuals, or anyone looking for a loyal companion."}
                  </p>

                  <p>
                    They enjoy outdoor adventures, playful activities, and warm
                    cuddles. Looking for a forever home filled with love and
                    happiness.
                  </p>
                </div>
              </div>
            </div>

            {/* LOCATION */}
            <div className="relative overflow-hidden rounded-[40px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#812800] via-[#9b3300] to-[#0060ab]" />

              <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-white/10 blur-3xl" />

              <div
                className="
            relative flex flex-col gap-8
            p-8 md:flex-row
            md:items-center
            md:justify-between
          "
              >
                <div>
                  <p className="mb-3 text-white/70">Current Location</p>

                  <h3 className="text-3xl md:text-5xl font-black text-white">
                    {pet?.location || "Dhaka, Bangladesh"}
                  </h3>
                </div>

                <div
                  className="
              flex h-28 w-28
              items-center justify-center
              rounded-[32px]
              border border-white/10
              bg-white/10
              backdrop-blur-xl
            "
                >
                  <FaMapMarkerAlt className="text-5xl text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="lg:col-span-4">
            {/* OWNER RESTRICTION */}
            {user?.email === pet?.ownerEmail ? (
              <div
                className="
            sticky top-24
            overflow-hidden
            rounded-[36px]
            border border-red-100
            bg-gradient-to-br
            from-red-50
            via-white
            to-orange-50
            p-8
            shadow-[0_20px_60px_rgba(255,0,0,0.08)]
          "
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-300/20 blur-3xl" />

                <div className="relative z-10">
                  <div
                    className="
                flex h-20 w-20
                items-center justify-center
                rounded-[28px]
                bg-gradient-to-r
                from-red-500
                to-orange-500
                text-white shadow-xl
              "
                  >
                    <FaHeart className="text-3xl" />
                  </div>

                  <span
                    className="
                mt-6 inline-flex
                rounded-full bg-red-100
                px-4 py-2
                text-sm font-bold
                uppercase tracking-wider
                text-red-600
              "
                  >
                    Restricted Action
                  </span>

                  <h2 className="mt-5 text-4xl font-black text-[#161d1f]">
                    Own Pet Detected
                  </h2>

                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    You cannot submit an adoption request for your own pet
                    listing.
                  </p>
                </div>
              </div>
            ) : pet?.adopted ? (
              <div
                className="
            sticky top-24
            overflow-hidden
            rounded-[36px]
            border border-red-100
            bg-gradient-to-br
            from-red-50
            via-white
            to-orange-50
            p-10
            shadow-[0_20px_60px_rgba(255,0,0,0.08)]
          "
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-300/20 blur-3xl" />

                <div className="text-center">
                  <div
                    className="
                mx-auto flex h-24 w-24
                items-center justify-center
                rounded-[30px]
                bg-gradient-to-r
                from-red-500
                to-orange-500
                text-white shadow-xl
              "
                  >
                    <FaHeart className="text-4xl" />
                  </div>

                  <h2 className="mt-8 text-4xl font-black text-[#161d1f]">
                    Already Adopted
                  </h2>

                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    This adorable pet already found a forever loving home 🐾
                  </p>
                </div>
              </div>
            ) : (
              <aside className="sticky top-24">
                <div
                  className="
              rounded-[36px]
              border border-white/40
              bg-white/80
              p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              backdrop-blur-xl
            "
                >
                  {/* FORM HEADER */}
                  <div className="mb-8 flex items-center gap-4">
                    <div
                      className="
                  flex h-16 w-16
                  items-center justify-center
                  rounded-3xl
                  bg-gradient-to-r
                  from-[#812800]
                  to-[#b53b00]
                  text-white shadow-xl
                "
                    >
                      <FaHeart className="text-2xl" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Ready to adopt?</p>

                      <h2 className="text-3xl font-black text-[#161d1f]">
                        Send Request
                      </h2>
                    </div>
                  </div>

                  {/* FORM */}
                 <AdoptForm
  adoptRequest={adoptRequest}
  pet={pet}
  user={user}
/>

                  {/* POLICY */}
                  <div className="mt-8 rounded-3xl bg-[#fff4ef] p-5">
                    <h4 className="mb-2 font-bold text-[#812800]">
                      Adoption Policy
                    </h4>

                    <p className="text-sm leading-relaxed text-[#5d6669]">
                      Every adoption request goes through verification to ensure
                      pets find loving and safe homes.
                    </p>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
