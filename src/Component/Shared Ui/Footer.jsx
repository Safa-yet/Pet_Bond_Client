'use client';

import React from 'react';
import logo from '../../img/white_logo.png';
import darklogo from '../../img/dark_logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="bg-tertiary text-white pt-24 pb-10 px-6 md:px-16 rounded-t-[50px] relative overflow-hidden">
      
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src={theme === 'dark' ? darklogo : logo}
                alt="PetBond Logo"
                width={70}
                height={70}
                className="object-contain"
              />

              <h1 className="text-3xl font-extrabold tracking-wide">
                Pet<span className="text-primary">Bond</span>
              </h1>
            </Link>

            <p className="text-white/70 leading-relaxed text-sm mb-8 max-w-xs">
              Creating happy families through compassionate pet adoption and
              lifelong wellness support for every furry friend.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                FaFacebookF,
                FaInstagram,
                FaTwitter,
              ].map((Icon, index) => (
                <button
                  key={index}
                  className="w-11 h-11 rounded-full bg-white/10 hover:bg-primary transition-all duration-300 flex items-center justify-center hover:-translate-y-1"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-7">Quick Links</h3>

            <ul className="space-y-4 text-white/70">
              {[
                'About Us',
                'Adoption Process',
                'Pet Care Tips',
                'Success Stories',
                'FAQs',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="hover:text-primary transition-all duration-300 hover:pl-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-7">Contact Us</h3>

            <div className="space-y-5 text-white/70">

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>

                <p className="leading-relaxed">
                  Dhaka, Bangladesh <br />
                  PetBond Adoption Center
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <FaPhoneAlt />
                </div>

                <p>+880 1234-567890</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <p>support@petbond.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-7">
              Stay Updated
            </h3>

            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Get pet adoption stories, latest updates, and helpful pet care
              tips directly to your inbox.
            </p>

            <div className="bg-white/10 border border-white/10 rounded-3xl p-2 flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent w-full px-4 outline-none text-sm placeholder:text-white/40"
              />

              <button className="bg-primary hover:bg-primary/80 transition-all duration-300 px-6 py-3 rounded-full text-sm font-semibold">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-white/50 text-sm text-center md:text-left">
            © 2026 PetBond. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-white/50">
            <Link
              href="/"
              className="hover:text-primary transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="hover:text-primary transition"
            >
              Terms
            </Link>

            <Link
              href="/"
              className="hover:text-primary transition"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;