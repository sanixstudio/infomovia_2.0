import { useQuery } from "@tanstack/react-query";
import { PLAYING_NOW } from "../../utils/constants";
import { fetchMoviesList } from "../../hooks";
import { ThreeDots } from "react-loader-spinner";

const PlayingNow = () => {
  const { status, data } = useQuery(["moviesList"], () =>
    fetchMoviesList(PLAYING_NOW)
  );

  console.log(data);

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
    <div>
      {
        data.map((movie, i) => (
          <div key={i}>{movie.title}</div>
        ))}
    </div>
  );
};

export default PlayingNow;
