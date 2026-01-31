import React from "react";
import VideoBackground from "../layout/VideoBackground";

function ContactPage() {
  return (
    <>
      <VideoBackground src="/videos/backgroundVideo.mp4">
        <section className=" flex-col justify-items-center  mt-30 shadow-xl text-shadow-lg ">
          <div className="  bg-white max-w-200 p-6 items-center">
            <h1 className="text-black font-bold text-4xl w-50 p-2 mb-5 bg-white ">
              Contact
            </h1>
            <div className="text-xl bg-black p-4  text-white">
              <p>
                Email :{" "}
                <a href="mailto:josiah.sayles@email.com">
                  Josiah.Sayles@gmail.com
                </a>
              </p>
              <p>📍 Based in the U.S. (Mountain Time)</p>
            </div>
            <hr className="h-[1px] border-0 max-w-175  mb-5  mt-5 bg-emerald-950" />
            <h3 className="text-lg mt-5 font-semibold">
              Let’s build something great together! Currently seeking Fullstack
              / Front-end roles. JavaScript / React.
            </h3>
            <hr className="h-[1px] border-0 max-w-175  mb-5  mt-5 bg-emerald-950" />
            <figure className="flex bg-emerald-950 p-5 justify-center items-center">
              <a
                href="https://www.linkedin.com/in/josiah-sayles/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/img/LinkedInLogoEm.png"
                  alt="LinkedIn Logo link"
                  width="80"
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
                  width="100"
                  className=""
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
                  width="80"
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
                  width="80"
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
