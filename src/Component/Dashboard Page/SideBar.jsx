'use client'

import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { BiHome } from 'react-icons/bi';
import { FaClipboardList } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';
import { IoNewspaper, IoSettingsSharp } from 'react-icons/io5';

const navLinks = [
  {
    href: '/dashboard',
    label: 'My Requests',
    icon: IoNewspaper,
  },
  {
    href: '/dashboard/addpet',
    label: 'Add Pet',
    icon: IoMdAddCircle,
  },
  {
    href: '/dashboard/mylisting',
    label: 'My Listings',
    icon: FaClipboardList,
  },
];

const SideBar = () => {
  
  const pathname = usePathname();

  return (<>
    <aside className="hidden md:flex flex-col w-72 shrink-0 gap-6 sticky top-0">

      {/* Navigation */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-200 shadow-xl">

        <p className="text-gray-400 uppercase tracking-[0.2em] text-xs font-semibold mb-6">
          Management
        </p>

        <div className="space-y-3">

          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group relative flex items-center gap-4 px-4 py-3 rounded-2xl
                  transition-all duration-300 overflow-hidden
                  ${
                    isActive
                      ? 'bg-pri text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >

                {/* Active Glow */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
                )}

                <div className="relative z-10 flex items-center gap-4">

                  <div
                    className={`
                      text-xl transition-transform duration-300
                      ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                    `}
                  >
                    <Icon />
                  </div>

                  <span className="font-semibold tracking-wide">
                    {item.label}
                  </span>
                </div>
              </Link>
            );
          })}

          {/* Divider */}
          <div className="h-px bg-gray-200 my-5"></div>

          {/* Settings */}
          <Button
            className="
              flex items-center gap-4 px-4 py-3 rounded-2xl
              hover:bg-gray-100 transition-all duration-300
              text-gray-700 w-full bg-transparent
            "
          >
            <IoSettingsSharp className="text-xl" />

            <span className="font-semibold">
              Settings
            </span>
          </Button>
        </div>
      </div>

   
    </aside>

    <nav className='md:hidden block'>
       {/* Navigation */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-200 shadow-xl">

        <p className="text-gray-400 uppercase tracking-[0.2em] text-xs font-semibold mb-6">
          Management
        </p>

        <div className="space-y-3  ">

          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group relative flex items-center gap-4 px-4 py-3 rounded-2xl
                  transition-all duration-300 overflow-hidden
                  ${
                    isActive
                      ? 'bg-pri text-white shadow-lg'
                      : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >

                {/* Active Glow */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90"></div>
                )}

                <div className="relative z-10 flex items-center gap-4">

                  <div
                    className={`
                      text-xl transition-transform duration-300
                      ${isActive ? 'scale-110' : 'group-hover:scale-110'}
                    `}
                  >
                    <Icon />
                  </div>

                  <span className="font-semibold tracking-wide">
                    {item.label}
                  </span>
                </div>
              </Link>
            );
          })}

     

         
        </div>
      </div>

    </nav>
  </>
  );
};

export default SideBar;