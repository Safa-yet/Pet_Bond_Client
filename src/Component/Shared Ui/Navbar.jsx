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
import { toast } from "react-toastify";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const pathName = usePathname();

    console.log(theme);
// const { data: session, error } =  authClient.getSession()

  const { data: session, isPending ,error} = authClient.useSession();

  const userProfile = session?.user;


  const navLinks = [
    "Home",
    "All Pets",
    "Stories",
    "About",
    "FAQ",
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-orange-100 dark:border-white/10 bg-white/70 dark:bg-[#0b1120]/70 backdrop-blur-xl transition-colors duration-300">
  <header className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-10">
    
    {/* Logo */}
    <Link href="/" className="flex items-center">
      <Image
        src={theme === "dark" ? darklogo : logo}
        alt="PetBond Logo"
        width={100}
        height={100}
      />

      <h1 className="hidden text-3xl font-bold text-pri dark:text-white md:block">
        Pet<span className="text-[#812800] dark:text-orange-400">Bond</span>
      </h1>
    </Link>

    {/* Desktop Menu */}
    <ul className="hidden items-center gap-8 md:flex">
      <Link
        className={
          pathName === "/"
            ? "text-pri dark:text-orange-400 border-b-2 border-pri dark:border-orange-400 pl-2 py-2 font-bold text-sm uppercase"
            : "text-neutral dark:text-gray-300 hover:text-pri dark:hover:text-orange-400 transition-colors font-semibold text-sm uppercase"
        }
        href="/"
      >
        Home
      </Link>

      <Link
        className={
          pathName === "/allsee"
            ? "text-pri dark:text-orange-400 border-b-2 border-pri dark:border-orange-400 pl-2 py-2 font-bold text-sm uppercase"
            : "text-neutral dark:text-gray-300 hover:text-pri dark:hover:text-orange-400 transition-colors font-semibold text-sm uppercase"
        }
        href="/allsee"
      >
        All Pet
      </Link>

      <Link
        className={
          pathName === "/dashboard"
            ? "text-pri dark:text-orange-400 border-b-2 border-pri dark:border-orange-400 pl-2 py-2 font-bold text-sm uppercase"
            : "text-neutral dark:text-gray-300 hover:text-pri dark:hover:text-orange-400 transition-colors font-semibold text-sm uppercase"
        }
        href="/dashboard"
      >
        Dashboard
      </Link>
    </ul>

    {/* Right Side */}
    <div className="hidden items-center gap-4 md:flex">
      
      {/* Theme Button */}
      <Button
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
        className="
          flex h-11 w-11 items-center justify-center
          rounded-full border border-orange-100
          dark:border-white/10
          bg-white dark:bg-slate-900
          text-gray-700 dark:text-white
          shadow-sm transition-all duration-300
          hover:scale-110
          hover:bg-orange-50
          dark:hover:bg-slate-800
        "
      >
        {theme === "dark" ? (
          <FaSun size={15} className="text-yellow-400" />
        ) : (
          <FaMoon size={15} />
        )}
      </Button>

      {isPending ? (
        <Spinner />
      ) : (
        <Dropdown placement="bottom-end">
          <Dropdown.Trigger>
            {session?.user ? (
              <Avatar className="cursor-pointer ring-2 ring-white/20 dark:ring-white/10">
                <Avatar.Image
                  src={session.user.image}
                  alt={session.user.name}
                />

                <Avatar.Fallback>
                  {session.user.name?.charAt(0)}
                </Avatar.Fallback>
              </Avatar>
            ) : (
              <div className="flex items-center gap-3">
                <Link href={"/signin"}>
                  <Button className="bg-transparent text-black dark:text-white font-semibold hover:text-pri dark:hover:text-orange-400">
                    Sign In
                  </Button>
                </Link>

                <Link href={"/signup"}>
                  <Button className="bg-pri hover:bg-pri/80 rounded-full text-white font-semibold">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </Dropdown.Trigger>

          {session?.user && (
            <Dropdown.Popover
              className="
                overflow-hidden rounded-2xl
                border border-gray-200 dark:border-white/10
                bg-white dark:bg-[#111827]
                p-0 shadow-2xl
              "
            >
              <Dropdown.Menu
                aria-label="User Menu"
                className="
                  min-w-[220px]
                  bg-white dark:bg-[#111827]
                  text-black dark:text-white
                  p-2
                "
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
                      <h4 className="text-sm font-semibold dark:text-white">
                        {session.user.name}
                      </h4>

                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Logged In
                      </p>
                    </div>
                  </div>
                </Dropdown.Item>

                {/* Profile */}
                <Dropdown.Item className="rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition">
                  <Link
                    href="/profile"
                    className="flex w-full items-center gap-3"
                  >
                    <FaUser className="text-gray-500 dark:text-gray-400" />
                    Profile
                  </Link>
                </Dropdown.Item>

                {/* Dashboard */}
                <Dropdown.Item className="rounded-xl hover:bg-gray-100 dark:hover:bg-white/10 transition">
                  <Link
                    href="/dashboard"
                    className="flex w-full items-center gap-3"
                  >
                    <MdDashboard className="text-gray-500 dark:text-gray-400" />
                    Dashboard
                  </Link>
                </Dropdown.Item>

                {/* Logout */}
                <Dropdown.Item className="rounded-xl hover:bg-red-50 dark:hover:bg-red-500/10 transition">
                  <Button
                    onPress={() => {
                      authClient.signOut();
                      toast("logout successful");
                    }}
                    className="
                      h-auto bg-transparent p-0 shadow-none
                      flex items-center gap-3
                      text-red-500 hover:text-red-600
                    "
                  >
                    <FaSignOutAlt />
                    Logout
                  </Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          )}
        </Dropdown>
      )}
    </div>

    {/* Mobile Buttons */}
    <div className="flex items-center gap-3 md:hidden">
      <Button
        onClick={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
        className="
          flex h-11 w-11 items-center justify-center
          rounded-full border border-orange-100
          dark:border-white/10
          bg-white dark:bg-slate-900
          text-gray-700 dark:text-white
          shadow-sm transition-all duration-300
          hover:scale-110
          hover:bg-orange-50
          dark:hover:bg-slate-800
        "
      >
        {theme === "dark" ? (
          <FaSun size={15} className="text-yellow-400" />
        ) : (
          <FaMoon size={15} />
        )}
      </Button>

      <Button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
        className="text-gray-700 dark:text-white"
      >
        {isMenuOpen ? (
          <FaTimes size={24} />
        ) : (
          <FaBars size={24} />
        )}
      </Button>
    </div>
  </header>

  {/* Mobile Menu */}
  <div
    className={`overflow-hidden transition-all duration-500 md:hidden ${
      isMenuOpen
        ? "max-h-[500px] border-t border-orange-100 dark:border-white/10"
        : "max-h-0"
    }`}
  >
    <div
      className="
        flex flex-col space-y-5
        bg-white/95 dark:bg-[#0b1120]/95
        p-6 backdrop-blur-xl
      "
    >
      <Link
        className={
          pathName === "/"
            ? "text-pri dark:text-orange-400 border-b-2 border-pri dark:border-orange-400 pl-2 py-2 font-bold text-sm uppercase"
            : "text-neutral dark:text-gray-300 hover:text-pri dark:hover:text-orange-400 transition-colors font-semibold text-sm uppercase"
        }
        href="/"
      >
        Home
      </Link>

      <Link
        className={
          pathName === "/allsee"
            ? "text-pri dark:text-orange-400 border-b-2 border-pri dark:border-orange-400 pl-2 py-2 font-bold text-sm uppercase"
            : "text-neutral dark:text-gray-300 hover:text-pri dark:hover:text-orange-400 transition-colors font-semibold text-sm uppercase"
        }
        href="/allsee"
      >
        All Pet
      </Link>

      <Link
        className={
          pathName === "/dashboard"
            ? "text-pri dark:text-orange-400 border-b-2 border-pri dark:border-orange-400 pl-2 py-2 font-bold text-sm uppercase"
            : "text-neutral dark:text-gray-300 hover:text-pri dark:hover:text-orange-400 transition-colors font-semibold text-sm uppercase"
        }
        href="/dashboard"
      >
        Dashboard
      </Link>
    </div>
  </div>
</nav>
  );
}
