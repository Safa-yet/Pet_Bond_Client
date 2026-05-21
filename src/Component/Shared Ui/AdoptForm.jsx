"use client";

import {
  Form,
  TextField,
  Label,
  Input,
  TextArea,
  FieldError,
  Button,
} from "react-aria-components";

import { addAdoptionRequest } from "@/lib/CallApi";

const AdoptForm = ({ pet, token }) => {
  const handleAdoption = async (e) => {
    e.preventDefault();

    const form = e.target;

    const adoptInfo = {
      petId: pet?._id,

      petName: pet?.petName,

      ownerEmail: pet?.email,

      userName: form.userName.value,

      userEmail: form.userEmail.value,

      pickupDate: form.pickupDate.value,

      message: form.message.value,
    };

    console.log(adoptInfo);

    try {
      const data = await addAdoptionRequest(
        adoptInfo,
        token
      );

      console.log(data);

      if (data.insertedId) {
        alert("Adoption Request Submitted");

        form.reset();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      className="space-y-5"
      onSubmit={handleAdoption}
    >
      <TextField
        name="petName"
        isReadOnly
        defaultValue={pet?.petName}
      >
        <Label className="mb-2 block text-sm font-semibold text-gray-500">
          Pet Name
        </Label>

        <Input className="w-full rounded-2xl border border-gray-200 bg-gray-100 px-5 py-4 outline-none" />

        <FieldError />
      </TextField>

      <TextField
        isRequired
        name="userName"
      >
        <Label className="mb-2 block text-sm font-semibold text-gray-500">
          Your Name
        </Label>

        <Input
          placeholder="Enter your name"
          className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none"
        />

        <FieldError />
      </TextField>

      <TextField
        isRequired
        name="userEmail"
        type="email"
      >
        <Label className="mb-2 block text-sm font-semibold text-gray-500">
          Email Address
        </Label>

        <Input
          placeholder="Enter your email"
          className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none"
        />

        <FieldError />
      </TextField>

      <TextField
        isRequired
        name="pickupDate"
        type="date"
      >
        <Label className="mb-2 block text-sm font-semibold text-gray-500">
          Pickup Date
        </Label>

        <Input className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none" />

        <FieldError />
      </TextField>

      <TextField
        isRequired
        name="message"
      >
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
        className="w-full rounded-2xl bg-[#812800] py-4 text-lg font-bold text-white"
      >
        Submit Adoption Request
      </Button>
    </Form>
  );
};

export default AdoptForm;