import React from "react";
import { IMG_URL } from "../../utils/constants";
import "./poster.styles.css";

const Poster = ({ movieInfo }) => {
  const POSTER_IMG = IMG_URL + movieInfo.poster_path;
  const YEAR_RELEASED = movieInfo.release_date.split("-")[0];

  return (
    <div className="poster">
      <img src={POSTER_IMG} alt="" />
      <p className="title">{movieInfo.title}</p>
      <div className="poster-backdrop">
        <p>
          {movieInfo.title} ({YEAR_RELEASED})
        </p>
      </div>
    </div>
  );
};

export default Poster;
