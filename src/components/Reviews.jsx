import { useEffect, useState } from 'react';
import { getMovieReviews } from './../API';
import { useParams } from 'react-router-dom';
import { CastList, CastTitle,ReviewTitle } from './Cast.styled';

export const Reviews = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(setMovie).catch(console.log);
  }, [movieId]);

  return (
    <section>
      <CastTitle>Reviews</CastTitle>
      <CastList>
        {movie.map(({id, author,content})=>{
          return (
            <li key={id}>
              <ReviewTitle>Author: {author}</ReviewTitle>
              <p>{content}</p>
            </li>
          )
        })}
      </CastList>
    </section>
  );
};
export default Reviews;
