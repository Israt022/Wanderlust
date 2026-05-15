"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { 
      data: session, 
      isPending, //loading state
      error, //error object
      refetch //refetch the session
  } = authClient.useSession()
  const user =session?.user;

  const handleLogout = async()=>{
    await authClient.signOut();
  }

  const links = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/destinations">Destinations</Link></li>
      <li><Link href="/add-destination">Add Destinations</Link></li>
      <li><Link href="/my-bookings">My Bookings</Link></li>
      <li><Link href="/admin">Admin</Link></li>
    </>
  );

  const rLinks = (
    <>
      
      <li><Link href="/login">Login</Link></li>
      <li><Link href="/signup">Sign up</Link></li>
    </>
  );
  const loginL = (
    <>
      <li><Link href="/profile">Profile</Link></li>
      <li>
        <Avatar>
          <Avatar.Image alt="John Doe" src={user?.image} />
          <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
      </li>
      <li>
        <Button onClick={handleLogout} variant="danger" className={"rounded-none"}>Logout</Button>
      </li>
    </>
  )

  
  

  return (
    <nav className="shadow-sm bg-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">

        

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {links}
        </ul>
        {/* Logo */}
        <div>
            <Image
            src="/assets/Wanderlast.png"
            alt="Logo"
            width={140}
            height={60}
            style={{ width: "auto" }}
            />
        </div>
        <ul className="hidden md:flex gap-6 items-center">
          {
            user ? loginL : rLinks
          }
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3">
            {links}
            {rLinks}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;