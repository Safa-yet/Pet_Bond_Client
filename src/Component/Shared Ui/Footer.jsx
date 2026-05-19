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
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from 'react-icons/fa';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="relative overflow-hidden bg-[#0f172a] text-white pt-28 pb-10 px-6 md:px-16 rounded-t-[60px]">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-primary/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-secondary/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

      

        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-7">
              <Image
                src={theme === 'dark' ? darklogo : logo}
                alt="PetBond Logo"
                width={75}
                height={75}
                className="object-contain"
              />

              <div>
                <h1 className="text-3xl font-extrabold">
                  Pet<span className="text-primary">Bond</span>
                </h1>

                <p className="text-sm text-white/50">
                  Pet Adoption Platform
                </p>
              </div>
            </Link>

            <p className="text-white/60 leading-relaxed text-sm mb-8 max-w-sm">
              Creating forever homes for adorable pets through love,
              compassion, and lifelong wellness support.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4">
              {[
                FaFacebookF,
                FaInstagram,
                FaTwitter,
                FaLinkedinIn,
              ].map((Icon, index) => (
                <button
                  key={index}
                  className="group w-12 h-12 rounded-2xl bg-white/5 border border-white/10 hover:bg-primary transition-all duration-300 flex items-center justify-center hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon
                    size={16}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5">
              {[
                'About Us',
                'Our Services',
                'Adoption Process',
                'Success Stories',
                'FAQs',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="group flex items-center gap-2 text-white/60 hover:text-primary transition-all duration-300"
                  >
                    <span className="w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-4"></span>

                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-8">
              Contact Info
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="min-w-[48px] h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold mb-1">
                    Address
                  </h4>

                  <p className="text-white/60 text-sm leading-relaxed">
                    Dhaka, Bangladesh <br />
                    PetBond Adoption Center
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="min-w-[48px] h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="font-semibold mb-1">
                    Phone
                  </h4>

                  <p className="text-white/60 text-sm">
                    +880 1234-567890
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="min-w-[48px] h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold mb-1">
                    Email
                  </h4>

                  <p className="text-white/60 text-sm">
                    support@petbond.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-8">
              Newsletter
            </h3>

            <p className="text-white/60 text-sm leading-relaxed mb-7">
              Subscribe to receive pet care tips, adoption stories,
              and the latest updates from PetBond.
            </p>

            <div className="space-y-4">

              <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus-within:border-primary transition-all duration-300">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent w-full outline-none text-sm placeholder:text-white/30"
                />
              </div>

              <button className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 py-4 rounded-2xl font-semibold shadow-xl hover:scale-[1.02]">
                Subscribe Now
              </button>
            </div>

            {/* Small Card */}
            <div className="mt-8 rounded-3xl bg-white/5 border border-white/10 p-5 backdrop-blur-xl">
              <p className="text-sm text-white/70 leading-relaxed">
                🐶 Over <span className="text-primary font-bold">15,000+</span> pets successfully adopted into loving homes.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-sm text-white/40 text-center md:text-left">
            © 2026 PetBond. All rights reserved.
          </p>

          <div className="flex items-center gap-8 text-sm text-white/40">
            <Link
              href="/"
              className="hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/"
              className="hover:text-primary transition-colors duration-300"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/"
              className="hover:text-primary transition-colors duration-300"
            >
              Support Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;