import React from "react";
import VideoBackground from "../layout/VideoBackground";

function HomePage() {
  return (
    <>
      <VideoBackground src="/video/backgroundVideo.mp4">
        <section className=" flex items-center justify-center min-h-screen">
          <div>
            <h1>Josiah Sayles</h1>
            <h2>FullStack Web Developer and Creative.</h2>
          </div>
        </section>
      </VideoBackground>
    </>
  );
}

export default HomePage;
