"use client";

import { useState } from "react";
import Link from "next/link";
import { Avatar, Button, Dropdown, Spinner } from "@heroui/react";

import {
  FaBars,
  FaTimes,
  FaPaw,
  FaSearch,
  FaMoon,
  FaSun,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { useTheme } from "next-themes";
import logo from '../../img/white_logo.png';
import darklogo from '../../img/dark_logo.png';
import Image from "next/image";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";

import { MdDashboard, MdLogin, MdPersonAdd } from "react-icons/md";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const pathName = usePathname();

    console.log(theme);
// const { data: session, error } =  authClient.getSession()

  const { data: session, isPending ,error} = authClient.useSession();

  const userProfile = session?.user;

console.log(userProfile,error ,"dashboard");

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
          className={pathName === '/allpet' ? "text-pri border-b-2 border-pri pl-2 py-2 font-bold text-sm  uppercase " : "text-neutral hover:text-pri transition-colors text-sm  uppercase "}
          href='/allpet'
        >
          All Pet
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
          {
            isPending?
            <>
            <Spinner></Spinner></>
            :


          <Dropdown placement="bottom-end">
  <Dropdown.Trigger>
    {session?.user ? (
      // Avatar trigger
      <Avatar className="cursor-pointer ring-2 ring-white/20">
        <Avatar.Image
          src={session.user.image}
          alt={session.user.name}
        />
        <Avatar.Fallback>
          {session.user.name?.charAt(0)}
        </Avatar.Fallback>
      </Avatar>
    ) : (
      // Sign In / Sign Up buttons
      <div className="flex items-center gap-3">
        
            <Link href={'/signin'}>
            <Button className='bg-transparent text-black font-semibold hover:text-pri'>Sign In</Button>
            </Link>
            <Link href={'/signup'}>
            <Button className="bg-pri rounded-full hover:bg-pri/80  text-white font-semibold">Sign Up</Button>
            </Link>
      </div>
    )}
  </Dropdown.Trigger>

  {session?.user && (
    <Dropdown.Popover className="p-0 border border-gray-200 shadow-2xl rounded-2xl overflow-hidden">
      <Dropdown.Menu
        aria-label="User Menu"
        className="min-w-[220px] bg-white text-black p-2"
      >
        {/* User Info */}
        <Dropdown.Item
          isReadOnly
          className="cursor-default hover:bg-transparent"
        >
          <div className="flex items-center gap-3 p-2">
            <Avatar>
              <Avatar.Image
                src={session.user.image}
                alt={session.user.name}
              />
              <Avatar.Fallback>
                {session.user.name?.charAt(0)}
              </Avatar.Fallback>
            </Avatar>

            <div>
              <h4 className="font-semibold text-sm">
                {session.user.name}
              </h4>

              <p className="text-xs text-gray-500">
                Logged In
              </p>
            </div>
          </div>
        </Dropdown.Item>

        {/* Profile */}
        <Dropdown.Item className="rounded-xl hover:bg-gray-100 transition">
          <Link
            href="/profile"
            className="flex items-center gap-3 w-full"
          >
            <FaUser className="text-gray-500" />
            Profile
          </Link>
        </Dropdown.Item>

        {/* Dashboard */}
        <Dropdown.Item className="rounded-xl hover:bg-gray-100 transition">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 w-full"
          >
            <MdDashboard className="text-gray-500" />
            Dashboard
          </Link>
        </Dropdown.Item>

        {/* Logout */}
        <Dropdown.Item className="rounded-xl hover:bg-red-50 transition">
          <Button
            onPress={() => authClient.signOut()}
            className="bg-transparent shadow-none p-0 h-auto 
            flex items-center gap-3 text-red-500 hover:text-red-600"
          >
            <FaSignOutAlt />
            Logout
          </Button>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown.Popover>
  )}
</Dropdown>
          }
          
          </div>

          {/* CTA Button */}



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
