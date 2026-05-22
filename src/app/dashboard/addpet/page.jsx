
import { redirect } from 'next/navigation';


import { IoCloudUploadOutline } from 'react-icons/io5';
import { Button, FieldError, Form, Input, Label, TextArea, TextField } from '@heroui/react';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { toast } from 'react-toastify';
import { AddPetInfo } from '@/lib/CallApi';

const AddPet = async() => {
  
const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const user = session?.user;
console.log(session);
  const addPet = async (formData) => {

    'use server';
    const fromInfo = Object.fromEntries(formData.entries());

  fromInfo.adopted = false;
    console.log('Form Data:', fromInfo);
   return await AddPetInfo(fromInfo)
    if (data.insertedId) {
      toast
      redirect('/dashboard/mylisting');
    }


    console.log('Response:', data);

    // return data;

  }

  return (
    <main className="flex-1  px-6 lg:px-16">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-pri mb-2">
          Add New Pet
        </h1>

        <p className="text-on-surface-variant text-center">
          Fill in the details below to create a pet profile.
        </p>
      </div>

      {/* Form Container */}
      <div className="bg-surface border border-outline-variant/20 rounded-[32px] shadow-xl overflow-hidden">

        {/* Top Banner */}
        <div className="relative overflow-hidden bg-gradient-to-r from-pri to-sec p-8">

          <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2">
              Pet Information
            </h2>

            <p className="text-white/80">
              Make your pet profile attractive and informative.
            </p>
          </div>
        </div>

        {/* Form */}
        <Form
          action={addPet}
          className="space-y-6 p-4 lg:p-8"
        >

          {/* Pet Name + Species */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Pet Name */}
            {/* useremail requir field */}
            <TextField
              isRequired
              name="ownerEmail"
              type="text"
              defaultValue={user.email}
              isReadOnly

            >
              <Label className="text-sm font-semibold text-on-surface-variant ml-2 mb-2 block">
                User Email
              </Label>

              <Input
                // defaultValue={userEmail || "Safayet#15gamilbaskldf"}
                className="
          w-full h-14 px-6 rounded-2xl
          bg-surface-container border border-outline-variant/20
          outline-none transition-all duration-300
          focus:ring-2 focus:ring-pri
        "
              />

              <FieldError className="text-red-500 text-sm mt-2 ml-2" />
            </TextField>
            <TextField
              isRequired
              name="petName"
              type="text"
            >
              <Label className="text-sm font-semibold text-on-surface-variant ml-2 mb-2 block">
                Pet Name
              </Label>

              <Input
                placeholder="Bella"
                className="
          w-full h-14 px-6 rounded-2xl
          bg-surface-container border border-outline-variant/20
          outline-none transition-all duration-300
          focus:ring-2 focus:ring-pri
        "
              />

              <FieldError className="text-red-500 text-sm mt-2 ml-2" />
            </TextField>

            {/* Species */}
            <TextField
              isRequired
              name="species"
            >
              <Label className="text-sm font-semibold text-on-surface-variant ml-2 mb-2 block">
                Species
              </Label>

              <select
                name="species"
                className="
          w-full h-14 px-6 rounded-2xl
          bg-surface-container border border-outline-variant/20
          outline-none transition-all duration-300
          focus:ring-2 focus:ring-pri
        "
              >
                <option>Dog</option>
                <option>Cat</option>
                <option>Bird</option>
                <option>Rabbit</option>
              </select>
            </TextField>
          </div>

          {/* Breed + Age */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Breed */}
            <TextField
              isRequired
              name="breed"
              type="text"
            >
              <Label className="text-sm font-semibold text-on-surface-variant ml-2 mb-2 block">
                Breed
              </Label>

              <Input
                placeholder="Golden Retriever"
                className="
          w-full h-14 px-6 rounded-2xl
          bg-surface-container border border-outline-variant/20
          outline-none transition-all duration-300
          focus:ring-2 focus:ring-pri
        "
              />

              <FieldError className="text-red-500 text-sm mt-2 ml-2" />
            </TextField>

            {/* Age */}
            <TextField
              isRequired
              name="age"
              type="number"
            >
              <Label className="text-sm font-semibold text-on-surface-variant ml-2 mb-2 block">
                Age
              </Label>

              <Input
                placeholder="3"
                className="
          w-full h-14 px-6 rounded-2xl
          bg-surface-container border border-outline-variant/20
          outline-none transition-all duration-300
          focus:ring-2 focus:ring-pri
        "
              />

              <FieldError className="text-red-500 text-sm mt-2 ml-2" />
            </TextField>
          </div>

          {/* Gender + Health */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Gender */}
            <TextField
              isRequired
              name="gender"
            >
              <Label className="text-sm font-semibold text-on-surface-variant ml-2 mb-2 block">
                Gender
              </Label>

              <select
                name="gender"
                className="
          w-full h-14 px-6 rounded-2xl
          bg-surface-container border border-outline-variant/20
          outline-none transition-all duration-300
          focus:ring-2 focus:ring-pri
        "
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </TextField>

            {/* Health Status */}
            <TextField
              isRequired
              name="healthStatus"
            >
              <Label className="text-sm font-semibold text-on-surface-variant ml-2 mb-2 block">
                Health Status
              </Label>

              <select
                name="healthStatus"
                className="
          w-full h-14 px-6 rounded-2xl
          bg-surface-container border border-outline-variant/20
          outline-none transition-all duration-300
          focus:ring-2 focus:ring-pri
        "
              >
                <option>Healthy</option>
                <option>Needs Treatment</option>
                <option>Special Care</option>
              </select>
            </TextField>
          </div>

          {/* Vaccination + Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Vaccination */}
            <TextField
              isRequired
              name="vaccinationStatus"
            >
              <Label className="text-sm font-semibold text-on-surface-variant ml-2 mb-2 block">
                Vaccination Status
              </Label>

              <select
                name="vaccinationStatus"
                className="
          w-full h-14 px-6 rounded-2xl
          bg-surface-container border border-outline-variant/20
          outline-none transition-all duration-300
          focus:ring-2 focus:ring-pri
        "
              >
                <option>Vaccinated</option>
                <option>Not Vaccinated</option>
              </select>
            </TextField>

            {/* Location */}
            <TextField
              isRequired
              name="location"
              type="text"
            >
              <Label className="text-sm font-semibold text-on-surface-variant ml-2 mb-2 block">
                Location
              </Label>

              <Input
                placeholder="Dhaka"
                className="
          w-full h-14 px-6 rounded-2xl
          bg-surface-container border border-outline-variant/20
          outline-none transition-all duration-300
          focus:ring-2 focus:ring-pri
        "
              />

              <FieldError className="text-red-500 text-sm mt-2 ml-2" />
            </TextField>
          </div>

          {/* Image URL */}
          <TextField
            isRequired
            name="image"
            type="url"
          >
            <Label className="text-sm font-semibold text-on-surface-variant ml-2 mb-2 block">
              Pet Image URL
            </Label>

            <Input
              placeholder="https://example.com/image.jpg"
              className="
        w-full h-14 px-6 rounded-2xl
        bg-surface-container border border-outline-variant/20
        outline-none transition-all duration-300
        focus:ring-2 focus:ring-pri
      "
            />

            <FieldError className="text-red-500 text-sm mt-2 ml-2" />
          </TextField>

          {/* Adoption Fee */}
          <TextField
            isRequired
            name="adoptionFee"
            type="number"
          >
            <Label className="text-sm font-semibold text-on-surface-variant ml-2 mb-2 block">
              Adoption Fee
            </Label>

            <Input
              placeholder="5000"
              className="
        w-full h-14 px-6 rounded-2xl
        bg-surface-container border border-outline-variant/20
        outline-none transition-all duration-300
        focus:ring-2 focus:ring-pri
      "
            />

            <FieldError className="text-red-500 text-sm mt-2 ml-2" />
          </TextField>

          {/* Description */}
          <TextField
            isRequired
            name="description"
            type="text"
          >
            <Label className="text-sm font-semibold text-on-surface-variant ml-2 mb-2 block">
              Description
            </Label>

            <textarea
              name="description"
              rows={5}
              placeholder="Friendly and energetic dog who loves playing with kids."
              className="
        w-full p-5 rounded-3xl
        bg-surface-container border border-outline-variant/20
        outline-none resize-none
        focus:ring-2 focus:ring-pri
      "
            />

            <FieldError className="text-red-500 text-sm mt-2 ml-2" />
          </TextField>

          {/* Submit */}
          <Button
            type="submit"
            className="
      w-full h-14 rounded-2xl
      bg-pri text-white font-bold text-lg
      hover:opacity-90 transition-all duration-300
    "
          >
            Add Pet
          </Button>
        </Form>
      </div>
    </main>
  );
};

export default AddPet;