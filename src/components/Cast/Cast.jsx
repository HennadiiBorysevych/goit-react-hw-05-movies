import { useEffect, useState } from 'react';
import { searchMovieCast } from '../../API';
import { useParams } from 'react-router-dom';
import {CastList,CastItem,CastTitle} from "./Cast.styled";

export const Cast = () => {
  const [movie, setMovie] = useState([]);

  const { movieId } = useParams();
  
  useEffect(() => {
    searchMovieCast(movieId).then(setMovie).catch(console.log);
  }, [movieId]);

  return (
    <section>
      <CastTitle>Cast</CastTitle>
        <CastList>
            {movie.map(({ id, name, character, profile_path }) => (
                <CastItem key={id}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                        alt={name}
                        width="150"
                    />
                    <p>Actor Name: {name}</p>
                    <p>Character Name: {character}</p>
                </CastItem>
            ))}
        </CastList>
    </section>
  );
};
export default Cast;
