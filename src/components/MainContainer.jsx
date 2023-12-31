import React from "react";
import ButtonList from "../components/ButtonList";
import VideoContainer from "./VideoContainer";

export default function MainContainer() {
  return (
    <div className="sm:ml-28 ">
      <ButtonList />
      <VideoContainer />
    </div>
  );
}
