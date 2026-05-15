export const createData = async()=> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
}

export const getFeatured = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
    const data = await res.json();

    return data;
}