import React from "react";
import VideoBackground from "../layout/VideoBackground";

function ContactPage() {
  return (
    <>
      <VideoBackground src="/videos/backgroundVideo.mp4">
        <section className="flex flex-col items-center mt-8 shadow-xl text-shadow-lg z-10">
          <div className="bg-white w-full max-w-md md:max-w-3xl p-6 items-center">
            <h1 className="text-black font-bold text-3xl md:text-4xl w-full p-2 mb-5 bg-white text-center md:text-left">
              Contact
            </h1>
            <div className="text-lg md:text-xl bg-black p-4 text-white w-full">
              <p>
                Email:{" "}
                <a href="mailto:josiah.sayles@email.com">
                  Josiah.Sayles@gmail.com
                </a>
              </p>
              <p>📍 Based in the U.S. (Mountain Time)</p>
            </div>
            <hr className="h-[1px] border-0 max-w-175 mb-5 mt-5 bg-emerald-950" />
            <h3 className="text-base md:text-lg mt-5 font-semibold">
              Let’s build something great together! Currently seeking Fullstack
              / Front-end roles. JavaScript / React.
            </h3>
            <hr className="h-[1px] border-0 max-w-175 mb-5 mt-5 bg-emerald-950" />
            <figure className="flex flex-wrap gap-4 bg-emerald-950 p-5 justify-center items-center">
              <a
                href="https://www.linkedin.com/in/josiah-sayles/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/LinkedInLogoEm.png"
                  alt="LinkedIn Logo link"
                  className="w-16 md:w-20"
                />
              </a>

              <a
                href="https://github.com/JosiahSayles"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/GitHub-Logo.png"
                  alt="GitHub logo link"
                  className="w-20 md:w-24"
                />
              </a>
              <a
                href="/Josiah_Sayles_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/resume-7.png"
                  alt="Resume download link"
                  className="w-16 md:w-20"
                />
              </a>
              <a
                href="https://www.instagram.com/siahvillestudio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/Insta.png"
                  alt="Instagram logo link"
                  className="w-16 md:w-20"
                />
              </a>
            </figure>
          </div>
        </section>
      </VideoBackground>
    </>
  );
}

export default ContactPage;
