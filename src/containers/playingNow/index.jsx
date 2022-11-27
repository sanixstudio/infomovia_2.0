import { useQuery } from "@tanstack/react-query";
import { REACT_APP_BASE_URL } from "../../constants";
import { fetchMoviesList } from "../../hooks";

const PlayingNow = () => {
  const API_KEY = "1dc3a1bc9c9d1a12ed9931344d82ebc1";
  const END_POINT = `${REACT_APP_BASE_URL}movie/upcoming?language=en-US&api_key=${API_KEY}`;
  console.log(END_POINT);
  const { status, data, error } = useQuery(["moviesList"], () =>
    fetchMoviesList(END_POINT)
  );

  console.log(data, status, error);

  return (
    <div>
      <h1>Playing Now</h1>
    </div>
  );
}

export default PlayingNow