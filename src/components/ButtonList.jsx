import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "./Button";

export default function ButtonList() {
  const buttons = [
    "All",
    "Front-End",
    "React Js",
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
    <section className="Button_section  h-[60px] sm:fixed z-0 w-full">
      <div className="  bg-white w-11/12  flex items-center pt-2 px-4">
        <div className="leftArrow rounded-full bg-black/10 p-1 m-1">
          {currentIndex !== 0 && (
            <button onClick={prevBtn}>
              <ArrowBackIcon />
            </button>
          )}
        </div>
        <div className="button_container scrollContainer overflow-x-auto relative ">
          <div
            className=" transition-all duration-1000 ease-in-out   "
            style={{ transform: `translateX(-${currentIndex * 14}rem)` }}
          >
            <div className="flex gap-3 py-3 px-1 ">
              {buttons.map((item, index) => (
                <Button key={index} name={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="rightArrow rounded-full bg-black/10 p-1 m-1">
          {currentIndex + 1 !== buttons.length && (
            <button onClick={nextBtn}>
              <ArrowForwardIcon />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
