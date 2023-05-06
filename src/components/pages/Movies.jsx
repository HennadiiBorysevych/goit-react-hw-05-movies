import { searchMovieByQuery } from '../../API';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Input, SearchTitle, SearchList } from '../pages/Movies.styled';

const debounce = require('lodash.debounce');

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const location = useLocation();
  console.log('🚀 ~ file: Movies.jsx:12 ~ Movies ~ location:', location);

  useEffect(() => {
    const debouncedSearch = debounce(() => {
      searchMovieByQuery(searchQuery).then(setSearchResult).catch(console.log);
    }, 500);
    debouncedSearch();
  }, [searchQuery, location?.state?.from]);

  useEffect(() => {
    setSearchQuery(location?.state?.from ?? '');
  }, [location?.state?.from]);
  return (
    <>
      <SearchTitle>Search movies</SearchTitle>
      <Input
        type="text"
        value={searchQuery}
        placeholder="Search movies"
        onChange={e => setSearchQuery(e.target.value)}
      />
      {searchResult.length > 0 && (
        <SearchList>
          {searchResult.map(({ id, title }) => (
            <li key={id}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location, searchQuery: searchQuery }}
              >
                {title}
              </Link>
            </li>
          ))}
        </SearchList>
      )}
    </>
  );
};
export default Movies;
