import CancleReqBtn from "@/Component/Shared Ui/CancleReqBtn";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { getMyAdoptionRequestsApi } from "@/lib/CallApi";
import { headers } from "next/headers";
import Link from "next/link";

import React from "react";
import { FaChevronLeft, FaChevronRight, FaFilter, FaSearch } from "react-icons/fa";
import { IoIosTimer, IoMdAddCircleOutline } from "react-icons/io";
import { MdDownloadForOffline, MdVerified } from "react-icons/md";

const DashBoard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  console.log(user, "My requesttttt");
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const myReq = await getMyAdoptionRequestsApi(user.email, token);

  console.log(myReq, "req Info");


  const pendingReq = myReq.filter(
  (item) => item.status === "pending"
);

const approvedReq = myReq.filter(
  (item) => item.status === "approved"
);

const rejectedReq = myReq.filter(
  (item) => item.status === "rejected"
);

  return (
    <div className="w-full">
      <main className="flex-1 flex flex-col gap-6 p-6">
        {/* Heading */}
        <div>
          <h2 className="text-4xl font-extrabold text-pri mb-2">
            Adoption Requests
          </h2>

          <p className="text-on-surface-variant">
            Manage and track your pending and historical pet adoption
            applications.
          </p>
        </div>

        {/* Stats */}
       {/* Stats */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

  {/* Pending */}
  <div
    className="
      bg-surface-container rounded-3xl
      p-6 border border-yellow-300
      shadow-lg
    "
  >

    <div className="flex justify-between items-start mb-5">

      <IoIosTimer className="text-3xl text-yellow-600" />

      <span
        className="
          bg-yellow-100 text-yellow-700
          text-xs font-bold
          px-3 py-1 rounded-full
        "
      >
        Pending
      </span>

    </div>

    <h3 className="text-5xl font-extrabold mb-2">
      {pendingReq.length}
    </h3>

    <p className="text-on-surface-variant">
      Under Review
    </p>

  </div>

  {/* Approved */}
  <div
    className="
      bg-surface-container rounded-3xl
      p-6 border border-green-300
      shadow-lg
    "
  >

    <div className="flex justify-between items-start mb-5">

      <MdVerified className="text-3xl text-green-600" />

      <span
        className="
          bg-green-100 text-green-700
          text-xs font-bold
          px-3 py-1 rounded-full
        "
      >
        Approved
      </span>

    </div>

    <h3 className="text-5xl font-extrabold mb-2">
      {approvedReq.length}
    </h3>

    <p className="text-on-surface-variant">
      Successfully Approved
    </p>

  </div>

  {/* Rejected */}
  <div
    className="
      bg-surface-container rounded-3xl
      p-6 border border-red-300
      shadow-lg
    "
  >

    <div className="flex justify-between items-start mb-5">

      <IoMdAddCircleOutline className="text-3xl text-red-600" />

      <span
        className="
          bg-red-100 text-red-700
          text-xs font-bold
          px-3 py-1 rounded-full
        "
      >
        Rejected
      </span>

    </div>

    <h3 className="text-5xl font-extrabold mb-2">
      {rejectedReq.length}
    </h3>

    <p className="text-on-surface-variant">
      Declined Requests
    </p>

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

  {myReq.map((pet, index) => (

    <tr
      key={pet._id}
      className="
        border-t border-outline-variant/10
        hover:bg-surface-container-low
        transition-all duration-300
        group
      "
    >

      {/* PET */}
      <td className="px-6 py-5">

        <div className="flex items-center gap-4">

          {/* Avatar */}
          <div
            className="
              w-12 h-12 rounded-2xl
              bg-pri/10
              flex items-center justify-center
              text-pri font-bold text-lg
            "
          >
            {pet.petName?.slice(0, 1)}
          </div>

          <div>

            <p className="font-bold text-lg">
              {pet?.petName}
            </p>

            <p
              className="
                text-sm text-on-surface-variant
                line-clamp-1
              "
            >
              {pet?.message}
            </p>

          </div>
        </div>
      </td>

      {/* REQUEST DATE */}
      <td className="px-6 py-5 text-on-surface-variant">

        {new Date(
          pet?.createdAt
        ).toLocaleDateString()}

      </td>

      {/* PICKUP DATE */}
      <td className="px-6 py-5 text-on-surface-variant">

        {pet?.pickupDate}

      </td>

      {/* STATUS */}
      <td className="px-6 py-5">

        <span
          className={`
            px-4 py-2 rounded-full
            text-xs font-bold uppercase
            ${
              pet?.status === "approved"
                ? "bg-green-100 text-green-700"

                : pet?.status === "pending"

                ? "bg-yellow-100 text-yellow-700"

                : "bg-red-100 text-red-700"
            }
          `}
        >
          {pet?.status}
        </span>

      </td>

      {/* ACTIONS */}
      <td className="px-6 py-5">

        <div
          className="
            flex justify-end items-center gap-2
            
            transition-all duration-300
          "
        >

          {/* View */}
          <Link href={`/allpet/${pet._id}`} className="hover:underline">
          View Details</Link>

          {/* Cancel */}
          <CancleReqBtn
            token={token}
            id={pet._id}
          />

        </div>
      </td>
    </tr>
  ))}
</tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-6 border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-on-surface-variant">Showing 3 of 12 requests</p>

            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-full hover:bg-surface-container-high transition-all duration-300 flex items-center justify-center">
                <span className="material-symbols-outlined"><FaChevronLeft /></span>
              </button>

              <button className="w-10 h-10 rounded-full bg-pri text-white font-bold">
                1
              </button>

              <button className="w-10 h-10 rounded-full hover:bg-surface-container-high transition-all duration-300">
                2
              </button>

              <button className="w-10 h-10 rounded-full hover:bg-surface-container-high transition-all duration-300 flex items-center justify-center">
                <span className="material-symbols-outlined"><FaChevronRight /></span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashBoard;
