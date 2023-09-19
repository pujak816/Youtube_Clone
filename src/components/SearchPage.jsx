import React from "react";
import { useSearchParams } from "react-router-dom";
import SearchContainer from "./SearchContainer";

const SearchPage = () => {
  const [params] = useSearchParams();
  let query = params.get("query");

  return (
    <section className="search_page w-full  ">
      <SearchContainer params={query} />
    </section>
  );
};

export default SearchPage;
