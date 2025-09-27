import React from "react";
import Button from "../Button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-snug sm:leading-tight">
          <span>Bansi</span>{" "}
          <span className="text-blue-500">Raval</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-2xl text-gray-300 mb-4 sm:mb-6">
          Frontend Developer
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-400 mb-10 px-2 sm:px-6 md:px-12">
          Passionate about crafting modern, responsive, and user-focused web
          applications using cutting-edge technologies and industry best
          practices.
        </p>

        {/* Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Button text="Get In Touch" to="/contact" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
