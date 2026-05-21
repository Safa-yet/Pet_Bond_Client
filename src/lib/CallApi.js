// import { revalidatePath } from "next/cache";

export const AllAnimal = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/animal`,);
  const data = await res.json();
  console.log(data);
  return data;
};

export const MyAddAnimal = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-pets/${id}`);
  return res.json();
};

export const getSingleApi = async (id, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/animal/${id}`, {
    headers: {
      authorization: token,
    },
  });
  const data = await res.json();
  return data;
};

// For Update
export const UpdatePetApi = async (id, token, updatedData) => {
  const updatedPet = Object.fromEntries(updatedData.entries());

  // request
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/animal/${id}`, {
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

  return data;
};

export const addAdoptionRequest = async (adoptInfo, token) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/animal`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      // authorization: token,
    },

    body: JSON.stringify(adoptInfo),
  });

  return res.json();
};

export const getPetRequestsApi = async (petId, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/adoption-request/${petId}`,
    {
      headers: {
        authorization: token,
      },
    },
  );

  return res.json();
};

// export const approveRequestApi = async (id, token) => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/adoption-request/${id}`, {
//     method: "PATCH",

//     headers: {
//       authorization: token,
//     },
//   });

//   return res.json();
// };

export const updateRequestStatusApi = async (
  id,
  petId,
  status,
  token
) => {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/adoption-request/${id}`,
    {
      method: "PATCH",

      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },

      body: JSON.stringify({
        status,
        petId,
      }),
    }
  );

  return res.json();
};




export const getMyAdoptionRequestsApi = async (
  email,
  token
) => {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-adoption-requests/${email}`,
    {
      method: "GET",

      headers: {
        authorization: token,
      },
    }
  );

  return res.json();
};










export const cancelRequestApi = async (
  id,
  token
) => {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/adoption-request/${id}`,
    {
      method: "DELETE",

      headers: {
        authorization: token,
      },
    }
  );

  return res.json();
};