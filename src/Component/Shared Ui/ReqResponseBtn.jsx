"use client";

import { updateRequestStatusApi } from "@/lib/CallApi";
import { Button } from "@heroui/react";
import React from "react";
import { toast } from "react-toastify";

const ReqResponseBtn = ({ data, token }) => {

  const handleStatus = async (
    id,
    petId,
    status
  ) => {

    console.log(id, petId, status);

    const result =
      await updateRequestStatusApi(
        id,
        petId,
        status,
        token
      );
toast("Request Successfull")
    console.log(result);
  };

  return (
    <div className="space-y-4">

      {data?.map((req) => (

        <div
          key={req._id}
          className="rounded-xl border p-4"
        >

          <h1 className="font-bold text-xl text-pri">
            {req.petName}
          </h1>

          <h2 className="text-lg font-bold">
            {req.requesterName}
          </h2>

          <p>{req.requesterEmail}</p>

          <p>
            Pickup:
            {req.pickupDate}
          </p>

          <p className="mt-2">
            Status:
            <span className="ml-2 font-bold">
              {req.status}
            </span>
          </p>

          {
            req.status === "pending" && (

              <div className="mt-4 flex gap-3">

                <Button
                  onClick={() =>
                    handleStatus(
                      req._id,
                      req.petId,
                      "approved"
                    )
                  }
                  className="bg-green-600 text-white"
                >
                  Approve
                </Button>

                <Button
                  onClick={() =>
                    handleStatus(
                      req._id,
                      req.petId,
                      "rejected"
                    )
                  }
                  className="bg-red-500 text-white"
                >
                  Reject
                </Button>

              </div>
            )
          }

        </div>
      ))}
    </div>
  );
};

export default ReqResponseBtn;