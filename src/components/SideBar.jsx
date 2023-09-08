import React from "react";
import { useSelector } from "react-redux";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import { Link } from "react-router-dom";
import SidePanel from "./SidePanel";

export default function SideBar() {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return !isMenuOpen ? (
    <SidePanel />
  ) : (
    <div className="fixed bottom-0 sm:bottom-auto z-50 bg-black/90 sm:bg-transparent w-full sm:w-auto">
      <ul className="text-[10px] text-center sm:px-5 text-white/90 sm:text-gray-700 flex justify-around sm:flex-col">
        <li className=" m-1 py-4 ">
          <Link to="/">
            <HomeOutlinedIcon
              sx={{ fontSize: "28px" }}
              className="sm:text-gray-600"
            />
            <p className="">Home</p>
          </Link>
        </li>
        <li className=" m-1 py-4">
          <SubscriptionsOutlinedIcon
            sx={{ fontSize: "28px" }}
            className="sm:text-gray-600"
          />
          <p>Subscriptions</p>
        </li>
        <li className=" m-1 py-4">
          <VideoLibraryOutlinedIcon
            sx={{ fontSize: "28px" }}
            className="sm:text-gray-600"
          />
          <p>Library</p>
        </li>
        <li className=" m-1 py-4">
          <MovieOutlinedIcon
            sx={{ fontSize: "28px" }}
            className="sm:text-gray-600"
          />
          <p>Movies</p>
        </li>
      </ul>
    </div>
  );
}
