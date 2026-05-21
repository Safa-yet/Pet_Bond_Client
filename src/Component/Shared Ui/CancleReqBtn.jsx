"use client";
import { cancelRequestApi } from "@/lib/CallApi";
import { Button } from "@heroui/react";
import React from "react";
import { toast } from "react-toastify";

const CancleReqBtn = ({ token, id }) => {
  const handleCanle = async () => {
    try {
      console.log(token);
      console.log(id);

      const result = await cancelRequestApi(id, token);

      console.log(result);

      if (result.deletedCount > 0) {
   toast("Successfully Cancled.")

        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
    variant="danger"
      className="p-2 rounded-xl hover:bg-error-container text-error"
      onClick={handleCanle}
    >
      <span className="material-symbols-outlined">Delete</span>
    </Button>
  );
};

export default CancleReqBtn;
