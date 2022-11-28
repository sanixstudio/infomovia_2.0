import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <div style={{ minHeight: '50vh' }}>
      <Carousel>
        <div>
          <img src="https://picsum.photos/id/237/700/300" alt="" />
          <p></p>
        </div>
        <div>
          <img src="https://picsum.photos/id/237/700/300" alt="" />
          <p></p>
        </div>
        <div>
          <img src="https://picsum.photos/id/237/700/300" alt="" />
          <p></p>
        </div>
        <div>
          <img src="https://picsum.photos/id/237/700/300" alt="" />
          <p></p>
        </div>
        <div>
          <img src="https://picsum.photos/id/237/700/300" alt="" />
          <p></p>
        </div>
      </Carousel>
    </div>
  );
}

export default Hero
