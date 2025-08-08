import React from "react";
import CertificateCard from "./CertificateCard";

const Certificate = () => {
  return (
    <section className="w-full py-14 text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 ">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 tracking-wide transition duration-500">
            Certificates
          </h1>
        </div>
        <div data-aos="fade-up" className="flex justify-center gap-5 place-items-center">
          <CertificateCard />
        </div>
      </div>
    </section>
  );
};

export default Certificate;
