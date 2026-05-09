"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/destinations">Destinations</Link></li>
      <li><Link href="/my-bookings">My Bookings</Link></li>
      <li><Link href="/admin">Admin</Link></li>
    </>
  );

  const rLinks = (
    <>
      <li><Link href="/profile">Profile</Link></li>
      <li><Link href="/login">Login</Link></li>
      <li><Link href="/sign-up">Sign up</Link></li>
    </>
  );

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
            />
        </div>
        <ul className="hidden md:flex gap-6 items-center">
          {rLinks}
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