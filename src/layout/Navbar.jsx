import React from "react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full shadow-xl z-50 flex justify-center items-baseline bg-white shadow-lg px-6 py-6 opacity-80 ">
        <div className="flex">
          <NavLink
            to="/"
            className="px-6 text-3xl text-emerald-950 pb-2 hover:underline "
          >
            Home
          </NavLink>
          <NavLink
            to="/About"
            className="px-6 text-3xl text-emerald-950 hover:underline"
          >
            About me
          </NavLink>
          <NavLink
            to="/Contact"
            className="px-6 text-3xl text-emerald-950 hover:underline"
          >
            Contact
          </NavLink>
        </div>
      </header>
    </>
  );
}
