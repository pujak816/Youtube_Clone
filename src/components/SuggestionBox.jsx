import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SuggestionBox = ({ suggestions }) => {
  return (
    <div className="bg-white fixed translate-y-1 w-[34rem]   rounded-xl shadow-2xl ">
      {suggestions.map((item) => (
        <ul>
          <li className=" py-1 px-3 my-1 hover:bg-gray-300 cursor-pointer">
            <SearchIcon sx={{ color: "gray" }} />
            <span className="pl-1 font-semibold">{item}</span>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default SuggestionBox;
