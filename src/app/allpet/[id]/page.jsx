import AdoptForm from "@/Component/Shared Ui/AdoptForm";
import { auth } from "@/lib/auth";
import { getSingleApi } from "@/lib/CallApi";
import { Button, FieldError, Form, Input, Label, TextArea, TextField } from "@heroui/react";
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

export default async function PetDetailsPage({ params }) {
    
  const session = await auth.api.getSession({
      headers: await headers() // you need to pass the headers object.
  })
  const user = session?.user;
  console.log(user,"adopt request");
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const { id } = await params;

  const pet = await getSingleApi(id, token);
  console.log("details", pet);


 const adoptRequest = async (formData) => {
  "use server";

  const fromInfo = Object.fromEntries(
    formData.entries()
  );

  const requestInfo = {
    ...fromInfo,

    petId: pet?._id,

    ownerEmail: pet?.ownerEmail,

    requesterEmail: user?.email,

    requesterName: user?.name,

    status: "pending",
  };

  console.log(requestInfo);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/adoption-request`,
    {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",

        authorization: token,
      },

      body: JSON.stringify(
        requestInfo
      ),
    }
  );

  const data = await res.json();

  console.log(data);
};



  // const {petName,age,breed, description,gender,healthStatus,image,vaccinationStatus,_id,email,adoptationFee}= pet;

  return (
    <div className="min-h-screen bg-[#f4fafd] text-[#161d1f]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffefe8] via-[#f4fafd] to-[#dceeff]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#ffdbcf] px-4 py-2 text-sm font-semibold text-[#812800] shadow-sm">
                <MdVerified className="text-lg" />
                Available For Adoption
              </div>

              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-[#161d1f] md:text-6xl">
                {pet?.petName}{" "}
                <span className="text-[#812800]">
                  {pet?.breed || "Golden Retriever"}
                </span>
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-[#5d6669]">
                {pet?.description ||
                  "Meet your future best friend. A loving, playful, and caring pet looking for a forever home filled with warmth and happiness."}
              </p>

              {/* INFO ROW */}
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-2xl bg-white px-5 py-3 shadow-sm">
                  <FaMapMarkerAlt className="text-[#812800]" />
                  <span className="font-medium text-[#4f5a5d]">
                    {pet?.location || "Dhaka"}
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-2xl bg-white px-5 py-3 shadow-sm">
                  <FaBirthdayCake className="text-[#812800]" />
                  <span className="font-medium text-[#4f5a5d]">
                    {pet?.age || "2 Years"}
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-2xl bg-white px-5 py-3 shadow-sm">
                  <FaVenusMars className="text-[#812800]" />
                  <span className="font-medium text-[#4f5a5d]">
                    {pet?.gender || "Female"}
                  </span>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-full bg-[#812800] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  Adopt Now
                </button>

                <button className="rounded-full border border-[#812800]/20 bg-white px-8 py-4 text-lg font-semibold text-[#812800] transition hover:bg-[#fff4ef]">
                  Save Pet
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">
              <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#ffdbcf] blur-3xl" />
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[#d3e3ff] blur-3xl" />

              <div className="relative overflow-hidden rounded-[40px] border border-white/50 bg-white/60 shadow-2xl backdrop-blur-xl">
                <div className="relative h-[350px] w-full md:h-[550px]">
                  <Image
                    src={
                      pet?.image ||
                      "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
                    }
                    alt={pet?.petName || "Pet"}
                    fill
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                {/* FLOAT CARD */}
                <div className="absolute bottom-5 left-5 rounded-3xl border border-white/40 bg-white/80 p-5 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#812800] text-white">
                      <FaHeart className="text-xl" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Adoption Fee</p>

                      <h3 className="text-2xl font-bold text-[#812800]">
                        ${pet?.adoptionFee || 250}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* LEFT SIDE */}
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
                  className="rounded-[30px] border border-[#e0c0b5]/30 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff4ef] text-2xl text-[#812800]">
                    {item.icon}
                  </div>

                  <p className="text-sm text-gray-500">{item.title}</p>

                  <h3 className="mt-2 text-2xl font-bold">{item.value}</h3>
                </div>
              ))}
            </div>

            {/* HEALTH TAGS */}
            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-3xl font-bold text-[#161d1f]">
                Health Information
              </h2>

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
                    className="flex items-center gap-3 rounded-full bg-[#ede0d8] px-5 py-3 font-medium text-[#211a16]"
                  >
                    <span className="text-[#812800]">{item.icon}</span>

                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* ABOUT */}
            <div className="rounded-[32px] bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-4xl font-bold text-[#812800]">
                About {pet?.petName || "Luna"}
              </h2>

              <div className="space-y-5 text-lg leading-relaxed text-[#5d6669]">
                <p>
                  {pet?.description ||
                    "This adorable pet is full of love, energy, and affection. Perfect for families, individuals, or anyone looking for a loyal companion."}
                </p>

                <p>
                  They enjoy outdoor activities, playful moments, and cozy naps.
                  Looking for a forever home where they can receive endless care
                  and love.
                </p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="relative overflow-hidden rounded-[32px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#812800] to-[#0060ab]" />

              <div className="relative flex flex-col gap-8 p-10 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="mb-3 text-white/70">Current Location</p>

                  <h3 className="text-4xl font-bold text-white">
                    {pet?.location || "Dhaka, Bangladesh"}
                  </h3>
                </div>

                <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-lg">
                  <FaMapMarkerAlt className="text-5xl text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}{
            pet?.adopted?(
                <div className=" w-full  text-center">

      <h2 className="text-3xl font-bold text-red-500">
        Already Adopted
      </h2>

      <p className="mt-3 text-gray-600">
        This pet already found a loving home.
      </p>

    </div>
            ):(
<aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-[36px] border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-[#812800] text-white shadow-lg">
                  <FaHeart className="text-2xl" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Ready to adopt?</p>

                  <h2 className="text-3xl font-bold text-[#161d1f]">
                    Send Request
                  </h2>
                </div>
              </div>
              <Form className="space-y-5" action={adoptRequest}>
                <TextField
                  name="petName"
                  isReadOnly
                  defaultValue={pet?.petName}
                >
                  <Label className="mb-2 block text-sm font-semibold text-gray-500">
                    Pet Name
                  </Label>

                  <Input className="w-full rounded-2xl border border-gray-200 bg-gray-100 px-5 py-4 outline-none" />

                  <FieldError />
                </TextField>

                <TextField isReadOnly name="userName" defaultValue={user.name}>
                  <Label className="mb-2 block text-sm font-semibold text-gray-500">
                    Your Name
                  </Label>

                  <Input
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none"
                  />

                  <FieldError />
                </TextField>

                <TextField isReadOnly defaultValue={user.email} name="userEmail" type="email">
                  <Label className="mb-2 block text-sm font-semibold text-gray-500">
                    Email Address
                  </Label>

                  <Input
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none"
                  />

                  <FieldError />
                </TextField>

                <TextField isRequired name="pickupDate" type="date">
                  <Label className="mb-2 block text-sm font-semibold text-gray-500">
                    Pickup Date
                  </Label>

                  <Input className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none" />

                  <FieldError />
                </TextField>

                <TextField isRequired name="message">
                  <Label className="mb-2 block text-sm font-semibold text-gray-500">
                    Message
                  </Label>

                  <TextArea
                    rows={5}
                    placeholder="Tell us why you want to adopt this pet..."
                    className="w-full resize-none rounded-3xl border border-gray-300 px-5 py-4 outline-none"
                  />

                  <FieldError />
                </TextField>
                {
  user?.email ===
    pet?.ownerEmail && 
    <p className="mb-3 text-sm text-red-500">
      You cannot adopt your own pet
    </p>

}

                <Button
                  type="submit"
                  isDisabled={
    user?.email === pet?.ownerEmail
  }
                  className="w-full rounded-2xl bg-[#812800] py-4 text-lg font-bold text-white"
                >
                  Submit Adoption Request
                </Button>
              </Form>

              {/* EXTRA INFO */}
              <div className="mt-8 rounded-3xl bg-[#fff4ef] p-5">
                <h4 className="mb-2 font-bold text-[#812800]">
                  Adoption Policy
                </h4>

                <p className="text-sm leading-relaxed text-[#5d6669]">
                  Every adoption request goes through a verification and
                  approval process to ensure pets find safe and loving homes.
                </p>
              </div>
            </div>
          </aside>

            )
          }
          
        </div>
      </section>
    </div>
  );
}
