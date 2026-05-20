// "use client";

import { auth } from "@/lib/auth";
import { MyAddAnimal } from "@/lib/CallApi";
import { headers } from "next/headers";
import Image from "next/image";
import {
  MdLightMode,
  MdAccountCircle,
  MdAdd,
  MdPets,
  MdTrendingUp,
  MdFavorite,
  MdVerified,
  MdEdit,
  MdDelete,
  MdVisibility,
  MdHistory,
  MdSend,
  MdFace,
  MdCameraAlt,
  MdYard,
} from "react-icons/md";

const petListings = [
  {
    id: 1,
    name: "Cooper",
    breed: "Golden Retriever",
    age: "2 years",
    status: "Available",
    requests: 3,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdwz6Vyg6zC8Q8hFkeBMUF51QaGjFDcZB9dR8oA3MOeA_tdSwbwpbbgnmgoe9CI_q55ilGm48EHjisJ5zNrSKFjaFK6iOwYQoLDNUVIo2M3nYynswLLu25xEglRIuxHeeoRKFh18JvPXYcjt4lIQI-PgH6ivwk5N2rQuKYzS8WK_5AoM8WFqv0sgmmxqnat1is58ewA0hintRQyAgDKz7Q9mjzflLwDHc2fYChv7DBWfvHulFiNhnnmXXcmogF8RHvZL5pwtzf4e8L",
  },
  {
    id: 2,
    name: "Luna",
    breed: "Domestic Shorthair",
    age: "4 years",
    status: "Pending",
    requests: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpSsSDUimMO1cDYtmTzXDi4r36LQTz-XamMFXEtgelMA1DAFOsDYicIcrluuyDpQiV_TNgSR_4vQeT3HbqITwEEFC9rpZodD-sOV0vpVKHmeTOSRyqCTgPJRPacc9kWtg-fyR0m8xQV_b6jCJupVof2rvItltgswn9S8BmuoNtnKLxXqvGLYlQ0P0Maezn-v_QEI2lGdzbf9aN1OWfC91L8Y-rKrI7uaLMENny40ptSgXmFzT6MEe00Y0mFKSuddhLduFucYvcHEK_",
  },
  {
    id: 3,
    name: "Oliver",
    breed: "Beagle",
    age: "6 months",
    status: "Adopted",
    requests: 0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1qrvsQRzFeNyiEldSH94tMWOZDs_fvfHqE8FF1knV9kw39HrOIID8jGox8pBCAIxVgrX3Arn6997X9RGuTRg3H9SxR2_NdXBTFKIlSv53xZvW7LS3YiV9ZzDQt5TwMQip5B4aF3Ht0RTVjKfVko2F21F_SbFXTLCF9wzHHEBlbcrl9NkyCYf0dzCnMCA9CNbj2j7msZIkTN1weJ1U0LzQLJBHtab6Ish4WcEB9gcatpP851WPr204sZRZzbt5SeQnnxDQ5Jq_OJZW",
  },
  {
    id: 4,
    name: "Buddy",
    breed: "Labrador",
    age: "8 years",
    status: "Available",
    requests: 2,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2DTyx_HguzJLf5asiR7sJyO1vD6z500uxY_Yspj8zhtcHEcY3vq7wqZGrJv3L7g8NE01A_n7Oqh3VoAslkg503l1IiYxHfHrXb0ZApx2TtxOLnIKtnHDGE9Ngnr7uBkrG1f8AFbZc9xy7g0g4CHyHv2Jv2y5dei4Cnr1YT5pLWKlfYs-TGETEFkHE0WVloKQ0LaXoT2172eAM9rBJS9Op0j-2-TASoXWUHShjnLcqjwEKDW1rBKpcLqoDM2pfBKh5a4VMAKvwFXS3",
  },
];

const stats = [
  {
    title: "Total Listings",
    value: "12",
    subtitle: "+2 since last month",
    icon: <MdPets className="text-[120px]" />,
    bg: "bg-white",
  },
  {
    title: "Currently Available",
    value: "8",
    subtitle: "Ready for homes",
    icon: <MdFavorite className="text-[120px]" />,
    bg: "bg-orange-100",
  },
  {
    title: "Successfully Adopted",
    value: "4",
    subtitle: "Forever homes found",
    icon: <MdVerified className="text-[120px]" />,
    bg: "bg-blue-100",
  },
];

