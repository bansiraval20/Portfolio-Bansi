import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Certificate", path: "/certificate" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-gray-700 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-extrabold tracking-wide text-blue-400">
            Bansi Raval
          </h1>

          <div className="flex gap-6 sm:gap-10 text-sm sm:text-base font-medium text-gray-300">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative hover:text-blue-400 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
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
