"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

export default function AddPetForm({ addPet, user }) {
  const router = useRouter();

  const handleSubmit = async (formData) => {
    const res = await addPet(formData);

    if (res?.success) {
      toast.success("Pet Added Successfully 🐾");

      router.push("/dashboard/mylisting");
    } else {
      toast.error(res?.message || "Failed To Add Pet");
    }
  };

  return (
    <Form
      action={handleSubmit}
      className="space-y-6 p-4 lg:p-8"
    >
      {/* Pet Name + Species */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* USER EMAIL */}
        <TextField
          isRequired
          name="ownerEmail"
          type="text"
          defaultValue={user.email}
          isReadOnly
        >
          <Label className="text-sm font-semibold ml-2 mb-2 block">
            User Email
          </Label>

          <Input
            className="
              w-full h-14 px-6 rounded-2xl
            "
          />

          <FieldError />
        </TextField>

        {/* PET NAME */}
        <TextField
          isRequired
          name="petName"
          type="text"
        >
          <Label className="text-sm font-semibold ml-2 mb-2 block">
            Pet Name
          </Label>

          <Input placeholder="Bella" />

          <FieldError />
        </TextField>
      </div>

      {/* Species */}
      <div>
        <Label className="text-sm font-semibold ml-2 mb-2 block">
          Species
        </Label>

        <select
          name="species"
          className="
            w-full h-14 px-6 rounded-2xl
            border
          "
        >
          <option>Dog</option>
          <option>Cat</option>
          <option>Bird</option>
          <option>Rabbit</option>
        </select>
      </div>

      {/* Breed */}
      <TextField
        isRequired
        name="breed"
        type="text"
      >
        <Label className="text-sm font-semibold ml-2 mb-2 block">
          Breed
        </Label>

        <Input placeholder="Golden Retriever" />

        <FieldError />
      </TextField>

      {/* Age */}
      <TextField
        isRequired
        name="age"
        type="number"
      >
        <Label className="text-sm font-semibold ml-2 mb-2 block">
          Age
        </Label>

        <Input placeholder="3" />

        <FieldError />
      </TextField>

      {/* Gender */}
      <div>
        <Label className="text-sm font-semibold ml-2 mb-2 block">
          Gender
        </Label>

        <select
          name="gender"
          className="
            w-full h-14 px-6 rounded-2xl
            border
          "
        >
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>

      {/* Health */}
      <div>
        <Label className="text-sm font-semibold ml-2 mb-2 block">
          Health Status
        </Label>

        <select
          name="healthStatus"
          className="
            w-full h-14 px-6 rounded-2xl
            border
          "
        >
          <option>Healthy</option>
          <option>Needs Treatment</option>
          <option>Special Care</option>
        </select>
      </div>

      {/* Vaccination */}
      <div>
        <Label className="text-sm font-semibold ml-2 mb-2 block">
          Vaccination Status
        </Label>

        <select
          name="vaccinationStatus"
          className="
            w-full h-14 px-6 rounded-2xl
            border
          "
        >
          <option>Vaccinated</option>
          <option>Not Vaccinated</option>
        </select>
      </div>

      {/* Location */}
      <TextField
        isRequired
        name="location"
        type="text"
      >
        <Label className="text-sm font-semibold ml-2 mb-2 block">
          Location
        </Label>

        <Input placeholder="Dhaka" />

        <FieldError />
      </TextField>

      {/* Image */}
      <TextField
        isRequired
        name="image"
        type="url"
      >
        <Label className="text-sm font-semibold ml-2 mb-2 block">
          Pet Image URL
        </Label>

        <Input placeholder="https://example.com/image.jpg" />

        <FieldError />
      </TextField>

      {/* Fee */}
      <TextField
        isRequired
        name="adoptionFee"
        type="number"
      >
        <Label className="text-sm font-semibold ml-2 mb-2 block">
          Adoption Fee
        </Label>

        <Input placeholder="5000" />

        <FieldError />
      </TextField>

      {/* Description */}
      <div>
        <Label className="text-sm font-semibold ml-2 mb-2 block">
          Description
        </Label>

        <textarea
          name="description"
          rows={5}
          placeholder="Friendly and energetic dog..."
          className="
            w-full p-5 rounded-3xl
            border resize-none
          "
        />
      </div>

      {/* SUBMIT */}
      <Button
        type="submit"
        className="
          w-full h-14 rounded-2xl
          bg-pri text-white
          font-bold text-lg
        "
      >
        Add Pet
      </Button>
    </Form>
  );
}