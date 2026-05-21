import EditBtn from "@/Component/Shared Ui/EditBtn";
import RemoveBtn from "@/Component/Shared Ui/RemoveBtn";
import { auth } from "@/lib/auth";
import { approveRequestApi, getPetRequestsApi, MyAddAnimal } from "@/lib/CallApi";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import {
  MdAdd,
  MdPets,
  MdTrendingUp,
  MdFavorite,
  MdVerified,
  MdEdit,
  MdDelete,
  MdVisibility,
} from "react-icons/md";

export default async function MyListingsPage() {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  // session
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const myPets = await MyAddAnimal(user?.email, token);

  const totalListings = myPets?.length || 0;
  const adoptedPets = 0;

  myPets?.filter((pet) => pet.adopted)?.length || 0;

  const availablePets = myPets?.filter((pet) => !pet.adopted)?.length || 0;

  const stats = [
    {
      title: "Total Listings",
      value: totalListings,
      subtitle: "Your total pet listings",
      icon: <MdPets className="text-[120px]" />,
      bg: "bg-white",
    },

    {
      title: "Currently Available",
      value: availablePets,
      subtitle: "Ready for adoption",
      icon: <MdFavorite className="text-[120px]" />,
      bg: "bg-orange-100",
    },

    {
      title: "Successfully Adopted",
      value: adoptedPets,
      subtitle: "Found forever homes",
      icon: <MdVerified className="text-[120px]" />,
      bg: "bg-blue-100",
    },
  ];

  const id = myPets?._id;
console.log("reqqqqqqqq",id);

// Show Request infoooooooo

const requestInfo = await getPetRequestsApi(id,token)


console.log(requestInfo,"request info");
  return (
    <div className="min-h-screen bg-[#f4fafd] text-[#161d1f] font-sans">
      <main className="mx-auto max-w-7xl px-4 pb-20 md:px-12">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2.5">
            <h2 className="text-2xl font-extrabold md:text-5xl text-pri mb-3.5">
              My Listings
            </h2>

            <p className="mt-3 max-w-2xl text-lg text-[#58423a]">
              Manage your pet listings and track adoption requests.
            </p>
          </div>

          <Link href="/dashboard/add-pet">
            <Button className="flex items-center justify-center gap-2 rounded-full bg-pri px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-105">
              <MdAdd className="text-xl" />
              List a New Pet
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 my-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bg} relative overflow-hidden rounded-[32px] border border-[#e0c0b5]/40 p-8 shadow-sm`}
            >
              <div className="relative z-10">
                <p className="text-sm font-semibold text-[#58423a]">
                  {stat.title}
                </p>

                <h3 className="mt-2 text-5xl font-extrabold">{stat.value}</h3>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#0060ab]">
                  <MdTrendingUp />
                  {stat.subtitle}
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 opacity-10">
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Listings Title */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold">Manage Pets</h3>
        </div>

        {/* Empty State */}
        {myPets?.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-[32px] bg-white py-20 shadow-sm">
            <MdPets className="text-8xl text-gray-300" />

            <h2 className="mt-6 text-3xl font-bold text-gray-700">
              No Pets Added Yet
            </h2>

            <p className="mt-3 text-gray-500">
              Start by adding your first pet listing.
            </p>

            <Link href="/dashboard/add-pet">
              <Button className="mt-6 rounded-full bg-pri px-8 py-3 font-semibold text-white transition hover:scale-105">
                Add Pet
              </Button>
            </Link>
          </div>
        )}

        {/* Pets Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {myPets?.map((pet) => (
            <div
              key={pet._id}
              className="flex flex-col overflow-hidden rounded-[32px] border border-[#e0c0b5]/40 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-[240px] w-full">
                <Image
                  src={pet.image}
                  alt={pet.petName}
                  fill
                  className="object-cover"
                />

                {/* Status */}
                <div className="absolute left-4 top-4">
                  <span
                    className={`rounded-full px-4 py-1 text-sm font-semibold shadow-sm ${
                      pet.adopted
                        ? "bg-green-200 text-green-800"
                        : "bg-orange-200 text-[#812800]"
                    }`}
                  >
                    {pet.adopted ? "Adopted" : "Available"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h4 className="text-2xl font-bold">{pet.petName}</h4>

                    <p className="text-sm text-[#58423a]">
                      {pet.breed} • {pet.age} years
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-2xl font-bold text-[#812800]">
                      ৳{pet.adoptionFee}
                    </span>

                    <p className="text-sm text-[#58423a]">Adoption Fee</p>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600">📍 {pet.location}</p>
                </div>

                {/* Buttons */}
                <div
                  className={`mt-auto space-y-4 border-t border-[#e0c0b5]/40 pt-5 ${
                    pet.adopted ? "opacity-70" : ""
                  }`}
                >
                  {/* Top Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    {/* Edit */}
                    <EditBtn pet={pet} ></EditBtn>

                    {/* Delete */}
                    <RemoveBtn pet={pet}></RemoveBtn>
                  </div>

                  {/* View Details */}
                  <Link href={`/pets/${pet._id}`}>
                    <Button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0060ab] py-3 text-sm font-semibold text-white transition hover:shadow-lg">
                      <MdVisibility className="text-lg" />
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Mobile FAB */}
      <Link href="/dashboard/add-pet">
        <Button className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#ff6d33] text-white shadow-2xl transition hover:scale-110 md:hidden">
          <MdAdd className="text-4xl" />
        </Button>
      </Link>
    </div>
  );
}
