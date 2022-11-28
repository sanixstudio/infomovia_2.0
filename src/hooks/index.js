export const fetchMoviesList = async (endPoint) => {
  try {
    const res = await (await fetch(endPoint)).json();
    return res.results;
  } catch (err) {
    console.log(err.message);
  }
};
