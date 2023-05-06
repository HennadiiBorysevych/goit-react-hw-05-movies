import { searchMovieByQuery } from '../../API';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Input, SearchTitle, SearchList } from '../pages/Movies.styled';

const debounce = require('lodash.debounce');

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (!searchQuery) {
      setSearchQuery(location?.state?.from ?? '');
    }
    const debouncedSearch = debounce(() => {
      searchMovieByQuery(searchQuery).then(setSearchResult).catch(console.log);
    }, 500);
    debouncedSearch();
  }, [location?.state?.from, searchQuery]);
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
