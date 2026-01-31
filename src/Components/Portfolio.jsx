import React from "react";
import VideoBackground from "../layout/VideoBackground";

function Portfolio() {
  return (
    <>
      <VideoBackground src="/videos/backgroundVideo.mp4">
        <section className=" flex-col mt-20 justify-items-center min-h-screen">
          <div className="flex-col text-white justify-items-center max-w-700 bg-black p-6">
            <h1 className="text-white text-4xl mb-10 underline">Projects</h1>
            <h2 className="text-xl font-semibold mb-4 ">
              P1. Diyma Diyma — The Do-It-Yourself Project Management App
              Overview
            </h2>
            <div className="flex bg-emerald-950 ">
              <p className="max-w-100 bg-emerald-950 p-2 mt-5 rounded-md">
                <h3 className="font-semibold">Overview :</h3>
                Diyma is a web-based, intuitive project management application
                built for homeowners and DIY enthusiasts who want to plan,
                organize, and execute home projects with ease. With Diyma, users
                can create an account to manage every aspect of their projects —
                from defining titles, descriptions, timeframes, and budgets to
                listing required materials. The platform streamlines project
                planning and tracking, helping users stay organized, manage
                resources efficiently, and bring their ideas to life with
                confidence.
              </p>
              <div className="flex ml-2">
                <p className="max-w-100 bg-white text-black p-5 rounded-md mt-5 mb-5 mr-2">
                  <h3 className="font-semibold">Problem Solved:</h3>
                  Developed a comprehensive, full-stack web application to solve
                  the common organizational challenges for homeowners and DIY
                  enthusiasts. The platform provides an intuitive system to
                  plan, track, and manage all aspects of home projects,
                  including detailed timelines, budgets, and material lists,
                  while also creating a supportive community for collaboration
                  and inspiration.
                  <div className="font-bold text-xl mt-20 max-w-60 justify-center">
                    <a
                      className="hover:underline p-2"
                      href="https://diyma.netlify.app/"
                    >
                      {" "}
                      Link to Diyma website{" "}
                    </a>
                    <a className="hover:underline p-2 " href="">
                      Link to Github repo
                    </a>
                  </div>
                </p>

                <p className="max-w-100 bg-white text-black p-5 rounded-md mt-5 mb-5">
                  <h4 className="font-semibold">Key Technolgoies:</h4>
                  <h5>Front-End -</h5> React, JavaScript, React Router, HTML,
                  Tailwind CSS / CSS. Demonstrated expertise in developing a
                  scalable, component-based architecture with organized, modular
                  styling. <h6>Back-End- </h6>Node.js, Express. Designed and
                  implemented RESTful APIs for efficient data flow and
                  application logic. Database - PostgreSQL (with PG), SQL.
                  Managed a relational database to support user accounts,
                  project details, materials tracking, and community forum data.{" "}
                  <h6>Architecture -</h6>
                  Architected a component-based application in React with a
                  clean data flow hierarchy, ensuring high readability,
                  maintainability, and code extensibility. <h6>
                    Deployment-
                  </h6>{" "}
                  Managed deployment to production environments using Netlify
                  (Front-End) and Render (Back-End).
                </p>
              </div>
              <video
                autoPlay
                muted
                playsInline
                src="/videos/DiymaPresentation.mp4"
                className="max-w-180 p-2"
              ></video>
            </div>
          </div>
          <hr className="h-[10px] border-0 max-w-175 ml-5 bg-white" />
          <div className="flex-col text-white justify-items-center max-w-500 bg-black p-6">
            <h2 className="text-xl font-semibold mb-4 ">
              P2. Siahville Studios E-commerce website
            </h2>
            <div className="flex bg-emerald-950">
              <p className="max-w-100 bg-emerald-950 p-2 rounded-md mt-5 mr-2 max-h-70">
                <h3 className="font-semibold">Overview :</h3>
                Creating my own personal sticker brand and am in the process of
                creating an e-commerce web based application to host my niche
                sticker collections, future collections to foster and grow my
                brand.
              </p>
              <div className="flex">
                <p className="max-w-100 bg-white text-black p-5 rounded-md mt-5 mr-2  max-h-70">
                  <h4 className="font-semibold">Key Technologies :</h4>
                  JavaScript as my main programming language, React, React
                  router, Express, Postgres SQL, and styling via TailwindCSS and
                  CSS3.
                  <div className="font-bold text-xl mt-20 max-w-70 justify-center">
                    <a className="hover:underline" href="">
                      Link to Github repo
                    </a>
                  </div>
                </p>
                <p className="max-w-100 bg-white text-black p-5 rounded-md mt-5 mr-2 max-h-70">
                  <h4 className="font-semibold">Project Status: In Progress</h4>
                  This project focuses on creating a clean, intuitive shopping
                  experience that highlights original artwork while keeping
                  performance and usability front and center. From UI layout and
                  product presentation to responsive design and cart flow, I’m
                  building this platform end-to-end with scalability and user
                  experience in mind. Looking forward to continuing to refine
                  the design and bringing the full site to launch soon.
                </p>
              </div>
              <figure className="flex ">
                <img
                  src="/img/SiahVille.png"
                  alt="ScreenShot of Siahville Studio Home page"
                  className="max-w-100 p-2"
                />
                <img
                  src="/img/SiahVille2.png"
                  alt="ScreenShot of Siahville Studio sticker page"
                  className="max-w-100 p-2 "
                />
              </figure>
            </div>
          </div>
          <hr className="h-[10px] border-0 max-w-175 ml-5 bg-white" />
          <div className="flex-col text-white justify-items-center max-w-500 bg-black p-6">
            <h2 className="text-xl font-semibold mb-4 ">
              P3. Independent Project – Python UI Data Entry Application
            </h2>
            <div className="flex bg-emerald-950">
              <p className="max-w-100  mt-5  mr-2 bg-emerald-950 p-2 rounded-md">
                <h3 className="font-semibold">Overview :</h3>
                Designed and built a desktop-based graphical user interface
                using Python and Tkinter to collect and manage structured user
                input. Implemented form controls including text inputs,
                dropdowns (Combobox), checkboxes, spinboxes, and validation
                logic.
              </p>
              <div className="flex">
                <p className="max-w-100 bg-white text-black p-5 rounded-md mt-5 mb-5 mr-2">
                  <h4 className="font-semibold">Key Technologies :</h4>
                  <h5>Python</h5>
                  <h6>Tkinter</h6>
                  <h6>
                    (As Python is a new language I’m actively self-learning)
                  </h6>
                  <div className="font-bold text-lg mt-20 max-w-70 justify-center">
                    <a className="hover:underline" href="">
                      Link to Github repo
                    </a>
                  </div>
                </p>
                <p className="max-w-100 bg-white text-black p-5 rounded-md mt-5 mb-5 mr-2">
                  <h4 className="font-semibold">Project Status: Complete </h4>
                  Applied event-driven programming principles to handle user
                  interactions and data submission. Structured the UI using
                  modular frames and grid layouts to ensure readability,
                  scalability, clean separation of concerns. Actively
                  self-learning Python to expand beyond JavaScript-based web
                  development and strengthen cross-language problem-solving
                  skills.
                </p>
                <figure>
                  <img
                    src="/img/PythonUserData.png"
                    alt="ScreenShot of Python Ui Data Collector with code"
                    className="max-w-150 mt-5 mr-2 mb-5 "
                  />
                </figure>
              </div>
            </div>
          </div>
          <hr className="h-[10px] border-0 max-w-175 ml-5 bg-white" />
          <div className="flex-col text-white justify-items-center max-w-500 bg-black p-6">
            <h2 className="text-xl font-semibold mb-4 ">
              P4. Independent Project – Python UI Survey Application
            </h2>
            <div className="flex bg-emerald-950">
              <p className="max-w-100 mt-5 mr-2 bg-emerald-950 p-2 rounded-md">
                <h3 className="font-semibold">Overview :</h3>
                Designed and built a desktop survey application for a pseudo
                company using Python and Tkinter. Implemented structured user
                input fields, multi-question feedback areas, and an interactive
                5-star rating system. Strengthened Python fundamentals while
                expanding beyond JavaScript-based web development.
              </p>
              <div className="flex">
                <p className="max-w-100 bg-white text-black p-5 rounded-md mt-5 mb-5 mr-2">
                  <h4 className="font-semibold">Key Technologies :</h4>
                  <h5>Python</h5>
                  <h6>Tkinter</h6>
                  <h6>
                    (As Python is a new language I’m actively self-learning)
                  </h6>
                  <div className="font-bold text-lg mt-20 max-w-70 justify-center">
                    <a className="hover:underline" href="">
                      Link to Github repo
                    </a>
                  </div>
                </p>
                <p className="max-w-100 bg-white text-black p-5 rounded-md mt-5 mb-5 mr-2">
                  <h4 className="font-semibold">Project Status: Complete </h4>
                  This project has been a great way to reinforce core concepts
                  while applying them to a practical, real-world use case. I’m
                  enjoying the challenge of translating UI/UX ideas into
                  functional Python code and continuing to expand my skill set
                  beyond web development.
                </p>
                <figure>
                  <img
                    src="/img/PythonSurvey.png"
                    alt="ScreenShot of Python Ui Survey with code"
                    className="max-w-150 mt-5 mr-2 mb-5 "
                  />
                </figure>
              </div>
            </div>
          </div>
          <hr className="h-[10px] border-0 max-w-175 ml-5 bg-white" />
          <div className="flex-col text-white justify-items-center max-w-500 bg-black p-6">
            <h2 className="text-xl font-semibold mb-4 ">
              P5. Portfolio Website
            </h2>
            <div className="flex bg-emerald-950">
              <p className="max-w-100 mt-5 mr-2 bg-emerald-950 p-2 rounded-md">
                <h3 className="font-semibold">Overview :</h3>
                Designed and developed a personal portfolio website to showcase
                my technical skill set, highlight current and past projects, and
                provide recruiters, hiring teams, and the general public with an
                easy way to learn more about me and get in contact.
              </p>
              <div className="flex">
                <p className="max-w-100 bg-white text-black p-5 rounded-md mt-5 mb-5 mr-2">
                  <h4 className="font-semibold">Key Technologies :</h4>
                  <p>
                    JavaScript the primary language, HTML5, using React for
                    component based architecture with a organized module styling
                    utilizing TailwindCSS.
                  </p>

                  <div className="font-bold text-lg mt-20 max-w-70 justify-center">
                    <a className="hover:underline" href="">
                      Link to Github repo
                    </a>
                  </div>
                </p>
                <p className="max-w-100 bg-white text-black p-5 rounded-md mt-5 mb-5 mr-2">
                  <h4 className="font-semibold">Project Status: Complete </h4>
                  Built the website using JavaScript and React, leveraging a
                  component-based architecture to promote clean, readable, and
                  maintainable code. The structure was intentionally designed
                  for scalability, allowing new features, pages, and projects to
                  be added efficiently as my portfolio evolves over time.
                </p>
                <figure>
                  <img
                    src="/img/Portfolio.png"
                    alt="ScreenShot of Portfolio home page"
                    className="max-w-150 mt-5 mb-5 mr-2 "
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </VideoBackground>
    </>
  );
}

export default Portfolio;
