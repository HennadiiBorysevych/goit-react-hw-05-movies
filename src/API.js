const KEY = '?api_key=9039ea298d3f54d722d1b83eac98c5e3';
export const trendingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day${KEY}`
  );
  const data = await response.json();
  return data.results;
};
export const searchMovieById = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}${KEY}`
  );
  const data = await response.json();
  return data;
};
