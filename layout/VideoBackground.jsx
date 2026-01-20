import React from "react";

export default function VideoBackground({ src, overlay = true, children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        class="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>

      {overlay && <div className="absolute inset-0 bg-black/50" />}

      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  );
}
