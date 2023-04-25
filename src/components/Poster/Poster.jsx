import React from "react";
import { IMG_URL } from "../../utils/constants";
import "./poster.styles.css";

const Poster = ({ movieInfo }) => {
  const POSTER_IMG = IMG_URL + movieInfo.poster_path;
  const YEAR_RELEASED = movieInfo.release_date.split("-")[0];

  return (
    <a href={"/" + movieInfo.id}>
      <div className="poster">
        <img src={POSTER_IMG} alt="" />
        <p className="title">{movieInfo.title}</p>
        <div>
          {YEAR_RELEASED} {}
        </div>
        <div className="poster-backdrop">
          <p>{movieInfo.title}</p>
        </div>
      </div>
    </a>
  );
};

export default Poster;
