import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ThreeDots } from "react-loader-spinner";
import { Carousel } from "react-responsive-carousel";
import { fetchMoviesList } from "../../services";
import { BACKDROP_1280, GENRES, UP_COMING } from "../../utils/constants";
import { AiFillStar } from "react-icons/ai";

import "./hero.styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  const { status, data } = useQuery(["getHeroImages"], () =>
    fetchMoviesList(UP_COMING)
  );

  const findMatchingGenres = (ids) => {
    const genres = GENRES.movies; // you can also change this to GENRES.tvShows if needed
    return Object.keys(genres)
      .filter((genre) => ids.includes(genres[genre]))
      .map((genre) => genre);
  };

  const getFormattedGenres = (ids) => (
    <>
      {findMatchingGenres(ids).map((g) => (
        <p className="genre" key={g}>
          {g}
        </p>
      ))}
    </>
  );

  if (status === "loading") {
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#0BC9C1"
        ariaLabel="three-dots-loading"
      />
    );
  }

  return (
    <div className="hero">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {data.map(
          ({
            id,
            poster_path,
            title,
            overview,
            release_date,
            vote_average,
            genre_ids,
          }) => (
            <div
              key={id}
              className="hero-slider"
              style={{
                background: `url(${BACKDROP_1280 + poster_path}`,
              }}
            >
              <img src={BACKDROP_1280 + poster_path} alt={title} />
              <div className="legend">
                <p className="legend-title">
                  {title} ({release_date.split("-")[0]})
                </p>
                <div className="legend-info">
                  <span>
                    <AiFillStar color="yellow" /> {vote_average}{" "}
                  </span>
                  <span>{getFormattedGenres(genre_ids)}</span>
                </div>
                <p className="legend-overview">{overview}</p>
              </div>
            </div>
          )
        )}
      </Carousel>
    </div>
  );
};

export default Hero;
