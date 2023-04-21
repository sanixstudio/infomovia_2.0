import { ThreeDots } from "react-loader-spinner";
import { Poster } from "../../components";
import { useGetMovies } from "../../hooks/useFetch";
import { UP_COMING } from "../../utils/constants";

import "../../App.css";

const UpComing = () => {
  const { status, data } = useGetMovies("upComingMovies", UP_COMING);

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
      <div className="movies-container">
        {data.map((movieInfo) => (
          <Poster key={movieInfo.id} movieInfo={movieInfo} />
        ))}
      </div>
    </div>
  );
};

export default UpComing;