export default async function MyListingsPage() {
//       const session = await auth.api.getSession({
//     headers: await headers() // you need to pass the headers object.
// })
// const user = session?.user;
// const myPet = MyAddAnimal(user?._id);
  return (
    <div className="min-h-screen bg-[#f4fafd] text-[#161d1f] font-sans">
    
      <main className="mx-auto max-w-7xl px-4 pb-20 md:px-12">
        {/* Header */}
        <div className="mb-12 flex  gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2.5"> 
            <h2 className="text-2xl font-extrabold md:text-5xl text-pri mb-3.5">
              My Listings
            </h2>

            <p className="mt-3 max-w-2xl text-lg text-[#58423a]">
              Manage your pet listings, track adoption progress, and review
              pending requests.
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 rounded-full bg-pri px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-105">
            <MdAdd className="text-xl" />
            List a New Pet
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-between my-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bg} relative overflow-hidden rounded-[32px] border border-[#e0c0b5]/40 p-8 shadow-sm`}
            >
              <div className="relative z-10">
                <p className="text-sm font-semibold text-[#58423a]">
                  {stat.title}
                </p>

                <h3 className="mt-2 text-5xl font-extrabold">
                  {stat.value}
                </h3>

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

        {/* Listings */}
        <div className="mb-6">
          <h3 className="text-3xl font-bold">Manage Pets</h3>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {petListings.map((pet) => (
            <div
              key={pet.id}
              className="flex flex-col overflow-hidden rounded-[32px] border border-[#e0c0b5]/40 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-[240px] w-full">
                <Image
                  src={pet.image}
                  alt={pet.name}
                  fill
                  className={`object-cover ${
                    pet.status === "Pending" ? "grayscale-[0.2]" : ""
                  }`}
                />

                <div className="absolute left-4 top-4">
                  <span
                    className={`rounded-full px-4 py-1 text-sm font-semibold shadow-sm ${
                      pet.status === "Available"
                        ? "bg-orange-200 text-[#812800]"
                        : pet.status === "Pending"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-green-200 text-green-800"
                    }`}
                  >
                    {pet.status}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <h4 className="text-2xl font-bold">{pet.name}</h4>

                    <p className="text-sm text-[#58423a]">
                      {pet.breed} • {pet.age}
                    </p>
                  </div>

                  <div className="text-right">
                    <span className="text-2xl font-bold text-[#812800]">
                      {pet.requests}
                    </span>

                    <p className="text-sm text-[#58423a]">
                      {pet.requests <= 1 ? "Request" : "Requests"}
                    </p>
                  </div>
                </div>

                <div
                  className={`mt-auto space-y-4 border-t border-[#e0c0b5]/40 pt-5 ${
                    pet.status === "Adopted" ? "opacity-60" : ""
                  }`}
                >
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      disabled={pet.status === "Adopted"}
                      className={`flex items-center justify-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-semibold transition ${
                        pet.status === "Adopted"
                          ? "cursor-not-allowed border-gray-300 text-gray-400"
                          : "border-[#0060ab] text-[#0060ab] hover:bg-blue-50"
                      }`}
                    >
                      <MdEdit className="text-lg" />
                      Edit
                    </button>

                    <button className="flex items-center justify-center gap-2 rounded-full border-2 border-red-500 px-4 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50">
                      <MdDelete className="text-lg" />
                      Delete
                    </button>
                  </div>

                  <button
                    className={`flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition ${
                      pet.status === "Adopted"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-[#0060ab] text-white hover:shadow-lg"
                    }`}
                  >
                    {pet.status === "Adopted" ? (
                      <>
                        <MdHistory className="text-lg" />
                        View History
                      </>
                    ) : (
                      <>
                        <MdVisibility className="text-lg" />
                        View Requests
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Add New */}
          <div className="group flex cursor-pointer flex-col items-center justify-center rounded-[32px] border-2 border-dashed border-[#e0c0b5] bg-white/50 p-16 transition hover:border-[#812800]">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-[#812800] transition group-hover:bg-pri group-hover:text-white">
              <MdAdd className="text-4xl" />
            </div>

            <h4 className="text-2xl font-bold transition group-hover:text-[#812800]">
              Add Listing
            </h4>

            <p className="mt-2 text-center text-[#58423a]">
              Ready to find another pet their forever home?
            </p>
          </div>
        </div>
      </main>

      {/* Mobile FAB */}
      <button className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#ff6d33] text-white shadow-2xl transition hover:scale-110 md:hidden">
        <MdAdd className="text-4xl" />
      </button>
    </div>
  );
}