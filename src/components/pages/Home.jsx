import { trendingMovies } from '../../API';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SearchTitle,SearchList } from '../pages/Movies.styled';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();
  
  useEffect(() => {
    trendingMovies().then(setTrending);
  }, []);

  return (
    <>
      <SearchTitle>Trending today</SearchTitle>
      <SearchList>
        {trending.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </SearchList>
    </>
  );
};
export default Home;
