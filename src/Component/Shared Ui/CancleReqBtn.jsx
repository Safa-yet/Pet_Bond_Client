"use client";
import { cancelRequestApi } from "@/lib/CallApi";
import { Button } from "@heroui/react";
import React from "react";

const CancleReqBtn = ({ token, id }) => {
  const handleCanle = async () => {
    try {
      console.log(token);
      console.log(id);

      const result = await cancelRequestApi(id, token);

      console.log(result);

      if (result.deletedCount > 0) {
        alert("Request Cancelled");

        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      className="p-2 rounded-xl hover:bg-error-container text-error"
      onClick={handleCanle}
    >
      <span className="material-symbols-outlined">delete</span>
    </Button>
  );
};

export default CancleReqBtn;
