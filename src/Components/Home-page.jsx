import React from "react";
import VideoBackground from "../layout/VideoBackground";

function HomePage() {
  return (
    <>
      <VideoBackground src="/videos/backgroundVideo.mp4">
        <section className=" flex mt-40 justify-center min-h-screen">
          <div className="">
            <h1 className="bg-black rounded-3xl flex justify-start pl-20 text-white font-bold text-8xl ">
              Josiah Sayles
            </h1>
            <hr className="h-[1px] border-0 max-w-175 ml-5 bg-white" />
            <h2 className="bg-black rounded-3xl flex text-white text-7xl pl-5 py-2">
              FullStack Web Developer & Creative.
            </h2>
            <hr className="h-[1px] border-0 w-full bg-white mt-8" />
            <div className="flex justify-center">
              <p className="text-black text-5xl max-w-220 mt-10 bg-white rounded-xl p-5 shadowed-xl">
                My mission is to harness emerging technologies to create
                impactful digital solutions, while continuously learning and
                contributing to the tech community. I aim to grow both
                personally and professionally, and use my skills to inspire and
                empower others through innovation and creativity.
              </p>
            </div>
            <hr className="h-[1px] mt-10 mb-3 border-0 w-full bg-white" />

            <div className="flex justify-center">
              <p className="text-white text-4xl max-w-250 mt-10 bg-black italic rounded-xl p-5 shadowed-xl">
                "The hardest thing to do is to be true to yourself, especially
                when everybody is watching."- Dave Chappelle
              </p>
            </div>
          </div>
          <figure className="ml-20">
            <img src="/img/Profile.picture.jpg" alt="Photo of Josiah in suit" />
          </figure>
        </section>
      </VideoBackground>
    </>
  );
}

export default HomePage;
