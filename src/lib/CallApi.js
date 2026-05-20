import { headers } from "next/headers";
import { auth } from "./auth";

export const AllAnimal =async ()=>{
    const res = await fetch(`${process.env.SERVER_URL}/animal`);
    const data = await res.json();
    console.log(data);
    return data

}

export const MyAddAnimal = async(id)=>{
    const res = await fetch (`${process.env.SERVER_URL}/mypets/${id}`);
    return res.json();

}

//   const res = await fetch(`http://localhost:5000/my/${user?.id}`);

//   const data = await res.json();


// console.log(session);



export const getSingleApi = async(id)=>{
    const {token} = await auth.api.getToken({
        headers: await headers() 
    });

    console.log("Token from getSingleApi", token);

    const res = await fetch(`${process.env.SERVER_URL}/animal/${id}`,{
        headers: {
            authorization: token,
        }
    });
    const data = await res.json();
    return data;
}



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