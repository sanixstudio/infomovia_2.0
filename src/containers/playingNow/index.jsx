import { useQuery } from "@tanstack/react-query";
import { REACT_APP_BASE_URL } from "../../utils/constants";
import { fetchMoviesList } from "../../hooks";
import { ThreeDots } from "react-loader-spinner";

const PlayingNow = () => {
  //TODO: Fix ENV issue for API keys
  const API_KEY = "1dc3a1bc9c9d1a12ed9931344d82ebc1";
  const END_POINT = `${REACT_APP_BASE_URL}movie/upcoming?language=en-US&api_key=${API_KEY}`;
  const { status, data, error } = useQuery(["moviesList"], () =>
    fetchMoviesList(END_POINT)
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
    <div>
      <h1>Playing Now</h1>
    </div>
  );
};

export default PlayingNow;
