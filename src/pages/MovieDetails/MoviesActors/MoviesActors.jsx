import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActors } from 'api/fetchMovie';
import css from './MoviesActors.module.css';

const MoviesActors = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onActorsOfMovie = () => {
      setLoading(true);

      fetchMovieActors(movieId)
        .then(actors => {
          setActors(actors);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    onActorsOfMovie();
  }, [movieId]);

  return (
    <section className="section">
      <div className="container">
        {loading && <div>Loading...</div>}

        <ul className={css.actorsList}>
          {actors.map(
            ({ id, profile_path, original_name, name, character }) => (
              <li key={id} className={css.actorContainer}>
                <img
                  width="200px"
                  height="300px"
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                  }
                  alt={original_name}
                />
                <div className="descWrapper">
                  <p className={css.actorName}>{name}</p>
                  <p className={css.actorCharacter}>Character: {character}</p>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default MoviesActors;
