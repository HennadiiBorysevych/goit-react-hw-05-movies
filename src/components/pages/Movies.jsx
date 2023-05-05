import { searchMovieByQuery } from '../../API';

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Input,SearchTitle,SearchList } from '../pages/Movies.styled';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    searchMovieByQuery(searchQuery).then(setSearchResult).catch(console.log);
  }, [searchQuery]);

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
              <Link to={`/movies/${id}`} state={{ from: location }}>
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
