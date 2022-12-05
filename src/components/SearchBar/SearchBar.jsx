import React, { createRef } from "react";
import { SEARCH_URL } from "../../utils/constants";
import { useGetMovies } from "../../hooks/useFetch";
import "./search.styles.css";
import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { status, data } = useGetMovies("searchQuery", SEARCH_URL + query);

  // if (status === "loading")
  //   return (
  //     <ThreeDots
  //       height="80"
  //       width="80"
  //       radius="9"
  //       color="#0BC9C1"
  //       ariaLabel="three-dots-loading"
  //     />
  //   );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching...");
    console.log(inputRef);
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        placeholder="Enter movie name"
        ref={inputRef}
        value={inputRef.current.value}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
