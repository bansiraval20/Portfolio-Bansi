import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, Icon, to, onClick, style, type = "button" }) => {
  const classes =
    "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold active:scale-95 duration-200 flex gap-3 items-center justify-center";

  // If "to" prop is passed → render React Router <Link>
  if (to) {
    return (
      <Link to={to} style={style} className={classes}>
        {Icon}
        {text}
      </Link>
    );
  }

  // Otherwise → render normal <button>
  return (
    <button type={type} onClick={onClick} style={style} className={classes}>
      {Icon}
      {text}
    </button>
  );
};

export default Button;
