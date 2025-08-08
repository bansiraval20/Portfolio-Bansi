import React from "react";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="w-full py-14 text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 tracking-wide transition duration-500">
            Get In Touch
          </h1>
        </div>
        <div className="grid grid-cols-2 items-center w-[1100px] gap-2">
          <div>
            <ContactInformation />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
