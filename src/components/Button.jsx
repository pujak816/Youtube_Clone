import React from "react";
import { Link } from "react-router-dom";

const Button = ({ name }) => {
  return (
    <Link
      to={"/search?query=" + name}
      className="transition-colors duration-300 whitespace-nowrap p-1.5 px-3 rounded-md text-sm hover:bg-[#c9c9c9]"
    >
      {name}
    </Link>
  );
};

export default Button;
