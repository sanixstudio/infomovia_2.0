export const fetchMoviesList = async (apiLink) => {
  try {
    const res = await (await fetch(apiLink)).json();
    return res.results;
  } catch (err) {
    console.error(err.message);
  }
};