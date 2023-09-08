import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import WatchPageInfo from "./WatchPageInfo";
import useVideoInfo from "../utils/useVideoInfo";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  let [searchParams] = useSearchParams();
  //   const params = useParams();
  // console.log(searchParams.get("v"));
  const [likeBtn, setLikeBtn] = useState(true);
  const [subscribe, setSubscribe] = useState(false);

  const toggleLike = () => {
    setLikeBtn(!likeBtn);
  };

  const subscribed = () => {
    setSubscribe(!subscribe);
  };

  const videoData = useVideoInfo();

  return (
    <div className="lg:flex pl-2 sm:ml-12 lg:ml-20 pt-10  w-full">
      <div>
        <div className="flex justify-center">
          <iframe
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-[340px] aspect-video sm:w-[640px] lg:w-[680px]"
          ></iframe>
        </div>
        <div className="flex gap-4 my-4 items-center justify-center">
          <div className="w-10">
            <img
              src="https://png.pngtree.com/png-vector/20190329/ourmid/pngtree-vector-avatar-icon-png-image_889567.jpg"
              alt="img"
              className=" rounded-full"
            />
          </div>
          <div>
            <button
              className="bg-gray-200  rounded-l-full p-1 px-4 mx-[1px]"
              onClick={toggleLike}
            >
              {likeBtn ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
            </button>

            <button
              className="bg-gray-200  rounded-r-full p-1 px-4"
              onClick={toggleLike}
            >
              {!likeBtn ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />}
            </button>
          </div>
          <button onClick={subscribed}>
            {subscribe ? (
              <p className="bg-white text-black p-1 px-7 rounded-full border border-gray-700">
                <NotificationsNoneIcon /> Subscribed
              </p>
            ) : (
              <p className="bg-gray-700 text-white p-1 px-7 rounded-full">
                Subscribe
              </p>
            )}
          </button>
        </div>

        <div className="w-[320px] sm:w-[750px]  pl-9">
          <h1 className="font-semibold">Comments</h1>
          {videoData.map((info) => (
            <WatchPageInfo key={info.id} info={info} />
          ))}
        </div>
      </div>
      <LiveChat />
    </div>
  );
};

export default WatchPage;
