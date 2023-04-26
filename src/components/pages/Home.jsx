import {trendingMovies} from '../../API';
import { useEffect, useState } from 'react';
import {  Link } from 'react-router-dom';



const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    trendingMovies().then(setTrending);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {trending.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Home;
