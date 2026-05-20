"use client";

import Image from "next/image";
import Link from "next/link";

export default function PetDetailsPage() {
  return (
    <div className="min-h-screen bg-[#f4fafd] text-[#161d1f]">

      <main className="pb-20">
        {/* Hero Section */}
        <section className="mx-auto mt-10 max-w-7xl px-4 lg:px-10">
          <div className="group relative h-[400px] overflow-hidden rounded-[32px] shadow-2xl md:h-[600px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsctk2__XL3dHtuygTd4p3QVnM9OQT19v835Tmopq5ESB5IJg4mbItCGm4PssvCI4yio76m4DqOxo0GMWoW-eAOa3N42wSifXmxyOYDxDqPy_WRwENxrKIUn5eqqqePUoGQ8HvRhwrMLpKmtcp61sipQqeOoT7OL_axQPRukFTD7WqjXAYRRDLvMsqG0ngxz9py9WvCMELfEap3jhnjQVq8Au07El_l8Xz7X7FWUWaZfWLwMgZ4tMcWgzAX-VyUaH19Am3nsY-OGVG"
              alt="Luna the Golden Retriever"
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 w-full p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="mb-4 inline-block rounded-full bg-[#ffdbcf] px-4 py-2 text-sm font-semibold text-[#812800]">
                    Available for Adoption
                  </span>

                  <h1 className="text-4xl font-extrabold text-white md:text-6xl">
                    Luna the Golden Retriever
                  </h1>
                </div>

                <div className="flex items-center gap-2 text-lg text-white">
                  📍 <span>Seattle, WA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto mt-16 max-w-7xl px-4 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left */}
            <div className="space-y-10 lg:col-span-8">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
                {[
                  {
                    title: "Breed",
                    value: "Golden",
                    icon: "🐶",
                  },
                  {
                    title: "Age",
                    value: "2 Years",
                    icon: "📅",
                  },
                  {
                    title: "Gender",
                    value: "Female",
                    icon: "♀",
                  },
                  {
                    title: "Fee",
                    value: "$250",
                    icon: "💳",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[28px] border border-gray-200 bg-white p-6 text-center shadow-sm"
                  >
                    <div className="mb-3 text-3xl">{item.icon}</div>

                    <p className="text-sm text-gray-500">{item.title}</p>

                    <h3 className="mt-1 text-2xl font-bold text-[#161d1f]">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Health Tags */}
              <div className="flex flex-wrap gap-3">
                {["Vaccinated", "Microchipped", "Neutered"].map(
                  (tag, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 rounded-full bg-[#ede0d8] px-5 py-3 font-medium text-[#211a16]"
                    >
                      ✅ {tag}
                    </div>
                  )
                )}
              </div>

              {/* About */}
              <article>
                <h2 className="mb-6 text-4xl font-bold text-[#812800]">
                  About Luna
                </h2>

                <div className="space-y-5 text-lg leading-relaxed text-gray-600">
                  <p>
                    Luna is a sunbeam in canine form. At 2 years old, she has
                    the perfect balance of youthful energy and gentle maturity.
                    Found as a stray in downtown Seattle, she has quickly become
                    a favorite among our volunteers.
                  </p>

                  <p>
                    She thrives in environments where she can get plenty of
                    outdoor activity but is equally content to curl up at your
                    feet while you work. Luna is excellent with other dogs and
                    children.
                  </p>
                </div>
              </article>

              {/* Map Preview */}
              <div className="relative h-[320px] overflow-hidden rounded-[32px] border border-gray-200">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBei_PZlRkZv16hZ9_hdgkDE9l9q5mWAWggnBAW1laFAMnb0674QH-ukrzkKeQo2N8LLRNx4Bu7PsRo4qbNGHvPZ4Y_6yqA8flfcIo8Q6dR6sZzWcD1XMk2agYRK2i1GDxK3nXAPqtjPOriNOMwkkvf22ss-e6qneF8Z8ucROAKysJjgdxxkOFoo8uYTVM2sBf--yCNKKfZbGkyoNX7kKytZJABE4amlUrZkoj71fVom0aPv9FSCxQ3fbzPgyBcsnT9v6B6gxuHYwxA"
                  alt="Map"
                  fill
                  className="object-cover opacity-70"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-3xl border border-[#812800]/20 bg-white/90 p-6 shadow-xl backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📍</span>

                      <div>
                        <p className="text-sm text-gray-500">
                          Meet Luna at
                        </p>

                        <h3 className="text-xl font-bold text-[#812800]">
                          Maw Care Seattle Center
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl">
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ffdbcf] text-2xl">
                    ❤️
                  </div>

                  <h3 className="text-3xl font-bold">Adopt Luna</h3>
                </div>

                <form className="space-y-5">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-500">
                      Pet Name
                    </label>

                    <input
                      type="text"
                      value="Luna the Golden Retriever"
                      readOnly
                      className="w-full cursor-not-allowed rounded-full border border-gray-200 bg-gray-100 px-5 py-3"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-500">
                      Your Name
                    </label>

                    <input
                      type="text"
                      value="Jane Doe"
                      readOnly
                      className="w-full cursor-not-allowed rounded-full border border-gray-200 bg-gray-100 px-5 py-3"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-500">
                      Email Address
                    </label>

                    <input
                      type="email"
                      value="jane.doe@example.com"
                      readOnly
                      className="w-full cursor-not-allowed rounded-full border border-gray-200 bg-gray-100 px-5 py-3"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-500">
                      Preferred Pickup Date
                    </label>

                    <input
                      type="date"
                      className="w-full rounded-full border border-gray-300 px-5 py-3 outline-none focus:border-[#812800]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-500">
                      Message for the Caretaker
                    </label>

                    <textarea
                      rows={4}
                      placeholder="Tell us about your home..."
                      className="w-full resize-none rounded-3xl border border-gray-300 px-5 py-4 outline-none focus:border-[#812800]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 w-full rounded-full bg-[#812800] py-4 text-lg font-bold text-white shadow-md transition hover:scale-[1.02]"
                  >
                    Submit Adoption Request
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    By submitting, you agree to our adoption screening process
                    and privacy policy.
                  </p>
                </form>
              </div>
            </aside>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-[#e8eff1]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-4 lg:px-10">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-[#812800]">Maw Care</h3>

            <p className="text-gray-600">
              © 2024 Maw Care. Providing heart-first professional pet adoption
              services.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold uppercase tracking-wider text-[#0060ab]">
              Navigation
            </h4>

            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="#">Home</Link>
              </li>

              <li>
                <Link href="#">All Pets</Link>
              </li>

              <li>
                <Link href="#">Dashboard</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold uppercase tracking-wider text-[#0060ab]">
              Resources
            </h4>

            <ul className="space-y-2 text-gray-600">
              <li>
                <Link href="#">Volunteer</Link>
              </li>

              <li>
                <Link href="#">Contact Us</Link>
              </li>

              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold uppercase tracking-wider text-[#0060ab]">
              Newsletter
            </h4>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full border border-gray-300 px-5 py-3 outline-none"
              />

              <button className="rounded-full bg-[#0060ab] px-5 text-white">
                ➤
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}