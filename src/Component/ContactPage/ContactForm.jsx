import React from "react";
import Button from "../Button";

const ContactForm = () => {
  return (
    <div className="bg-gray-800 border-gray-700 rounded-2xl h-[560px] flex flex-col justify-center">
      <div className="p-6">
        <form className="space-y-6  flex flex-col items-center">
          <div>
            <label
              htmlFor="name"
              className="block text-md font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-[450px] p-3 px-4 placeholder:font-semibold rounded-lg  bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-md font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              className="w-[450px] p-3 px-4 placeholder:font-semibold rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-md font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message here..."
              rows={5}
              className="overflow-hidden w-[450px] p-3 px-4 placeholder:font-semibold rounded-lg bg-gray-700 border-gray-600 text-white placeholder-gray-500 focus:border-blue-500"
            />
          </div>
          <Button style={{width:"450px"}} text="Send Message"/>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
