import React, { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="top-0 left-0 w-full shadow-xl z-50 bg-white opacity-95">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <NavLink
            to="/"
            className="text-2xl md:text-3xl text-emerald-950 font-semibold"
          >
            Home
          </NavLink>

          <nav className="hidden md:flex space-x-6 items-baseline">
            <NavLink
              to="/Portfolio"
              className="text-3xl text-emerald-950 hover:underline"
            >
              Projects
            </NavLink>
            <NavLink
              to="/About"
              className="text-3xl text-emerald-950 hover:underline"
            >
              About me
            </NavLink>
            <NavLink
              to="/Contact"
              className="text-3xl text-emerald-950 hover:underline"
            >
              Contact
            </NavLink>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md text-emerald-950"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t border-emerald-100">
            <div className="flex flex-col px-4 py-3 space-y-2">
              <NavLink
                onClick={() => setOpen(false)}
                to="/Portfolio"
                className="text-lg text-emerald-950"
              >
                Projects
              </NavLink>
              <NavLink
                onClick={() => setOpen(false)}
                to="/About"
                className="text-lg text-emerald-950"
              >
                About me
              </NavLink>
              <NavLink
                onClick={() => setOpen(false)}
                to="/Contact"
                className="text-lg text-emerald-950"
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
