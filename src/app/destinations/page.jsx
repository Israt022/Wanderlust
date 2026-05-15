import DestinationCard from "@/components/DestinationCard";

const Destinations = async() => {
    const res = await fetch(`${process.env.SERVER_URL}/destination`);
    const destinations = await res.json();
    return (
        <div className='container mx-auto'>
            <h1 className='text-2xl font-bold text-center my-2'>Total Destinations</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination} />)
                }
            </div>
        </div>
    );
};

export default Destinations;