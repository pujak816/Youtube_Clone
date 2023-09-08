import React from "react";
import { Sidebar_ICONS } from "../utils/helper";
import { Link } from "react-router-dom";

export default function SidePanel() {
  return (
    <div className="fixed h-full w-full flex z-50 text-xs sm:text-base">
      <div className="bg-white w-1/4">
        <div className="w-1/5  text-gray-700  text-center     ">
          <ul>
            {Sidebar_ICONS.map((icon) => (
              <li className=" py-3 px-9 my-1 items-center ">
                <Link to={icon.link} className="flex">
                  {icon.iconName}
                  <p className="px-5 font-semibold">{icon.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-black/60 w-3/4"></div>
    </div>
  );
}
