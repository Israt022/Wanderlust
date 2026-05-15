"use client";
import { authClient } from "@/lib/auth-client";
import {Button, DateField, Label} from "@heroui/react";
import { Card } from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";

const BookingCard = ({ destination }) => {
    const {_id, price,destinationName,imageUrl,country} = destination;
    const [departureDate,setDepartureDate] = useState(null);
    const { 
          data: session, 
      } = authClient.useSession()
      const user =session?.user;

    const handleBooking = async() => {
        const bookingData = {
            userId : user?.id,
            userImg : user?.image,
            userName : user?.name,
            destinationId: _id,
            departureDate : new Date(departureDate),
            destinationName,
            price,
            imageUrl,
            country
        }

        const {data:tokenData} = await authClient.token();
        console.log(tokenData);
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`,{
            method: "POST",
            headers:{
                'content-type' : 'application/json',
                authorization : `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData),
        })
        const data = await res.json();

        toast.success("Destination booking successfully!")
    }
  return (
    <div>
      <Card className="border my-5 px-6">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-500">Starting from</p>
          <h1 className="text-[#15A1BF] font-bold text-2xl">
            ${price}
          </h1>
          <p className="text-sm text-gray-500">per person</p>
        </div>
        <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
          <Label>Departure Date</Label>
          <DateField.Group>
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
          </DateField.Group>
        </DateField>
        <Button onClick={handleBooking} className={"w-full bg-[#15A1BF] rounded-md"}>Book Now</Button>
      </Card>
    </div>
  );
};

export default BookingCard;
