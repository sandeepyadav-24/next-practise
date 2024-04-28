import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="my-5 mx-40">
      <ul className="flex flex-row">
        <div className="mx-5">
          <Link href="/">HomePage</Link>
        </div>
        <div className="mx-5">
          <Link href="/about">About</Link>
        </div>
        <div className="mx-5">
          <Link href="/portfolio">Portfolio</Link>
        </div>
        <div className="mx-5">
          <Link href="/contact">Contact</Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
