import { useEffect, useState } from 'react';
import { getMovieReviews } from './../API';
import { useParams } from 'react-router-dom';
import {CastList,CastTitle} from "./Cast.styled";

export const Reviews = () => {
  const [movie, setMovie] = useState([]);

  console.log(movie)

  const { movieId } = useParams();
  console.log( movieId)
  
  useEffect(() => {
    getMovieReviews(movieId).then(setMovie).catch(console.log);
  }, [movieId]);

  return (
    <section>
      <CastTitle>Reviews</CastTitle>
        <CastList>
        </CastList>
    </section>
  );
};
export default Reviews;
