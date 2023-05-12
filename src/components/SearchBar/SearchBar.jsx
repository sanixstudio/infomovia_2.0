import React from "react";
import { SEARCH_URL } from "../../utils/constants";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineSearch } from "react-icons/ai";

import "./search.styles.css";

const SearchBar = () => {
  const [searchKeywords, setSearchKeywords] = useState("");

  const { status, data, refetch } = useQuery(
    ["searchMovies", searchKeywords],
    async () => {
      try {
        const res =
          searchKeywords &&
          (await (await fetch(SEARCH_URL + searchKeywords)).json());
        return res.results;
      } catch (err) {
        console.error(err.message);
      }
    },
    {
      enabled: false,
      refetchOnWindowFocus: false,
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <form className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        className="search-input"
        value={searchKeywords}
        onChange={(e) => setSearchKeywords(e.target.value)}
      />
      <button type="submit" className="search-button">
        <AiOutlineSearch className="search-icon" />
      </button>
    </form>
  );
};

export default SearchBar;
