import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ThreeDots } from "react-loader-spinner";
import { Carousel } from "react-responsive-carousel";
import { fetchMoviesList } from "../../services";
import { BACKDROP_1280, UP_COMING } from "../../utils/constants";

import "./hero.styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  const { status, data } = useQuery(["getHeroImages"], () =>
    fetchMoviesList(UP_COMING)
  );

  if (status === "loading")
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#0BC9C1"
        ariaLabel="three-dots-loading"
      />
    );

  return (
    <div className="hero">
      <Carousel autoPlay infiniteLoop>
        {data.map(({ id, poster_path, title, overview }) => (
          <div
            key={id}
            className="hero-slider"
            style={{
              background: `url(${BACKDROP_1280 + poster_path}`,
            }}
          >
            <img src={BACKDROP_1280 + poster_path} alt={title} />
            <div>
              <p className="legend">{overview}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
