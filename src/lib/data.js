export const createData = async()=> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
}