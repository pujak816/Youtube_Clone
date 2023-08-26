import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/helper";

function useVideoInfo() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  };

  return videos;
}

export default useVideoInfo;
