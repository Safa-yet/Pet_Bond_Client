import React from 'react';
import { FaClipboardList } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';
import { IoNewspaper, IoSettingsSharp } from 'react-icons/io5';

const SideBar = () => {
    return (
      <aside className="hidden md:flex flex-col w-64 shrink-0 gap-6">

          <div className="bg-surface rounded-3xl p-6 border border-sec/30 shadow-lg">

            <p className="text-outline uppercase tracking-widest text-sm font-semibold mb-6">
              Management
            </p>

            <div className="space-y-2">

              <a
                href="#"
                className="flex items-center gap-3 bg-pri text-white px-4 py-2 rounded-2xl shadow-md"
              >
                <IoNewspaper />


                <span>My Requests</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 rounded-2xl hover:bg-surface-container-high transition-all duration-300"
              >
                <IoMdAddCircle />


                <span>Add Pet</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 rounded-2xl hover:bg-surface-container-high transition-all duration-300"
              >
                <FaClipboardList />


                <span>My Listings</span>
              </a>

              <div className="h-px bg-outline-variant/30 my-4"></div>

              <a
                href="#"
                className="flex items-center gap-3 px-4 py-2 rounded-2xl hover:bg-surface-container-high transition-all duration-300"
              >
                <IoSettingsSharp />


                <span>Settings</span>
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-gradient-to-br from-pri/5 to-sec/5 border border-outline-variant/20 rounded-3xl p-6">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white">
                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="font-bold text-on-surface">
                  James Wilson
                </p>

                <p className="text-sm text-on-surface-variant">
                  Top Adopter
                </p>
              </div>
            </div>

            <div className="bg-white/40 rounded-2xl p-4 flex justify-around text-center">

              <div>
                <p className="text-pri font-bold text-lg">
                  12
                </p>

                <p className="text-xs uppercase text-outline">
                  Total
                </p>
              </div>

              <div className="w-px bg-outline-variant/30"></div>

              <div>
                <p className="text-secondary font-bold text-lg">
                  3
                </p>

                <p className="text-xs uppercase text-outline">
                  Active
                </p>
              </div>
            </div>
          </div>
        </aside>
    );
};

export default SideBar;