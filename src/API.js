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
export const searchMovieByQuery = async query => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie${KEY}&query=${query}`
  );
  const data = await response.json();
  return data.results;
};
export const searchMovieCast = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits${KEY}`
  );
  const data = await response.json();
  return data.cast;
};
export const getMovieReviews = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews${KEY}`
  );
  const data = await response.json();
  return data.results;
};
