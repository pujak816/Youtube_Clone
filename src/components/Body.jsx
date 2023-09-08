import React from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <>
      <div className="flex sm:pt-14 ">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}

export default Body;
