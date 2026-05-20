import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiCake, BiMapPin } from 'react-icons/bi';
import { BsShieldCheck } from 'react-icons/bs';
import { GiPawPrint } from 'react-icons/gi';


const PetCard = ({ petInfo }) => {
  return (
    <div className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      
      {/* Image Section */}
      <div className="relative overflow-hidden h-64">
        <Image
          src={petInfo?.image}
          width={500}
          height={500}
          alt={petInfo?.petName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

        {/* Gender Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-md text-primary text-xs font-semibold px-3 py-1 rounded-full shadow">
            {petInfo?.gender}
          </span>
        </div>

        {/* Pet Name */}
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-2xl font-bold">
            {petInfo?.petName}
          </h2>

          <p className="text-sm text-gray-200">
            {petInfo?.breed || petInfo?.species}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3">

          <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
            <BiCake size={18} className="text-primary" />
            <div>
              <p className="text-xs text-gray-500">Age</p>
              <p className="text-sm font-semibold">
                {petInfo?.age}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
            <BiMapPin size={18} className="text-primary" />
            <div>
              <p className="text-xs text-gray-500">Location</p>
              <p className="text-sm font-semibold truncate">
                {petInfo?.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
            <BsShieldCheck size={18} className="text-primary" />
            <div>
              <p className="text-xs text-gray-500">Vaccinated</p>
              <p className="text-sm font-semibold">
                {petInfo?.vaccinationstatus}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2">
            <GiPawPrint size={18} className="text-primary" />
            <div>
              <p className="text-xs text-gray-500">Fee</p>
              <p className="text-sm font-semibold">
                ${petInfo?.adoptionFee}
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-1 leading-relaxed">
          {petInfo?.description}
        </p>

        {/* Buttons */}
        <div className='flex  gap-5'>
          <Link className='w-full' href={`/allpet/${petInfo?._id}`}>
          
          <Button className="py-3 w-full rounded-xl  bg-pri text-white font-semibold hover:opacity-90 transition">
            View Details
          </Button>
          </Link>
          <Link className='w-full' href={`/allpet/${petInfo?._id}`}>
          
          <Button variant='ghost' className="py-3 w-full rounded-xl  outline-1  font-semibold hover:opacity-90 transition">
            Adopt
          </Button>
          </Link>



        </div>



      </div>
    </div>
  );
};

export default PetCard;