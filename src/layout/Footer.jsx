import React from "react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <footer className=" left-0 w-full shadow-xl z-50 flex justify-center items-baseline bg-white shadow-lg mt-2 ">
        <figure className="flex items-center">
          <a
            href="https://www.linkedin.com/in/josiah-sayles/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/LinkedInLogoEm.png"
              alt="LinkedIn Logo link"
              width="100"
            />
          </a>

          <a
            href="https://www.instagram.com/siahvillestudio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/img/Insta.png" alt="Instagram logo link" width="100" />
          </a>

          <a
            href="https://github.com/JosiahSayles"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/GitHub-Logo.png"
              alt="GitHub logo link"
              width="120"
              className=""
            />
          </a>
        </figure>
      </footer>
    </>
  );
}
