import React, { useState, useEffect } from "react";
import { YOUTUBE_API } from "../utils/helper";
import VideoCard from "../components/VideoCard";
import { Link } from "react-router-dom";

function VideoContainer() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    if (!data.ok) {
      setError(true);
      return;
    }
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <>
      {!error ? (
        <div className="flex flex-wrap pt-10 justify-center">
          {videos.map((item) => (
            <Link key={item.id} to={"/watch?v=" + item.id}>
              <VideoCard videoInfo={item} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="pt-32 px-20 text-2xl  aspect-square w-full  fixed  ">
          Error getting videos API Limit exceeded
        </p>
      )}
    </>
  );
}

export default VideoContainer;
