import React from "react";
import VideoBackground from "../layout/VideoBackground";

function HomePage() {
  return (
    <>
      <VideoBackground src="/videos/backgroundVideo.mp4">
        <section className=" flex mt-40 justify-center min-h-screen">
          <figure className="mr-20 mt-10">
            <img src="/img/Profile.picture.jpg" alt="Photo of Josiah in suit" />
            <hr className="h-[1px] mt-10 mb-3 border-0 w-full bg-emerald-950" />
          </figure>
          <div className="">
            <h1 className="bg-black rounded-3xl flex justify-start pl-20 text-white font-bold text-8xl ">
              Josiah Sayles
            </h1>
            <hr className="h-[1px] border-0 max-w-175 ml-5 bg-white" />
            <h2 className="bg-black rounded-3xl flex text-emerald-950 text-7xl pl-5 py-2">
              FullStack Web Developer & Creative
            </h2>
            <hr className="h-[1px] border-0 w-full bg-white mt-8" />
            <div className="flex justify-center">
              <p className="text-black text-2xl max-w-220 mt-10 bg-white rounded-xl  font-semibold p-5 shadowed-xl text-shadow-md">
                My mission is to harness emerging technologies to create
                impactful digital solutions, while continuously learning and
                contributing to the tech community. I aim to grow both
                personally and professionally, and use my skills to inspire and
                empower others through innovation and creativity.
              </p>
            </div>

            <hr className="h-[1px] mt-10 mr-100  mb-3 border-0 max-w-200 bg-white" />

            <div className="flex justify-center">
              <p className="text-white text-4xl max-w-250 mt-10 bg-black italic rounded-xl p-5 shadowed-xl text-shadow-md">
                "The hardest thing to do is to be true to yourself, especially
                when everybody is watching."- Dave Chappelle
              </p>
            </div>
            <hr className="h-[1px] mt-10 ml-100 mb-3 border-0 max-w-200 bg-white" />
            <div className="flex-col justify-items-center bg-emerald-950 rounded-xl p-5 shadowed-xl mt-10 text-shadow-lg">
              <p className="text-black text-3xl max-w-300 font-semibold text-shadow-md mb-5">
                Fullstack web development professional with expertise in
                e-commerce, sales and customer service gained in the sales and
                hospitality industry.
              </p>
              <p className="text-3xl font-bold mb-2 underline">
                Technical Skills:
              </p>
              <ul className="flex flex-wrap font-semibold text-2xl w-200 list-disc ">
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
                <li>Python (UI development, self-directed)</li>
              </ul>
            </div>
            <hr className="h-[1px] mt-14 border-0 w-full bg-emerald-950" />
          </div>
        </section>
      </VideoBackground>
    </>
  );
}

export default HomePage;
