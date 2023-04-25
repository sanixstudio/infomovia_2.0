import React from "react";
import classNames from "classnames";
import "./movieDetails.styles.css";

import { Footer, Header } from "../../containers";
import { ScrollToTop } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { API_KEY, BACKDROP_1280, BASE_URL } from "../../utils/constants";
import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import {
  BsCalendarDateFill,
  BsHandThumbsUpFill,
  BsCameraReelsFill,
  BsStarFill,
  BsFillPlusCircleFill,
} from "react-icons/bs";
import { GiProgression } from "react-icons/gi";

const MovieDetails = () => {
  const { id } = useParams();
  const URL = `${BASE_URL}/movie/${id}?language=en-US&api_key=${API_KEY}`;

  const fetchMovieDetails = async () => {
    const res = await fetch(URL);
    const movieDetails = await res.json();
    return movieDetails;
  };

  const { data, status } = useQuery(["playingNow"], fetchMovieDetails);

  if (status !== "success") return <ThreeDots />;

  console.log(data);

  return (
    <>
      <Header />
      <div
        className="single-movie-page"
        style={{
          backgroundImage: `url(${BACKDROP_1280 + data.poster_path})`,
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="inner">
          <div className="single-movie">
            <div className="movie-poster">
              <img
                src={`${BACKDROP_1280 + data.poster_path}`}
                alt={data.title}
              />
            </div>
            <div className="movie-info">
              <h1 className="movie-title">{data.title}</h1>
              <p className="movie-release-date">
                <span className="movie-detail-icon calendar">
                  <BsCalendarDateFill />
                </span>
                Date Released: {data.release_date}
              </p>
              <p className="movie-popularity">
                <span className="movie-detail-icon popularity">
                  <BsHandThumbsUpFill />
                </span>
                Popularity: {data.popularity}
              </p>
              <p className="movie-runtime">
                <span className="movie-detail-icon">
                  <BsCameraReelsFill />
                </span>
                Run Time: {data.runtime} Minutes
              </p>
              <p className="movie-rating">
                <span className="movie-detail-icon rating">
                  <BsStarFill />
                </span>
                Vote Average: {data.vote_average}
              </p>
              <p className="movie-vote-count">
                <span className="movie-detail-icon vote-count">
                  <GiProgression />
                </span>
                Vote Count: {data.vote_count}
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
              <p className="movie-overview">
                <span className="overview-title">Overview:</span>{" "}
                {data.overview}
              </p>
              <button>
                <BsFillPlusCircleFill color="white" size={24} />
                Add to WishList
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default MovieDetails;
