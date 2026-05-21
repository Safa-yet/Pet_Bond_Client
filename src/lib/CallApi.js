// import { revalidatePath } from "next/cache";


export const AllAnimal = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/animal`);
  const data = await res.json();
  console.log(data);
  return data;
};

// export const MyAddAnimal = async(id)=>{
//     const res = await fetch (`${process.env.SERVER_URL}/mypets/${id}`);
//     return res.json();

// }

//   const res = await fetch(`http://localhost:5000/my/${user?.id}`);

//   const data = await res.json();

// console.log(session);

export const getSingleApi = async (id,token) => {


  const res = await fetch(`${process.env.SERVER_URL}/animal/${id}`, {
    headers: {
      authorization: token,
    },
  });
  const data = await res.json();
  return data;
};

export const MyAddAnimal = async (email, token) => {
  const res = await fetch(`${process.env.SERVER_URL}/my-pets/${email}`, {
    headers: {
      authorization: token,
    },

    cache: "no-store",
  });

  return res.json();
};


// For Update
export const UpdatePetApi = async (id,token, updatedData) => {
    const updatedPet= Object.fromEntries(updatedData.entries());

  // request
  const res = await fetch(`${process.env.SERVER_URL}/animal/${id}`, {
    method: "PATCH",

    headers: {
      "Content-Type": "application/json",

      authorization: token,
    },

    body: JSON.stringify(updatedPet),
  }); 

  const data = await res.json();
//    if(data.modifiedCount > 0){
//        revalidatePath(`/dashboard/mylisting`);
//          revalidatePath('/dashboard');
//     }

    console.log(data);

  return data
};

export const addAdoptionRequest = async (adoptInfo, token) => {
  const res = await fetch(
    `${process.env.SERVER_URL}/animal`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        // authorization: token,
      },

      body: JSON.stringify(adoptInfo),
    }
  );

  return res.json();
};

// export const AllAnimal2 = async (search = "", species = "") => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/animal?search=${search}&species=${species}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch animals");
//   }

//   return res.json();
// };

export const getPetRequestsApi =
  async (petId, token) => {
    const res = await fetch(
      `${process.env.SERVER_URL}/adoption-request/${petId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );

    return res.json();
  };