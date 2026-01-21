import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <footer className=" left-0 w-full shadow-xl z-50 flex justify-center items-baseline bg-black shadow-lg px-6 py-6  ">
        <figure className="flex">
          <a href="https://www.linkedin.com/in/josiah-sayles/">
            <img src="/img/linkedin.webp" alt="LinkedIn Logo link" width="50" />
          </a>

          <a href="https://www.instagram.com/siahvillestudio/">
            <img
              src="/img/Instagram-Logo.png"
              alt="Instagram logo link"
              width="100"
            />
          </a>
        </figure>
      </footer>
    </>
  );
}
