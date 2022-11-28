import { useQuery } from "@tanstack/react-query";
import { TOP_RATED } from "../../utils/constants";
import { fetchMoviesList } from "../../hooks";
import { ThreeDots } from "react-loader-spinner";
import Poster from "../../components/Poster/Poster";

import '../../App.css'

const TopRated = () => {
  const { status, data } = useQuery(["topRatedMovies"], () =>
    fetchMoviesList(TOP_RATED)
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
    <>
      <h2 className="section-title" id="top-rated">Top Rated</h2>
      <div className="movies-container">
        {
          data.map(movieInfo => (
            <Poster key={movieInfo.id} movieInfo={movieInfo} />
          ))}
      </div>
    </>
  );
};

export default TopRated;