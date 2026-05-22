import EditBtn from "@/Component/Shared Ui/EditBtn";
import RemoveBtn from "@/Component/Shared Ui/RemoveBtn";
import RequestBtn from "@/Component/Shared Ui/RequestBtn";
import { auth } from "@/lib/auth";
import {
  approveRequestApi,
  getPetRequestsApi,
  MyAddAnimal,
} from "@/lib/CallApi";
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

  const myPets = await MyAddAnimal(user?.email);

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
  console.log("reqqqqqqqq", id);

  console.log(myPets,'petsss');

  // Show Request infoooooooo

  const requestInfo = await getPetRequestsApi(id, token);

  console.log(requestInfo, "request info");
  return (
  <div className="min-h-screen bg-[#f4fafd] dark:bg-[#0b1120] text-[#161d1f] dark:text-white font-sans transition-colors duration-300 py-6 rounded-2xl ml-5">
  <main className="mx-auto max-w-7xl px-4 pb-20 md:px-12">

    {/* Header */}
    <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="space-y-2.5">
        <h2 className="mb-3.5 text-2xl font-extrabold text-pri dark:text-orange-400 md:text-5xl">
          My Listings
        </h2>

        <p className="mt-3 max-w-2xl text-lg text-[#58423a] dark:text-gray-400">
          Manage your pet listings and track adoption requests.
        </p>
      </div>

      <Link href="/dashboard/addpet">
        <Button
          className="
            flex items-center justify-center gap-2
            rounded-full
            bg-pri hover:bg-pri/90
            px-8 py-3
            text-sm font-semibold text-white
            shadow-md transition hover:scale-105
          "
        >
          <MdAdd className="text-xl" />
          List a New Pet
        </Button>
      </Link>
    </div>

    {/* Stats */}
    <div className="my-8 flex flex-col gap-5 md:flex-row">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`
            ${stat.bg}
            dark:bg-[#111827]
            relative overflow-hidden
            rounded-[32px]
            border border-[#e0c0b5]/40
            dark:border-white/10
            p-4 lg:p-8
            shadow-sm dark:shadow-black/20
          `}
        >
          <div className="relative z-10">
            <p className="text-sm font-semibold text-[#58423a] dark:text-gray-400">
              {stat.title}
            </p>

            <h3 className="mt-2 text-5xl font-extrabold dark:text-white">
              {stat.value}
            </h3>

            <div
              className="
                mt-6 inline-flex items-center gap-2
                rounded-full
                bg-white/70 dark:bg-white/10
                px-4 py-2
                text-sm font-semibold
                text-[#0060ab] dark:text-sky-400
              "
            >
              <MdTrendingUp />
              {stat.subtitle}
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 opacity-10 dark:opacity-5">
            {stat.icon}
          </div>
        </div>
      ))}
    </div>

    {/* Listings Title */}
    <div className="mb-8">
      <h3 className="text-3xl font-bold dark:text-white">
        Manage Pets
      </h3>
    </div>

    {/* Empty State */}
    {myPets?.length === 0 && (
      <div
        className="
          flex flex-col items-center justify-center
          rounded-[32px]
          bg-white dark:bg-[#111827]
          py-20
          shadow-sm dark:shadow-black/20
          border dark:border-white/10
        "
      >
        <MdPets className="text-8xl text-gray-300 dark:text-gray-700" />

        <h2 className="mt-6 text-3xl font-bold text-gray-700 dark:text-white">
          No Pets Added Yet
        </h2>

        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Start by adding your first pet listing.
        </p>

        <Link href="/dashboard/addpet">
          <Button
            className="
              mt-6 rounded-full
              bg-pri hover:bg-pri/90
              px-8 py-3
              font-semibold text-white
              transition hover:scale-105
            "
          >
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
          className="
            group flex flex-col overflow-hidden
            rounded-[32px]
            border border-[#e0c0b5]/40
            dark:border-white/10
            bg-white dark:bg-[#111827]
            shadow-sm dark:shadow-black/20
            transition duration-300
            hover:-translate-y-2
            hover:shadow-2xl
          "
        >
          {/* Image */}
          <div className="relative h-[240px] w-full overflow-hidden rounded-t-3xl">
            <Image
              src={pet?.image}
              width={500}
              height={500}
              alt={pet?.petName}
              className="
                h-full w-full object-cover
                transition-transform duration-700
                group-hover:scale-110
              "
            />

            {/* Status */}
            <div className="absolute left-4 top-4 z-10">
              <span
                className={`
                  rounded-full px-4 py-1
                  text-sm font-semibold shadow-sm
                  ${
                    pet.adopted
                      ? "bg-green-200 text-green-800"
                      : "bg-orange-200 text-[#812800]"
                  }
                `}
              >
                {pet.adopted ? "Adopted" : "Available"}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-6">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h4 className="text-2xl font-bold dark:text-white">
                  {pet.petName}
                </h4>

                <p className="text-sm text-[#58423a] dark:text-gray-400">
                  {pet.breed} • {pet.age} years
                </p>
              </div>

              <div className="text-right">
                <span className="text-2xl font-bold text-[#812800] dark:text-orange-400">
                  ৳{pet.adoptionFee}
                </span>

                <p className="text-sm text-[#58423a] dark:text-gray-400">
                  Adoption Fee
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                📍 {pet.location}
              </p>
            </div>

            {/* Buttons */}
            <div
              className={`
                mt-auto space-y-4
                border-t border-[#e0c0b5]/40
                dark:border-white/10
                pt-5
                ${pet.adopted ? "opacity-70" : ""}
              `}
            >
              {/* Top Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <EditBtn pet={pet} />
                <RemoveBtn pet={pet} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <RequestBtn pet={pet} token={token} />

                <Link href={`/allpet/${pet._id}`}>
                  <Button
                    className="
                      flex w-full items-center justify-center gap-2
                      rounded-full
                      bg-green-500 hover:bg-green-600
                      px-3 py-3
                      text-sm font-semibold text-white
                      transition hover:shadow-lg
                    "
                  >
                    <MdVisibility className="text-lg" />
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </main>

  {/* Mobile FAB */}
  <Link href="/dashboard/addpet">
    <Button
      className="
        fixed bottom-5 right-5 z-40
        flex h-14 w-14 items-center justify-center
        rounded-full
        bg-[#ff6d33]
        text-white
        shadow-2xl
        transition hover:scale-110
        md:hidden
      "
    >
      <MdAdd className="text-4xl" />
    </Button>
  </Link>
</div>
  );
}
