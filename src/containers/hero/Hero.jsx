import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { ThreeDots } from 'react-loader-spinner';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { fetchMoviesList } from '../../hooks';
import { BACKDROP_1280, UP_COMING } from '../../utils/constants';

import './hero.styles.css'

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

  console.log(data)

  return (
    <div className='hero'>
      <Carousel autoPlay infiniteLoop>
        {
          data.map(({ id, poster_path, title }) => (
            <div
              key={id}
              className='hero-slider'
              style={{
                background: `url(${BACKDROP_1280 + poster_path}`,
                boxShadow: 'inset 0em 0em 5em 8em #111'
              }}>
              <img src={BACKDROP_1280 + poster_path} alt={title} />
            </div>
          ))
        }
      </Carousel>
    </div>
  );
}

export default Hero
