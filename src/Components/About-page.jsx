import React from "react";
import VideoBackground from "../layout/VideoBackground";

function AboutPage() {
  return (
    <>
      <VideoBackground src="/videos/backgroundVideo.mp4">
        <section className=" flex justify-center mt-20 justify-center min-h-screen text-shadow-lg ">
          <div className="  bg-black max-w-200 p-6 ">
            <h1 className="text-black font-bold text-4xl w-50 p-2 mb-5 bg-white ">
              About me
            </h1>
            <hr className="h-[1px] border-0 max-w-175 ml-5 mb-5  mt-5 bg-white" />
            <div className="text-2xl font-semibold bg-emerald-950 p-4 text-white shadow-xl">
              <p className="mb-4">
                I’m a web developer who enjoys turning ideas into clean,
                functional, and user-friendly digital experiences. I’m
                especially drawn to solving problems at the intersection of
                logic and design—where performance, usability, and
                maintainability all matter.
              </p>
              <p className="mb-4">
                My journey into development started while I was working as a
                digital sales consultant for an online jewelry store with a
                curiosity for how things worked and under the hood of the very
                website I worked with everyday. That curiosity quickly grew and
                motivated me to make a career change into web developement, from
                there I quickly developed a passion for building applications
                using modern web technologies like JavaScript, React, HTML, and
                CSS, with a focus on writing clear, scalable, and reusable code.
                I enjoy breaking complex problems into manageable pieces and
                refining solutions through iteration and testing.
              </p>
              <p className="mb-4 ">
                I’ve worked on a range of personal and academic projects, from
                responsive portfolio websites to interactive UI components and
                small application features. Each project pushes me to learn
                something new—whether it’s improving performance, refining user
                experience, or adopting better development patterns.
              </p>
              <p>
                Outside of coding, I value continuous learning, clear
                communication, collaboration and culture. I enjoy working with
                others who are motivated to build quality products and aren’t
                afraid to ask why. I’m currently seeking opportunities where I
                can contribute, grow as a developer, and help build thoughtful,
                well-crafted web experiences.
              </p>
            </div>
            <hr className="h-[1px] border-0 max-w-175 ml-5 mt-5 bg-white" />
            <div className="text-2xl font-semibold bg-white p-4   shadow-xl mt-5 ">
              <p>
                In my free time, I design and produce original stickers under my
                brand, SiahVille Studios. As part of building and expanding this
                brand, I am also developing a custom e-commerce website to
                increase visibility and reach, while simultaneously
                strengthening and refining my web development skills.
              </p>
              <figure className="flex">
                <div className="flex-col ">
                  <img
                    src="img/MarketingBK.jpg"
                    alt="picture of SiahVille custom stickers on a gamepag green and brown"
                    className="max-w-90 mb-2 mt-2 shadow-xl  "
                  />
                  <img
                    src="img/Vibes.JPG"
                    alt="picture of SiahVille custom stickers on a gamepag green and brown"
                    className="max-w-90 shadow-xl"
                  />
                </div>
                <img
                  src="img/Mk2.jpg"
                  alt="picture of SiahVille custom stickers on a gamepag green and brown"
                  className="max-w-90 mt-2 ml-2 mr-2 shadow-xl"
                />
              </figure>
            </div>
          </div>
        </section>
      </VideoBackground>
    </>
  );
}

export default AboutPage;
