import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import { AddPetInfo } from "@/lib/CallApi";
import AddPetForm from "@/Component/Home Page/AddPetForm";

const AddPet = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const addPet = async (formData) => {
    "use server";

    const fromInfo = Object.fromEntries(formData.entries());

    fromInfo.adopted = false;

    const data = await AddPetInfo(fromInfo);

    if (data?.insertedId) {
      return {
        success: true,
      };
    }

    return {
      success: false,
      message: "Failed To Add Pet",
    };
  };

  return (
    <main className="flex-1 px-6 lg:px-16">
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-pri mb-2">
          Add New Pet
        </h1>

        <p className="text-on-surface-variant text-center">
          Fill in the details below to create a pet profile.
        </p>
      </div>

      <div className="bg-surface border rounded-[32px] shadow-xl overflow-hidden">
        <div className="relative overflow-hidden bg-gradient-to-r from-pri to-sec p-8">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-2">
              Pet Information
            </h2>

            <p className="text-white/80">
              Make your pet profile attractive and informative.
            </p>
          </div>
        </div>

        <AddPetForm addPet={addPet} user={user} />
      </div>
    </main>
  );
};

export default AddPet;