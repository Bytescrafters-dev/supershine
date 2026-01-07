import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/header-banner.mp4" type="video/mp4" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
