import React from "react";
import { CertificateInformationIconData } from "../constant";
import SocialIcons from "./SocialIcons";

const ContactInformation = () => {
  return (
    <div
      className="flex flex-col gap-14 text-gray-300 max-w-2xl p-4 sm:p-6"
    >
      {/* Heading */}
      <div className="flex flex-col gap-5">
        <h2
          className="text-3xl sm:text-4xl font-bold text-white"
          data-aos="fade-right"
          data-aos-duration="800"
        >
          Let’s <span className="text-blue-400">Connect</span>
        </h2>

        {/* Description */}
        <p
          className="text-base sm:text-lg leading-relaxed text-gray-400"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          I’m always open to collaborating on innovative ideas and exciting
          projects. Feel free to reach out if you think we can create something
          amazing together.
        </p>

        {/* Contact Info */}
        <div
          className="flex flex-col gap-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {CertificateInformationIconData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 group hover:translate-x-1 transition-transform duration-300"
            >
              <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                <item.Icon className="text-2xl text-blue-400" />
              </div>
              <p className="text-lg font-medium text-gray-200">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Icons */}
      <div data-aos="fade-up" data-aos-delay="500">
        <SocialIcons />
      </div>
    </div>
  );
};

export default ContactInformation;
