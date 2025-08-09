import React, { useRef } from "react";
import { ContactFormData, textareaData } from "../constant";
import emailjs from "emailjs-com";
import Button from "../Button";
import { toast, Toaster } from "react-hot-toast";
import "aos/dist/aos.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vff11uq",
        "template_riimnzs",
        form.current,
        "Q6Vuo4VrMcw9jpQqH"
      )
      .then((response) => {
        console.log("✅ SUCCESS!", response.status, response.text);
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((err) => {
        console.error("❌ FAILED...", err);
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <div
      className="bg-gray-800 border border-gray-700 rounded-2xl px-4 py-8 md:p-6 shadow-lg shadow-black/20"
      data-aos="fade-up"
    >
      <div className="w-full max-w-lg mx-auto">
        <Toaster position="top-center" reverseOrder={false} />
        
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6 flex flex-col items-center"
        >
          {ContactFormData.map((item, index) => (
            <div
              key={index}
              className="w-full"
              data-aos="fade-right"
              data-aos-delay={index * 100}
            >
              <label
                htmlFor={item.htmlFor}
                className="block text-md font-medium text-gray-300 mb-2"
              >
                {item.name}
              </label>
              <input
                name={item.nameF}
                id={item.id}
                type={item.type}
                placeholder={item.placeholder}
                className="outline-none w-full p-3 px-4 placeholder:font-semibold rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
              />
            </div>
          ))}

          {textareaData.map((item, index) => (
            <div
              key={index}
              className="w-full"
              data-aos="fade-left"
              data-aos-delay={index * 100}
            >
              <label
                htmlFor={item.htmlFor}
                className="block text-md font-medium text-gray-300 mb-2"
              >
                {item.name}
              </label>
              <textarea
                name={item.nameF}
                id={item.id}
                placeholder={item.placeholder}
                rows={5}
                className="outline-none w-full p-3 px-4 placeholder:font-semibold rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition resize-none"
              />
            </div>
          ))}

          <div data-aos="zoom-in" className="w-full">
            <Button
              type="submit"
              style={{ width: "100%" }}
              text="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
