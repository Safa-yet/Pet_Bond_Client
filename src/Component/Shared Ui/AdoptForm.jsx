"use client";

import { useActionState, useEffect } from "react";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

import { toast } from "react-toastify";

const initialState = {
  success: false,
  message: "",
};

export default function AdoptForm({ adoptRequest, pet, user }) {
  const [state, formAction, pending] = useActionState(
    adoptRequest,
    initialState,
  );

  useEffect(() => {
    if (state?.success) {
      toast.success(state?.message);
    }
  }, [state]);

  return (
    <Form className="space-y-5" action={formAction}>
      <TextField name="petName" isReadOnly defaultValue={pet?.petName}>
        <Label className="mb-2 block text-sm font-semibold text-gray-500">
          Pet Name
        </Label>

        <Input className="w-full rounded-2xl border border-gray-200 bg-gray-100 px-5 py-4 outline-none" />

        <FieldError />
      </TextField>

      <TextField isReadOnly name="userName" defaultValue={user?.name}>
        <Label className="mb-2 block text-sm font-semibold text-gray-500">
          Your Name
        </Label>

        <Input className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none" />

        <FieldError />
      </TextField>

      <TextField
        isReadOnly
        defaultValue={user?.email}
        name="userEmail"
        type="email"
      >
        <Label className="mb-2 block text-sm font-semibold text-gray-500">
          Email Address
        </Label>

        <Input className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none" />

        <FieldError />
      </TextField>

      <TextField isRequired name="pickupDate" type="date">
        <Label className="mb-2 block text-sm font-semibold text-gray-500">
          Pickup Date
        </Label>

        <Input className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none" />

        <FieldError />
      </TextField>

      <TextField isRequired name="message">
        <Label className="mb-2 block text-sm font-semibold text-gray-500">
          Message
        </Label>

        <TextArea
          rows={5}
          placeholder="Tell us why you want to adopt this pet..."
          className="w-full resize-none rounded-3xl border border-gray-300 px-5 py-4 outline-none"
        />

        <FieldError />
      </TextField>

      <Button
        type="submit"
        isLoading={pending}
        isDisabled={user?.email === pet?.ownerEmail}
        className="w-full rounded-2xl bg-[#812800] py-4 text-lg font-bold text-white"
      >
        Submit Adoption Request
      </Button>
    </Form>
  );
}
