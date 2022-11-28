export const VITE_API_KEY = import.meta.env.VITE_API_KEY
export const BASE_URL = "https://api.themoviedb.org/3/";
export const IMG_URL = "https://image.tmdb.org/t/p/w185/";
export const PLAYING_NOW = `${BASE_URL}movie/upcoming?language=en-US&api_key=${VITE_API_KEY}`;
