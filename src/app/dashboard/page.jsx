
import { authClient } from '@/lib/auth-client';

import React from 'react';
import { FaFilter, FaSearch } from 'react-icons/fa';
import { IoIosTimer, IoMdAddCircleOutline } from 'react-icons/io';
import { MdDownloadForOffline, MdVerified } from 'react-icons/md';

const DashBoard =async () => {
  // const session = await authClient.useSession();




    return (
        <div className='w-full'>
            <main className="flex-1 flex flex-col gap-6 p-6">

          {/* Heading */}
          <div>
            <h2 className="text-4xl font-extrabold text-pri mb-2">
              Adoption Requests
            </h2>

            <p className="text-on-surface-variant">
              Manage and track your pending and historical pet adoption applications.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            {/* Card */}
            <div className="bg-surface-container rounded-3xl p-6 border  border-sec/30 shadow-lg">
              
              <div className="flex justify-between items-start mb-5">

         <IoIosTimer />


                <span className="bg-pri-fixed text-pri text-xs font-bold px-3 py-1 rounded-full">
                  Pending
                </span>
              </div>

              <h3 className="text-5xl font-extrabold mb-2">
                04
              </h3>

              <p className="text-on-surface-variant">
                Under Review
              </p>
            </div>

            {/* Card */}
            <div className="bg-surface-container rounded-3xl p-6 border  border-sec/30 shadow-lg">
              
              <div className="flex justify-between items-start mb-5">
<MdVerified />

                <span className="bg-secondary-fixed text-secondary text-xs font-bold px-3 py-1 rounded-full">
                  +12%
                </span>
              </div>

              <h3 className="text-5xl font-extrabold mb-2">
                08
              </h3>

              <p className="text-on-surface-variant">
                Approved Total
              </p>
            </div>

            {/* Add New */}
            <div className="bg-surface-container-highest border-2 border-dashed border-sec/50 rounded-3xl p-6 flex items-center justify-center">
              
              <button className=" text-2xl font-bold flex flex-col items-center gap-2 hover:text-pri transition-all duration-300">
<IoMdAddCircleOutline />

                <span className="font-semibold">
                  New Request
                </span>
              </button>
            </div>
          </div>

          {/* TABLE */}
          <div className="bg-surface rounded-3xl border border-outline-variant/20 shadow-xl overflow-hidden">

            {/* Top */}
            <div className="p-6 border-b border-outline-variant/20 flex flex-col md:flex-row justify-between gap-5">

              {/* Search */}
              <div className="flex items-center gap-3 bg-surface-container-low px-5 py-3 rounded-full border border-outline-variant/20">

                <FaSearch />


                <input
                  type="text"
                  placeholder="Search pets..."
                  className="bg-transparent outline-none"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">

                <button className="flex items-center gap-2 px-5 py-3 border border-outline rounded-full hover:bg-surface-container-high transition-all duration-300">
                <FaFilter />

                  Filter
                </button>

                <button className="flex items-center gap-2 bg-pri text-white px-5 py-3 rounded-full shadow-md hover:scale-105 transition-all duration-300">
                <MdDownloadForOffline />

                  Export
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">

              <table className="w-full">

                <thead>
                  <tr className="bg-surface-container-low/50 text-left">

                    <th className="px-6 py-5 uppercase text-sm text-outline">
                      Pet Name
                    </th>

                    <th className="px-6 py-5 uppercase text-sm text-outline">
                      Request Date
                    </th>

                    <th className="px-6 py-5 uppercase text-sm text-outline">
                      Pickup Date
                    </th>

                    <th className="px-6 py-5 uppercase text-sm text-outline">
                      Status
                    </th>

                    <th className="px-6 py-5 uppercase text-sm text-outline text-right">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {[
                    {
                      name: 'Cooper',
                      breed: 'Golden Retriever',
                      date: 'Oct 24, 2023',
                      pickup: 'Nov 12, 2023',
                      status: 'Approved',
                      image:
                        'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200',
                    },
                    {
                      name: 'Luna',
                      breed: 'Siberian Forest',
                      date: 'Nov 02, 2023',
                      pickup: 'TBD',
                      status: 'Pending',
                      image:
                        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?q=80&w=1200',
                    },
                    {
                      name: 'Oliver',
                      breed: 'French Bulldog',
                      date: 'Oct 15, 2023',
                      pickup: '---',
                      status: 'Rejected',
                      image:
                        'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=1200',
                    },
                  ].map((pet, index) => (
                    <tr
                      key={index}
                      className="border-t border-outline-variant/10 hover:bg-surface-container-low transition-all duration-300 group"
                    >

                      {/* Pet */}
                      <td className="px-6 py-5">

                        <div className="flex items-center gap-4">

                          <div className="w-12 h-12 rounded-2xl overflow-hidden">
                            <img
                              src={pet.image}
                              alt={pet.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div>
                            <p className="font-bold">
                              {pet.name}
                            </p>

                            <p className="text-sm text-on-surface-variant">
                              {pet.breed}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-on-surface-variant">
                        {pet.date}
                      </td>

                      <td className="px-6 py-5 text-on-surface-variant">
                        {pet.pickup}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-5">

                        <span
                          className={`px-4 py-2 rounded-full text-xs font-bold ${
                            pet.status === 'Approved'
                              ? 'bg-secondary-fixed text-secondary'
                              : pet.status === 'Pending'
                              ? 'bg-tertiary-fixed text-tertiary'
                              : 'bg-error-container text-error'
                          }`}
                        >
                          {pet.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-5">

                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">

                          <button className="p-2 rounded-xl hover:bg-pri-fixed text-pri">
                            <span className="material-symbols-outlined">
                              visibility
                            </span>
                          </button>

                          <button className="p-2 rounded-xl hover:bg-error-container text-error">
                            <span className="material-symbols-outlined">
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="p-6 border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-4">

              <p className="text-on-surface-variant">
                Showing 3 of 12 requests
              </p>

              <div className="flex items-center gap-2">

                <button className="w-10 h-10 rounded-full hover:bg-surface-container-high transition-all duration-300 flex items-center justify-center">
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>

                <button className="w-10 h-10 rounded-full bg-pri text-white font-bold">
                  1
                </button>

                <button className="w-10 h-10 rounded-full hover:bg-surface-container-high transition-all duration-300">
                  2
                </button>

                <button className="w-10 h-10 rounded-full hover:bg-surface-container-high transition-all duration-300 flex items-center justify-center">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </main>
        </div>
    );
};

export default DashBoard;