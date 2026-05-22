"use client";
import { cancelRequestApi } from "@/lib/CallApi";
import { AlertDialog, Button } from "@heroui/react";
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
    <AlertDialog>
      <Button variant="danger">Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently Cancel
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger"  onClick={handleCanle}>
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default CancleReqBtn;
