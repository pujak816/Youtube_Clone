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

  // early return pattern
  // if (!isMenuOpen) return null;

  return !isMenuOpen ? (
    <SidePanel />
  ) : (
    <div className=" fixed">
      <ul className="text-[10px] text-center px-5 text-gray-700">
        <li className=" m-1 py-4 ">
          <Link to="/">
            <HomeOutlinedIcon
              sx={{ fontSize: "28px" }}
              className="text-gray-600 "
            />
            <p className="">Home</p>
          </Link>
        </li>
        <li className=" m-1 py-4">
          <SubscriptionsOutlinedIcon
            sx={{ fontSize: "28px" }}
            className="text-gray-600"
          />
          <p>Subscriptions</p>
        </li>
        <li className=" m-1 py-4">
          <VideoLibraryOutlinedIcon
            sx={{ fontSize: "28px" }}
            className="text-gray-600"
          />
          <p>Library</p>
        </li>
        <li className=" m-1 py-4">
          <MovieOutlinedIcon
            sx={{ fontSize: "28px" }}
            className="text-gray-600"
          />
          <p>Movies</p>
        </li>
      </ul>
    </div>
  );
}
