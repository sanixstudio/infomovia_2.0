import { useQuery } from "@tanstack/react-query";
import { PLAYING_NOW } from "../utils/constants";
import { fetchMoviesList } from "../services";

export const useGetMovies = (queryKey) => {
  const { status, data } = useQuery([queryKey], () =>
    fetchMoviesList(PLAYING_NOW)
  );
  return { status, data };
};
