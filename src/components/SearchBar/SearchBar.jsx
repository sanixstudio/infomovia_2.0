import React from "react";
import "./search.styles.css";
import { SEARCH_URL } from "../../utils/constants";
import { useQuery } from "@tanstack/react-query";

const SearchBar = () => {
  const { status, data } = useQuery(["searchQuery"], () => search(query));
  console.log(SEARCH_URL);

  return (
    <div className="search">
      <input type="text" name="" placeholder="Enter movie name" />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
