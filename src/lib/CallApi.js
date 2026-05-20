
export const AllAnimal =async ()=>{
    const res = await fetch(`${process.env.SERVER_URL}/animal`);
    const data = await res.json();
    console.log(data);
    return data

}