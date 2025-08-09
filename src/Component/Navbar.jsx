import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // lightweight icon package

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Certificate", path: "/certificate" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-extrabold tracking-wide text-blue-400">
            Bansi Raval
          </h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 sm:gap-10 text-sm sm:text-base font-medium text-gray-300">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative hover:text-blue-400 transition-colors duration-300 
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 
                  after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 
                  hover:after:w-full">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div
          className={`md:hidden origin-top overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
            ${
              isOpen
                ? "max-h-96 opacity-100 translate-y-0 scale-100"
                : "max-h-0 opacity-0 -translate-y-4 scale-95"
            }`}>
          <div className="flex flex-col gap-4 pb-4 text-gray-300 font-medium">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="hover:text-blue-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
