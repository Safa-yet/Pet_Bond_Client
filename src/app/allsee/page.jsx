"use client";

import Loading from "@/Component/Shared Ui/Loading";
import PetCard from "@/Component/Shared Ui/PetCard";
import { authClient } from "@/lib/auth-client";
import React, { useEffect, useState } from "react";

const AllPetSee = () => {
  const [loading, setLoading] = useState(true);

  const [pets, setPets] = useState([]);

  const [search, setSearch] = useState("");

  const [sort, setSort] = useState("");

  const [species, setSpecies] = useState([]);

  // fetch pets
  useEffect(() => {
    const fetchPets = async () => {
      setLoading(true);

      const { data, error } = await authClient.token();

      console.log("Alll pet Tokeeen ", data);

      const speciesQuery = species.join(",");

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/animal?search=${search}&species=${speciesQuery}&sort=${sort}`
      );

      const petData = await res.json();

      setPets(petData);

      setLoading(false);
    };

    fetchPets();
  }, [search, sort, species]);

  // species checkbox
  const handleSpecies = (value) => {
    if (species.includes(value)) {
      const filter = species.filter(
        (item) => item !== value
      );

      setSpecies(filter);
    } else {
      setSpecies([...species, value]);
    }
  };

  return (
    <div
      className="
        min-h-screen
        bg-[#f4fafd]
        text-[#161d1f]
        transition-colors duration-300

        dark:bg-[#0b1118]
        dark:text-white
      "
    >
      <main className="mx-auto max-w-7xl px-4 pb-20 pt-6 lg:px-10">

        {/* Search */}
        <section
          className="
            mb-14 rounded-[32px]
            border border-gray-200
            bg-white
            p-8 shadow-sm
            transition-colors duration-300

            dark:border-white/10
            dark:bg-[#111827]
            dark:shadow-black/20
          "
        >
          <div className="flex flex-col gap-8">

            {/* Search + Sort */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

              {/* SEARCH */}
              <div>
                <label
                  className="
                    mb-2 block text-sm
                    font-semibold text-gray-600

                    dark:text-gray-300
                  "
                >
                  Search by Name
                </label>

                <input
                  type="text"
                  placeholder="e.g., Buddy, Luna..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  className="
                    w-full rounded-full
                    border border-gray-300
                    
                    px-5 py-3
                    text-foreground
                    outline-none transition

                    focus:border-[#812800]

                   
                    dark:focus:border-[#ff8a5b]
                  "
                />
              </div>

              {/* SORT */}
              <div>
                <label
                  className="
                    mb-2 block text-sm
                    font-semibold text-gray-600

                    dark:text-gray-300
                  "
                >
                  Sort by Fee
                </label>

                <select
                  value={sort}
                  onChange={(e) =>
                    setSort(e.target.value)
                  }
                  className="
                    w-full rounded-full
                    border border-gray-300
                    
                    px-5 py-3
                    text-foreground
                    outline-none transition

                    focus:border-[#812800]

                   
                    dark:focus:border-[#ff8a5b]
                  "
                >
                  <option value="">
                    Default Sorting
                  </option>

                  <option value="low">
                    Fee: Low to High
                  </option>

                  <option value="high">
                    Fee: High to Low
                  </option>
                </select>
              </div>
            </div>

            {/* FILTER */}
            <div className="flex flex-wrap items-center gap-5">

              <span
                className="
                  font-semibold text-gray-600

                  dark:text-gray-300
                "
              >
                Species:
              </span>

              {["Dog", "Cat", "Bird", "Rabbit"].map(
                (item) => (
                  <label
                    key={item}
                    className="
                      flex cursor-pointer
                      items-center gap-2

                      text-gray-700
                      dark:text-gray-200
                    "
                  >
                    <input
                      type="checkbox"
                      checked={species.includes(item)}
                      onChange={() =>
                        handleSpecies(item)
                      }
                      className="
                        accent-[#812800]
                        dark:accent-[#ff8a5b]
                      "
                    />

                    <span>{item}</span>
                  </label>
                )
              )}
            </div>
          </div>
        </section>

        {/* TITLE */}
        <div
          className="
            mb-10 flex flex-col
            items-start justify-between
            gap-4

            md:flex-row
            md:items-end
          "
        >
          <div>
            <h1
              className="
                text-4xl font-extrabold
                text-foreground
              "
            >
              Available Companions
            </h1>

            <p
              className="
                mt-2 text-gray-600

                dark:text-gray-400
              "
            >
              Find your perfect match.
            </p>
          </div>

          <span
            className="
              rounded-full
              bg-[#ffdbcf]
              px-4 py-2
              font-semibold
              text-[#812800]

              dark:bg-[#2a1c17]
              dark:text-[#ffb08f]
            "
          >
            {pets.length} Pets Available
          </span>
        </div>

        {/* LOADING */}
        {loading ? (
          <Loading />
        ) : (
          <section
            className="
              grid grid-cols-1
              gap-8

              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-4
            "
          >
            {pets.map((petInfo) => (
              <PetCard
                key={petInfo._id}
                petInfo={petInfo}
              />
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default AllPetSee;