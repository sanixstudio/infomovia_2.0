import React from "react";
import classNames from "classnames";
import "./movieDetails.styles.css";

import { Footer, Header } from "../../containers";
import { ScrollToTop } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { API_KEY, BASE_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../../utils/constants";

const MovieDetails = () => {
  const { id } = useParams();
  const URL = `${BASE_URL}/movie/${id}?language=en-US&api_key=${API_KEY}`;

  const fetchMovieDetails = async () => {
    const res = await fetch(URL);
    const movieDetails = await res.json();
    return movieDetails;
  };

  const { data, status } = useQuery(["playingNow"], fetchMovieDetails);

  if (status !== "success") return "<h1>Oooops...</h1>";

  return (
    <>
      <Header />
      <div className="single-movie">
        <div className="movie-poster">
          <img src={`${IMG_URL + data.poster_path}`} alt={data.title} />
        </div>
        <div className="movie-info">
          <h1 className="movie-title">{data.title}</h1>
          <p className="movie-release">{data.release_date}</p>
          <p className="movie-popularity">
            Popularity: {data.popularity}
          </p>
          <p className="movie-rating">
            Rating: {data.vote_average}
          </p>
          <div className="movie-genres">
            {data.genres.map((genre) => (
              <span
                key={genre.id}
                className={classNames("movie-genre", {
                  "movie-genre-action": genre.name === "Action",
                  "movie-genre-drama": genre.name === "Drama",
                  "movie-genre-horror": genre.name === "Horror",
                })}
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default MovieDetails;
