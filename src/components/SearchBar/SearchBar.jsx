import React, { createRef } from "react";
import { SEARCH_URL } from "../../utils/constants";
import { useGetMovies } from "../../hooks/useFetch";
import "./search.styles.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

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
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        placeholder="Enter movie name"
        onChange={(e) => setSearchKeywords(e.target.value)}
        value={searchKeywords}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
