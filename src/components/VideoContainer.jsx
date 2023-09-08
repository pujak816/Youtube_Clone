import React, { useState, useEffect } from "react";
import { YOUTUBE_API } from "../utils/helper";
import VideoCard from "../components/VideoCard";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <>
      <div className="flex flex-wrap pt-10 justify-center">
        {videos.map((item) => (
          <Link key={item.id} to={"/watch?v=" + item.id}>
            <VideoCard videoInfo={item} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default VideoContainer;
