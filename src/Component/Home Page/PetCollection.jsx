import { AllAnimal } from '@/lib/CallApi';
import React from 'react';
import PetCard from '../Shared Ui/PetCard';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const PetCollection = async() => {
   const { token } = await auth.api.getToken({
      headers: await headers(),
    });
  const petCollection = await AllAnimal(token);

    return (
        <div className='mx-auto container'>
            <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-16">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">
                Our Pet Collection
              </h2>

              <p className="text-on-surface-variant max-w-2xl mx-auto">
                Meet the wonderful personalities waiting to become part of your
                family.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {
                petCollection.slice(0,6).map((petInfo)=><PetCard key={petInfo._id} petInfo={petInfo}></PetCard>)

              }
              
            </div>
          </div>
        </section>
        </div>
    );
};

export default PetCollection;