import React from "react";
import ContactInformation from "./ContactInformation";
import ContactForm from "./ContactForm";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  return (
    <section className="w-full py-14 text-white overflow-hidden">
      
      <div className="max-w-6xl mx-auto flex flex-col gap-16 px-4">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-400 tracking-wide transition duration-500">
            Get In Touch
          </h1>
        </div>

        {/* Responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-8">
          <Toaster position="top-center" reverseOrder={false} />
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
