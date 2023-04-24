import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IMG_URL, PLAYING_NOW } from "../../utils/constants";
import { useGetMovies } from "../../hooks/useFetch";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="item" data-value="1">
    1
  </div>,
  <div className="item" data-value="2">
    2
  </div>,
  <div className="item" data-value="3">
    3
  </div>,
  <div className="item" data-value="4">
    4
  </div>,
  <div className="item" data-value="5">
    5
  </div>,
];

const Gallery = () => {
  const { data, status } = useGetMovies("playingNow", PLAYING_NOW);

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
    <AliceCarousel
    disableDotsControls
      mouseTracking
      //   items={items}
      responsive={responsive}
      controlsStrategy="alternate"
    >
      {data.map((poster) => (
        <div style={{ display: "flex" }}>
          <img key={poster.id} src={IMG_URL + poster.poster_path} alt="" />
          <div>
            <spna style={{ fontWeight: "bold" }}>{poster.title}</spna>
          </div>
        </div>
      ))}
    </AliceCarousel>
  );
};

export default Gallery;
