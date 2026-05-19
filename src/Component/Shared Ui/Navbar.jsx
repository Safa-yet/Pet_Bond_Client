"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";

import {
  FaBars,
  FaTimes,
  FaPaw,
  FaSearch,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { useTheme } from "next-themes";
import logo from '../../img/white_logo.png';
import darklogo from '../../img/dark_logo.png';
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const pathName = usePathname();

    console.log(theme);

  const navLinks = [
    "Home",
    "Services",
    "Stories",
    "About",
    "FAQ",
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-orange-100 bg-white/70 backdrop-blur-xl">
      <header className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-10">
        
        {/* Logo */}
        <Link href="/" className="flex items-center ">

        <Image src={theme === "dark" ? darklogo : logo} alt="PetBond Logo" width={100} height={100}></Image>
        <h1 className="text-3xl font-bold text-pri hidden md:block">Pet<span>Bond</span> </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
        <Link
          className={pathName === '/' ? "text-pri border-b-2 border-pri pl-2 py-2 font-bold text-sm  uppercase " : "text-neutral hover:text-pri transition-colors text-sm  uppercase "}
          href='/'
        >
          Home
        </Link>
        <Link
          className={pathName === '/about' ? "text-pri border-b-2 border-pri pl-2 py-2 font-bold text-sm  uppercase " : "text-neutral hover:text-pri transition-colors text-sm  uppercase "}
          href='/about'
        >
          About
        </Link>
        <Link
          className={pathName === '/destinations' ? "text-pri border-b-2 border-pri pl-2 py-2 font-bold text-sm  uppercase " : "text-neutral hover:text-pri transition-colors text-sm  uppercase "}
          href='/destinations'
        >
          Destination
        </Link>
        <Link
          className={pathName === '/booking-list' ? "text-pri border-b-2 border-pri pl-2 py-2 font-bold text-sm  uppercase " : "text-neutral hover:text-pri transition-colors text-sm  uppercase "}
          href='/booking-list' 
        >
          Booking List
        </Link>
        <Link
          className={pathName === '/book-destination' ? "text-pri border-b-2 border-pri pl-2 py-2 font-bold text-sm  uppercase " : "text-neutral hover:text-pri transition-colors text-sm  uppercase "}
          href='/book-destination' 
        >
        Add New
        </Link>
        </ul>

        {/* Right Side */}
        <div className="hidden items-center gap-4 md:flex">
          
           <Button
           onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-100 dark:border-white/10 bg-white dark:bg-slate-900 text-gray-700 dark:text-white shadow-sm transition-all duration-300 hover:scale-110 hover:bg-orange-50 dark:hover:bg-slate-800"
          >
            {theme ==="dark" ?(
              <FaSun size={15} className="text-yellow-400" />
            ) : (
              <FaMoon size={15} />
            )}
          </Button>

          {/* CTA Button */}
          <div className="flex ">
            <Link href={'/signin'}>
            <Button className='bg-transparent text-black font-semibold hover:text-pri'>Sign In</Button>
            </Link>
            <Link href={'/signup'}>
            <Button className="bg-pri rounded-full hover:bg-pri/80  text-white font-semibold">Sign Up</Button>
            </Link>
          </div>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-3 md:hidden">
          
          <Button
           onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-100 dark:border-white/10 bg-white dark:bg-slate-900 text-gray-700 dark:text-white shadow-sm transition-all duration-300 hover:scale-110 hover:bg-orange-50 dark:hover:bg-slate-800"
          >
            {theme ==="dark" ?(
              <FaSun size={15} className="text-yellow-400" />
            ) : (
              <FaMoon size={15} />
            )}
          </Button>

          {/* Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="text-gray-700"
          >
            {isMenuOpen ? (
              <FaTimes size={24} />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          isMenuOpen
            ? "max-h-[500px] border-t border-orange-100"
            : "max-h-0"
        }`}
      >
        <div className="space-y-5 bg-white/95 p-6 backdrop-blur-xl">
          <ul className="flex flex-col gap-5">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className={`text-base font-medium transition ${
                    item === "Home"
                      ? "text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <div className="border-t border-orange-100 pt-5 flex flex-col">
        
            <Link href={'/signin'}>
            <Button className='bg-transparent text-black font-semibold hover:text-pri w-full'>Sign In</Button>
            </Link>
            <Link href={'/signup'}>
            <Button className="bg-pri rounded-full hover:bg-pri/80  text-white font-semibold w-full">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
