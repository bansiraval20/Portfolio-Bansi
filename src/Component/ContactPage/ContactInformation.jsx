import React from "react";
import { FaMessage } from "react-icons/fa6";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import ContactForm from "./ContactForm";

const ContactInformation = () => {
  return (
    <>
      <div className="flex flex-col gap-14 text-gray-300 max-w-2xl">
        <div className="flex flex-col gap-5">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-white transition duration-500"
            data-aos="fade-right">
            Let's <span className="text-blue-400">Connect</span>
          </h2>

          <p className="text-base w-lg sm:text-lg leading-relaxed">
            I'm always interested in new opportunities and exciting projects.
            Feel free to reach out if you'd like to work together!
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-5">
              <MdOutlineEmail className="text-2xl text-blue-400" />
              <p className="text-lg  font-medium">bansiraval40337@gmail.com</p>
            </div>
            <div className="flex items-center gap-5">
              <MdOutlinePhone className="text-2xl text-blue-400" />
              <p className="text-lg  font-medium">+91 9054492128</p>
            </div>
            <div className="flex items-center gap-5">
              <IoLocationOutline className="text-2xl text-blue-400" />
              <p className="text-lg  font-medium">Unjha-Gujarat ,India</p>
            </div>
          </div>
        </div>

        <div className="flex gap-9">
          <a href="https://github.com/bansiraval20">
            <FiGithub className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/banshi-raval/">
            <FiLinkedin className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/bansi_6419/">
            <FiInstagram className="text-2xl" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactInformation;
