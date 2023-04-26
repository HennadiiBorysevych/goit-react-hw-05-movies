import { useParams } from 'react-router-dom';
import { searchMovieById, searchMovieByQuery } from './../API';
import { useEffect, useState } from 'react';
import {
  MovieDetailsContainer,
  OverviewContainer,
  InfoContainer,
  Input,
  MovieDetailsWrapper,
  MovieDetailsTitle
} from './MovieDetails.styled';

// import { Link } from 'react-router-dom';
const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  console.log(movie);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      searchMovieById(movieId).then(setMovie).catch(console.log);
    } else if (searchQuery) {
      searchMovieByQuery(searchQuery).then(setMovie).catch(console.log);
    }
  }, [movieId, searchQuery]);

  return (
    <MovieDetailsWrapper>
      <h1>Search movies</h1>
      <Input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      {Object.keys(movie).length > 0 && (
        <MovieDetailsContainer>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="300"
          />
          <InfoContainer>
            <MovieDetailsTitle>{movie.title}</MovieDetailsTitle>
            <p>User Score: {movie.vote_average.toFixed(1)}</p>
            <OverviewContainer>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </OverviewContainer>
            <OverviewContainer>
              <h3>Genres</h3>
              <p>{movie.genres.map(({ name }) => name).join(', ')}</p>
            </OverviewContainer>
          </InfoContainer>
        </MovieDetailsContainer>
      )}
    </MovieDetailsWrapper>
  );
};

export default MovieDetails;
