import React from "react";
import ReactTimeAgo from "react-time-ago";
import NumberFormatCustom from "./NumberFormatCustom ";

export default function VideoCard({ videoInfo }) {
  // console.log(videoInfo);
  const { channelTitle, title, publishedAt, thumbnails } = videoInfo?.snippet;
  const { viewCount } = videoInfo?.statistics;

  return (
    <div className="card mx-3 my-6 w-[340px] cursor-pointer leading-10 font-semibold">
      <img
        src={thumbnails.medium.url}
        alt="thumbnails"
        className="rounded-xl w-full"
      />
      <p className="truncate ">{title}</p>
      <p className=" text-gray-600 text-sm  ">{channelTitle}</p>
      <div className="text-xs flex justify-between text-gray-600 pt-1 ">
        <p>
          <NumberFormatCustom value={viewCount} /> views
        </p>
        <p>
          <ReactTimeAgo date={publishedAt} locale="en-US" />
        </p>
      </div>
    </div>
  );
}
