import React from "react";
import ReactTimeAgo from "react-time-ago";
// import NumberFormatCustom from "./NumberFormatCustom ";

const SearchPageVideoCards = ({ data }) => {
  // console.log(data);
  const { channelTitle, title, publishedAt, thumbnails } = data?.snippet;

  return (
    <div className="card mx-[2px] sm:mx-4 my-6 w-[370px] sm:w-[250px] lg:w-[320px] cursor-pointer sm:leading-10 font-semibold ">
      <h1 className="text-white text-3xl">Hello</h1>
      <img
        src={thumbnails.medium.url}
        alt="thumbnails"
        className="rounded-xl w-full"
      />
      <p className="truncate ">{title}</p>
      <p className=" text-gray-600 text-sm  ">{channelTitle}</p>
      <div className="text-xs flex justify-between text-gray-600 pt-1 ">
        <p>
          <ReactTimeAgo date={publishedAt} locale="en-US" />
        </p>
      </div>
    </div>
  );
};

export default SearchPageVideoCards;
