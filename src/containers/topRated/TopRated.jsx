import { ThreeDots } from "react-loader-spinner";
import { Poster } from "../../components";
import "../../App.css";
import { useGetMovies } from "../../hooks/useFetch";
import { TOP_RATED } from "../../utils/constants";

const TopRated = () => {
  const { status, data } = useGetMovies("topRatedMovies", TOP_RATED);

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
    <div className="section-wrapper">
      <h1 className="section-title" id="top-rated">
        Top Rated
      </h1>
      <div className="movies-container">
        {data.map((movieInfo) => (
          <Poster key={movieInfo.id} movieInfo={movieInfo} />
        ))}
      </div>
    </div>
  );
};

export default TopRated;
