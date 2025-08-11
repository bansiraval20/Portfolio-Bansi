import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="px-4 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          <span>Bansi</span> <span className="text-blue-500">Raval</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-6">
          Frontend Developer
        </p>

        <p className="text-base sm:text-lg text-gray-400 mb-10 px-4 sm:px-6">
          Passionate about crafting modern, responsive, and user-focused web
          applications using cutting-edge technologies and industry best
          practices.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link to="/contact">
            <Button text="Get In Touch" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
