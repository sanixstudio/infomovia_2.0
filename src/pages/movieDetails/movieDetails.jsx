import React from "react";
import { Header } from "../../containers";

const MovieDetails = () => {
  const data = {};

  return (
    <>
      <Header />
      <div className="movie-details">
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h2>Movies Details</h2>
            <h3>Original Title:</h3>
            <h3>Year Released:</h3>
            <h3>TMDB Ratings:</h3>
            <h3>Genre:</h3>
          </div>
        </div>
        <div className="overview">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rem?
            Officiis, iste dolorem quasi, neque error praesentium, obcaecati
            pariatur magnam architecto rerum molestiae ab earum quae voluptatem
            perspiciatis reiciendis nisi!
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
