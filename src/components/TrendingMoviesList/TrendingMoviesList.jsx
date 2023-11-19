import { useLocation, Link } from 'react-router-dom';
import css from './TrendingMoviesList.module.css';

export const TrendingMoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <ul className={css.moviesList}>
      {films.map(film => (
        <li className={css.moviesItem} key={film.id}>
          <p className={css.moviesRaiting}>{film.vote_average}</p>

          <Link
            to={`/movies/${film.id}`}
            state={{ from: location }}
            className={css.moviesLink}
          >
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
