import React from "react";

export default function VideoBackground({ src, overlay = true, children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {overlay && <div className="absolute inset-0 bg-black/30 z-5" />}

      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  );
}
