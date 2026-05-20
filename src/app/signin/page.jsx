'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdPets } from 'react-icons/md';
import {
  FaGoogle,
  FaFacebookF,
  FaEye,
  FaEyeSlash,
} from 'react-icons/fa';
import SigninForm from '@/Component/Authnetication Pages/SigninForm';
import GoogleLogin from '@/Component/Authnetication Pages/GoogleLogin';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="container mx-auto min-h-screen flex items-stretch bg-surface text-on-surface overflow-hidden py-6">
      {/* Left Side */}
      <section className="hidden lg:flex lg:w-1/2 relative overflow-hidden ">
        <div className="absolute inset-0 bg-pri/10 z-10 rounded-4xl" />

        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXvIZngy8tTtBpoT1onJN9U0wIbpogJCu1FxXx62_DXIegTley_o4ieHLrZYAUZAhZRl-NgplqjhYbMaF0MIXfZevpmvYv3vHn1flIBKfSWo5uzOlqulRG8B4YEI8gM-w4nf5x6YFiHUKfJhvpSqVhz1Fn8yI3e0Nm85G0ii9dYN9QKHS_AbfzbmHvMfsfEckOBb13wxdVa1nkf852u6PukP-wU5mKEaHEKLauVrjdRxyI_O-SJ8xUHuzAzG8xZ9XI8RUHVfvxNL1g"
          alt="pet"
          fill
          priority
          className="object-cover rounded-4xl"
        />

        <div className="relative z-20 w-full h-full flex flex-col justify-end p-20 bg-gradient-to-t from-pri/70 to-transparent rounded-4xl">
          <div className="max-w-md">
            <h2 className="text-5xl font-extrabold text-white leading-tight mb-6">
              Because every paw deserves a path.
            </h2>

            <p className="text-lg text-white/80 leading-relaxed">
              Join our community of compassionate pet lovers and find your
              perfect companion today.
            </p>
          </div>
        </div>
      </section>

      {/* Right Side */}
      <section className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 md:px-16 py-20 relative bg-surface">
        {/* Logo */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-pri/10 flex items-center justify-center">
              <MdPets className="text-pri text-2xl" />
            </div>

            <h1 className="text-3xl font-extrabold text-pri">
              Maw Care
            </h1>
          </Link>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-[460px]">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
              Welcome Back
            </h1>

            <p className="text-on-surface-variant text-lg">
              Please enter your details to sign in.
            </p>
          </div>

          {/* Form */}
      <SigninForm></SigninForm>

          {/* Divider */}
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/30" />
            </div>

            <div className="relative flex justify-center">
              <span className="bg-surface px-6 text-on-surface-variant text-sm">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social */}
       <GoogleLogin></GoogleLogin>

          {/* Signup */}
          <p className="mt-12 text-center text-on-surface-variant">
            Don&apos;t have an account?{' '}
            <Link
              href="/signup"
              className="text-pri font-bold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>

      </section>
    </main>
  );
};

export default SignIn;