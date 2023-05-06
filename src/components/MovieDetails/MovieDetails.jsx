import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { searchMovieById } from '../../API';
import { useEffect, useRef, useState } from 'react';
import { Suspense } from 'react';

import {
  MovieDetailsContainer,
  OverviewContainer,
  InfoContainer,
  MovieDetailsWrapper,
  MovieDetailsTitle,
  AdittionalInfoList,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  const prePage = useRef(location?.state?.from ?? '/');
  const searchMovie = useRef(location?.state?.searchQuery ?? '');

  useEffect(() => {
    searchMovieById(movieId).then(setMovie).catch(console.log);
  }, [movieId]);

  return (
    <MovieDetailsWrapper>
      <button>
        <Link to={prePage.current} state={{ from: searchMovie.current }}>
          Go back
        </Link>
      </button>
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
            <OverviewContainer>
              <h3>Additional Info</h3>
              <AdittionalInfoList>
                <li>
                  <Link to="cast">Cast</Link>
                </li>
                <li>
                  <Link to="reviews">Reviews</Link>
                </li>
              </AdittionalInfoList>
              <Suspense fallback={<p>Loading...</p>}>
                <Outlet />
              </Suspense>
            </OverviewContainer>
          </InfoContainer>
        </MovieDetailsContainer>
      )}
    </MovieDetailsWrapper>
  );
};

export default MovieDetails;
