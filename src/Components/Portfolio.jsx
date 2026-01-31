import React from "react";
import VideoBackground from "../layout/VideoBackground";

function Portfolio() {
  return (
    <>
      <VideoBackground src="/videos/backgroundVideo.mp4">
        <section className="flex flex-col mt-20 justify-items-center items-center min-h-screen mb-10 px-4 md:px-0">
          <div className="flex flex-col text-white justify-items-center max-w-500 bg-black p-6">
            <h1 className="text-white text-4xl mb-10 underline">Projects</h1>

            <h2 className="text-xl font-semibold mb-4 ">
              P1. Diyma Diyma — The Do-It-Yourself Project Management App
              Overview
            </h2>

            <div className="flex flex-col  md:flex-row bg-emerald-950">
              <div className="w-full md:w-1/4 p-2 bg-emerald-950 rounded-md mt-5">
                <h3 className="font-semibold mb-2">Overview :</h3>
                <p>
                  Diyma is a web-based, intuitive project management application
                  built for homeowners and DIY enthusiasts who want to plan,
                  organize, and execute home projects with ease. With Diyma,
                  users can create an account to manage every aspect of their
                  projects — from defining titles, descriptions, timeframes, and
                  budgets to listing required materials.
                </p>
              </div>

              <div className="w-full md:w-2/3 flex flex-col p-2 md:pl-4">
                <div className="bg-white text-black p-5 rounded-md mt-5 mb-5">
                  <h3 className="font-semibold">Problem Solved:</h3>
                  <p>
                    Developed a comprehensive, full-stack web application to
                    solve the common organizational challenges for homeowners
                    and DIY enthusiasts. The platform provides an intuitive
                    system to plan, track, and manage all aspects of home
                    projects, including detailed timelines, budgets, and
                    material lists, while also creating a supportive community
                    for collaboration and inspiration.
                  </p>

                  <div className="font-bold text-cyan-700 text-xl mt-6 flex gap-4">
                    <a
                      className="hover:underline"
                      href="https://diyma.netlify.app/"
                    >
                      Link to Diyma website
                    </a>
                    <a className="hover:underline" href="">
                      Link to Github repo
                    </a>
                  </div>
                </div>

                <div className="bg-white text-black p-5 rounded-md mt-2">
                  <h4 className="font-semibold">Key Technologies:</h4>
                  <p>
                    Front-End - React, JavaScript, React Router, HTML, Tailwind
                    CSS / CSS. Demonstrated expertise in developing a scalable,
                    component-based architecture with organized, modular
                    styling. Back-End- Node.js, Express. Designed and
                    implemented RESTful APIs for efficient data flow and
                    application logic. Database - PostgreSQL (with PG), SQL.
                    Managed a relational database to support user accounts,
                    project details, materials tracking, and community forum
                    data. Architecture - Architected a component-based
                    application in React with a clean data flow hierarchy,
                    ensuring high readability, maintainability, and code
                    extensibility. Deployment- Managed deployment to production
                    environments using Netlify (Front-End) and Render (Back-End)
                  </p>
                </div>
              </div>

              <div className="w-full md:w-2/4 p-2 flex justify-center items-start mt-5">
                <video
                  autoPlay
                  muted
                  playsInline
                  src="/videos/DiymaOverview.mp4"
                  className="w-full md:w-full max-w-220 p-2 object-cover rounded"
                />
              </div>
            </div>
          </div>

          <hr className="h-[10px] border-0 max-w-175 ml-5 bg-white my-6" />

          <div className="flex flex-col text-white justify-items-center max-w-500 bg-black p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4 ">
              P2. Siahville Studios E-commerce website
            </h2>

            <div className="flex flex-col md:flex-row bg-emerald-950">
              <div className="w-full md:w-1/4 p-2 bg-emerald-950 rounded-md mt-5">
                <h3 className="font-semibold">Overview :</h3>
                <p>
                  Creating my own personal sticker brand and am in the process
                  of creating an e-commerce web based application to host my
                  niche sticker collections, future collections to foster and
                  grow my brand.
                </p>
              </div>

              <div className="w-full md:w-1/2 p-2">
                <div className="bg-white text-black p-5 rounded-md mt-5">
                  <h4 className="font-semibold">Key Technologies :</h4>
                  <p>
                    JavaScript, React, Express, Postgres SQL, TailwindCSS, CSS3.
                  </p>
                  <div className="font-bold text-xl text-cyan-700 mt-6">
                    <a className="hover:underline" href="">
                      Link to Github repo
                    </a>
                  </div>
                </div>

                <div className="bg-white text-black p-5 rounded-md mt-4">
                  <h4 className="font-semibold">Project Status: In Progress</h4>
                  <p>
                    This project focuses on creating a clean, intuitive shopping
                    experience that highlights original artwork while keeping
                    performance and usability front and center. From UI layout
                    and product presentation to responsive design and cart flow,
                    I’m building this platform end-to-end with scalability and
                    user experience in mind. Looking forward to continuing to
                    refine the design and bringing the full site to launch soon.
                  </p>
                </div>
              </div>

              <figure className="w-full md:w-1/4 flex gap-2 p-2 mt-5">
                <img
                  src="/img/SiahVille.png"
                  alt="ScreenShot of Siahville Studio Home page"
                  className="w-1/2 md:w-full p-2 object-cover rounded"
                />
                <img
                  src="/img/SiahVille2.png"
                  alt="ScreenShot of Siahville Studio sticker page"
                  className="w-1/2 md:w-full p-2 object-cover rounded lg:hidden"
                />
              </figure>
            </div>
          </div>

          <hr className="h-[10px] border-0 max-w-175 ml-5 bg-white my-6" />

          <div className="flex flex-col text-white justify-items-center max-w-500 bg-black p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4 ">
              P3. Independent Project – Python UI Data Entry Application
            </h2>

            <div className="flex flex-col md:flex-row bg-emerald-950">
              <div className="w-full md:w-1/4 p-2 bg-emerald-950 rounded-md mt-5">
                <h3 className="font-semibold">Overview :</h3>
                <p>
                  Designed and built a desktop-based graphical user interface
                  using Python and Tkinter to collect and manage structured user
                  input.
                </p>
              </div>

              <div className="w-full md:w-1/2 p-2">
                <div className="bg-white text-black p-5 rounded-md mt-5">
                  <h4 className="font-semibold">Key Technologies :</h4>
                  <p>Python, Tkinter</p>
                  <div className="font-bold text-lg text-cyan-700 mt-6">
                    <a className="hover:underline" href="">
                      Link to Github repo
                    </a>
                  </div>
                </div>

                <div className="bg-white text-black p-5 rounded-md mt-4">
                  <h4 className="font-semibold">Project Status: Complete </h4>
                  <p>
                    Applied event-driven programming principles to handle user
                    interactions and data submission. Structured the UI using
                    modular frames and grid layouts to ensure readability,
                    scalability, clean separation of concerns. Actively
                    self-learning Python to expand beyond JavaScript-based web
                    development and strengthen cross-language problem-solving
                    skills.
                  </p>
                </div>
              </div>

              <figure className="w-full md:w-1/4 p-2 mt-5">
                <img
                  src="/img/PythonUserData.png"
                  alt="ScreenShot of Python Ui Data Collector with code"
                  className="w-full object-cover rounded"
                />
              </figure>
            </div>
          </div>

          <hr className="h-[10px] border-0 max-w-175 ml-5 bg-white my-6" />

          <div className="flex flex-col text-white justify-items-center max-w-500 bg-black p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4 ">
              P4. Independent Project – Python UI Survey Application
            </h2>

            <div className="flex flex-col md:flex-row bg-emerald-950">
              <div className="w-full md:w-1/4 p-2 bg-emerald-950 rounded-md mt-5">
                <h3 className="font-semibold">Overview :</h3>
                <p>
                  Designed and built a desktop survey application for a pseudo
                  company using Python and Tkinter. Implemented structured user
                  input fields, multi-question feedback areas, and an
                  interactive 5-star rating system. Strengthened Python
                  fundamentals while expanding beyond JavaScript-based web
                  development.
                </p>
              </div>

              <div className="w-full md:w-1/2 p-2">
                <div className="bg-white text-black p-5 rounded-md mt-5">
                  <h4 className="font-semibold">Key Technologies :</h4>
                  <p>Python, Tkinter</p>
                  <div className="font-bold text-lg text-cyan-700 mt-6">
                    <a className="hover:underline" href="">
                      Link to Github repo
                    </a>
                  </div>
                </div>

                <div className="bg-white text-black p-5 rounded-md mt-4">
                  <h4 className="font-semibold">Project Status: Complete </h4>
                  <p>
                    This project has been a great way to reinforce core concepts
                    while applying them to a practical, real-world use case. I’m
                    enjoying the challenge of translating UI/UX ideas into
                    functional Python code and continuing to expand my skill set
                    beyond web development.
                  </p>
                </div>
              </div>

              <figure className="w-full md:w-1/4 p-2 mt-5">
                <img
                  src="/img/PythonSurvey.png"
                  alt="ScreenShot of Python Ui Survey with code"
                  className="w-full object-cover rounded"
                />
              </figure>
            </div>
          </div>

          <hr className="h-[10px] border-0 max-w-175 ml-5 bg-white my-6" />

          <div className="flex flex-col text-white justify-items-center max-w-500 bg-black p-6 mt-6">
            <h2 className="text-xl font-semibold mb-4 ">
              P5. Portfolio Website
            </h2>

            <div className="flex flex-col md:flex-row bg-emerald-950">
              <div className="w-full md:w-1/4 p-2 bg-emerald-950 rounded-md mt-5">
                <h3 className="font-semibold">Overview :</h3>
                <p>
                  Designed and developed a personal portfolio website to
                  showcase my technical skill set, highlight current and past
                  projects, and provide recruiters, hiring teams, and the
                  general public with an easy way to learn more about me and get
                  in contact.
                </p>
              </div>

              <div className="w-full md:w-1/2 p-2">
                <div className="bg-white text-black p-5 rounded-md mt-5">
                  <h4 className="font-semibold">Key Technologies :</h4>
                  <p>
                    JavaScript the primary language, HTML5, using React for
                    component based architecture with a organized module styling
                    utilizing TailwindCSS.
                  </p>
                  <div className="font-bold text-lg text-cyan-700 mt-6">
                    <a className="hover:underline" href="">
                      Link to Github repo
                    </a>
                  </div>
                </div>

                <div className="bg-white text-black p-5 rounded-md mt-4">
                  <h4 className="font-semibold">Project Status: Complete </h4>
                  <p>
                    Built the website using JavaScript and React, leveraging a
                    component-based architecture to promote clean, readable, and
                    maintainable code. The structure was intentionally designed
                    for scalability, allowing new features, pages, and projects
                    to be added efficiently as my portfolio evolves over time.
                  </p>
                </div>
              </div>

              <figure className="w-full md:w-1/4 p-2 mt-5">
                <img
                  src="/img/Portfolio.png"
                  alt="ScreenShot of Portfolio home page"
                  className="w-full object-cover rounded"
                />
              </figure>
            </div>
          </div>
        </section>
      </VideoBackground>
    </>
  );
}

export default Portfolio;
