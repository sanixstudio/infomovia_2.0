import React, { useEffect } from "react";
import "./navBar.styles.css";
import { GENRES, GENRES_URL } from "../../utils/constants";

const genreList = Object.keys(GENRES.movies);

console.log(genreList);

const index = () => {
  const [selectedGenre, setSelectedGenre] = [""];

  console.log(GENRES_URL);

  //TODO: make page for genre
  // Setup the Context for Add to favorites

  return (
    <div className="nav-bar">
      <a href="/">Home</a>
      <div className="genre-list-wrapper">
        <span className="genre">Genre</span>
        <ul className="genre-list">
          {genreList.map((genre) => (
            <li>
              <a href="#">{genre}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default index;
