"use client";
import { approveRequestApi, rejectRequestApi, updateRequestStatusApi } from "@/lib/CallApi";
import { Button } from "@heroui/react";
import React from "react";

const ReqResponseBtn = ({ data, token }) => {
const handleStatus = async (id, status) => {

    console.log(id, status);

    const result = await updateRequestStatusApi(
      id,
      status,
      token
    );

    console.log(result);
  };
  
  return (
    <div className="space-y-4">
      {data?.map((req) => (
        <div key={req._id} className="rounded-xl border p-4">
          <h2 className="text-xl font-bold">{req.requesterName}</h2>

          <p>{req.requesterEmail}</p>

          <p>
            Pickup:
            {req.pickupDate}
          </p>

          <p className="mt-2">
            Status:
            <span className="ml-2 font-bold">{req.status}</span>
          </p>

          {req.status === "pending" && (
            <div className="mt-4 flex gap-3">
              <Button
                onClick={() => handleStatus(req._id,"approved")}
                className="bg-green-600 text-white"
              >
                Approve
              </Button>

              <Button
                onClick={() => handleStatus(req._id,"rejected")}
                className="bg-red-500 text-white"
              >
                Reject
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReqResponseBtn;
