import { useParams } from 'react-router-dom';
import { searchMovieById } from './../API';
import { useEffect, useState } from 'react';
import { MovieDetailsContainer,OverviewContainer,InfoContainer } from './pages/MovieDetails.styled';
// import { Link } from 'react-router-dom';
const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    searchMovieById(movieId).then(setMovie);
  }, [movieId]);

  const handleSearch = e => {
    console.log(e.target.value);
  };

  return (
    <>
      <h1>Search movies</h1>
      <input type="text" value="win" onChange={handleSearch} />
      {movie && (
        <MovieDetailsContainer>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="300"
          />
          <InfoContainer>
            <h2>{movie.title}</h2>
            <p>User Score: {movie.vote_average.toFixed(1)}</p>
            <OverviewContainer>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </OverviewContainer>
            <p>{movie.release_date}</p>
            <p>{movie.genres.map(({ name }) => name).join(', ')}</p>
          </InfoContainer>
        </MovieDetailsContainer>
      )}
    </>
  );
};

export default MovieDetails;
