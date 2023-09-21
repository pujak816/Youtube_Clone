import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import SearchPageVideoCards from "./SearchPageVideoCards";
import { Link } from "react-router-dom";
import { SEARCH_API, SEARCH_API_KEY } from "../utils/helper";

const SearchContainer = ({ params }) => {
  const [videos, setvideos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getSearchResults();
  }, []);

  const getSearchResults = async () => {
    const data = await fetch(SEARCH_API + params + SEARCH_API_KEY);
    if (!data.ok) {
      setError(true);
      return;
    }
    const json = await data.json();
    setvideos(json.items);
  };

  return (
    <div className="search_container w-full sm:pl-20">
      {!error ? (
        <div className="flex flex-wrap pt-10 justify-center">
          {videos.length <= 0 ? (
            <Shimmer />
          ) : (
            videos.map((item) => (
              <Link key={item.id.videoId} to={"/watch?v=" + item.id.videoId}>
                <SearchPageVideoCards data={item} />
              </Link>
            ))
          )}
        </div>
      ) : (
        <p className="my-4 text-sm sm:text-base">
          Error getting videos API Limit exceeded
        </p>
      )}
    </div>
  );
};

export default SearchContainer;
