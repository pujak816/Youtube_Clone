import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function ButtonList() {
  const list = [
    "All",
    "Computer programming",
    "Live",
    "Yoga",
    "Bollywood",
    "Gaming",
    "Songs",
    "News",
    "Canvas Painting",
    "Cooking",
    "Movie",
    "Bhajan Music",
    "Recently Uploaded",
    "New to you",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevBtn = () => {
    setCurrentIndex(currentIndex - 1);
    console.log("previous");
  };
  const nextBtn = () => {
    setCurrentIndex(currentIndex + 1);
    console.log("next");
  };

  return (
    <div className="hidden sm:block h-[60px] sm:fixed z-0 w-full">
      <div className="  translate-y-[-6px] bg-white w-11/12  flex items-center pt-2 px-4">
        <div className="leftArrow rounded-full bg-black/10 p-1 m-1">
          {currentIndex !== 0 && (
            <button onClick={prevBtn}>
              <ArrowBackIcon />
            </button>
          )}
        </div>
        <div className="scrollContainer  overflow-auto scrollbar-hide md:scrollbar-default   whitespace-nowrap ">
          <div
            className=" transition-all duration-1000 ease-in-out   "
            style={{ transform: `translateX(-${currentIndex * 14}rem)` }}
          >
            {list.map((item, index) => (
              <button
                key={index}
                className="p-2 px-4 m-1  whitespace-nowrap rounded-3xl bg-gray-100 text-xs "
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="rightArrow rounded-full bg-black/10 p-1 m-1">
          {currentIndex + 1 !== list.length && (
            <button onClick={nextBtn}>
              <ArrowForwardIcon />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
