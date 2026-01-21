import React from "react";
import VideoBackground from "../layout/VideoBackground";
import { Link } from "react-router";

function HomePage() {
  return (
    <>
      <VideoBackground src="/videos/backgroundVideo.mp4">
        <section className=" flex mt-40 justify-center min-h-screen">
          <div>
            <figure className="mr-20 mt-10">
              <img
                src="/img/Profile.picture.jpg"
                alt="Photo of Josiah in suit"
              />
              <hr className="h-[1px] mt-10 mb-3 border-0 w-full bg-emerald-950" />
            </figure>
            <div className="flex justify-center">
              <p className="text-black text-2xl max-w-100 mt-10 bg-white italic  p-5 shadowed-xl text-shadow-md">
                "The hardest thing to do is to be true to yourself, especially
                when everybody is watching."- Dave Chappelle
              </p>
            </div>
          </div>
          <div className="">
            <h1 className="bg-black  flex justify-start pl-20  text-white font-bold text-8xl ">
              Josiah Sayles
            </h1>
            <hr className="h-[1px] border-0 max-w-175 ml-5 bg-white" />
            <h2 className="bg-black  flex text-emerald-950 text-7xl pl-5 py-2">
              Front-End | FullStack Web Developer
            </h2>
            <hr className="h-[1px] border-0 w-full bg-white mt-8" />
            <div className="flex justify-center">
              <p className="text-black text-2xl max-w-220 mt-10 bg-white   font-semibold p-5 shadowed-xl text-shadow-md">
                Full-Stack Web Developer focused on building clean, user-driven
                web applications. Experienced in React, JavaScript, and Python
                with a passion for learning and shipping real projects. I aim to
                grow both personally and professionally.
              </p>
            </div>

            <hr className="h-[1px] mt-10 mr-100  mb-3 border-0 max-w-200 bg-white" />
            <div className="flex items-center bg-black text-xl text-white pl-10 pb-5 pt-2 w-max-50 font-semibold">
              <div>
                <p className="font-semibold underline">Featured Projects:</p>
                <p>Pyhton Survey UI | Python, Tkinter</p>
                <p>
                  Siahville Sticker E-commerce Site | React, TailwindCSS, JS
                </p>
                <p>
                  DIYMA Fullstack Web App | React, JS, PostgresSQL, Express,
                  Node.js, TailwindCSS
                </p>
              </div>
              <Link to="/Portfolio">
                <button className="bg-black text-white border p-2 ml-15 max-h-20 rounded-md mt-2 cursor:pointer hover:bg-white hover:text-black">
                  View Projects
                </button>
              </Link>
            </div>

            <hr className="h-[1px] mt-10 ml-100 mb-5 border-0 max-w-200 bg-emerald-950" />
            <div className="flex justify-center">
              <div className=" items-center bg-emerald-950  p-5 shadowed-xl mt-10 ml-10 text-shadow-lg">
                <p className="text-white text-2xl max-w-100 font-semibold text-shadow-md  ">
                  Fullstack web development professional with expertise in
                  e-commerce, sales and customer service gained in the sales and
                  hospitality industry.
                </p>
                <p className="text-white text-2xl max-w-100 font-semibold text-shadow-md  mt-5">
                  Located in Denver Co, currently open to positons Remote or
                  Onsight.
                </p>
              </div>
              <div className="bg-emerald-950 p-8 ml-10  flex-col justify-items-center">
                <p className="text-3xl text-white font-bold mb-2 underline">
                  Technical Skills:
                </p>
                <ul className="flex-col flex-wrap font-semibold text-1xl text-white list-disc pl-10">
                  <li>JavaScript, </li>
                  <li>React, </li>
                  <li>SQL, </li>
                  <li>PostgresSQL, </li>
                  <li>HTML5, </li>
                  <li>CSS3, </li>
                  <li>Node.js, </li>
                  <li>Express.js, </li>
                  <li>GitHub, </li>
                  <li>Vitest, </li>
                  <li>TailwindCSS</li>
                  <li>Python (UI development, self-directed)</li>
                </ul>
              </div>
            </div>

            <hr className="h-[1px] border-0 max-w-175 ml-5 bg-white mt-5" />
            <div className="text-white text-2xl flex justify-center mt-15  font-semibold  ">
              <p>
                <a
                  href="/Josiah_Sayles_Resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border p-2  bg-black hover:bg-white hover:text-black rounded-lg"
                >
                  Download Resume
                </a>
              </p>
            </div>
          </div>
        </section>
      </VideoBackground>
    </>
  );
}

export default HomePage;
