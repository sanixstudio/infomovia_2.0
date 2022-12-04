import { useQuery } from "@tanstack/react-query";
import { fetchMoviesList } from "../services";

export const useGetMovies = (queryKey, apiLink) => {
  const { status, data } = useQuery([queryKey], () => fetchMoviesList(apiLink));
  return { status, data };
};
