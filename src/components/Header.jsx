import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/helper";
import { cacheResults } from "../utils/searchSlice";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggetion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggetion = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  // toggle Menu Handler
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex justify-between items-center  sm:px-10 w-full sm:fixed z-40 bg-white ">
      <div className="flex gap-4 justify-center items-center">
        <div className="logo max-w-[23px] cursor-pointer hidden sm:block">
          <img
            onClick={() => toggleMenuHandler()}
            src="https://img.icons8.com/?size=2x&id=59832&format=png"
            alt="hamburger"
          />
        </div>
        <div className="w-24 sm:w-28 flex items-center cursor-pointer">
          <img
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt="logo"
          />
        </div>
      </div>
      <div className="search_bar w-2/5 sm:w-1/2">
        <div className="flex w-full ">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="border border-gray-300  rounded-l-full py-1 px-4 w-full "
          />
          <button className=" text-gray-600 border border-gray-300 rounded-r-full py-[3px] px-3 bg-gray-200 ">
            <SearchIcon />
          </button>
        </div>
        {showSuggestions && (
          <div className="bg-white fixed translate-y-1 w-[34rem]   rounded-xl shadow-2xl ">
            <ul>
              {suggestions.map((item) => (
                <li
                  key={item}
                  className=" py-1 px-3 my-1 hover:bg-gray-300 cursor-pointer"
                >
                  <SearchIcon sx={{ color: "gray" }} />
                  <span className="pl-1 font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="account_icon items-center flex">
        <AccountCircleIcon sx={{ fontSize: "35px", color: "gray" }} />
      </div>
    </div>
  );
}
