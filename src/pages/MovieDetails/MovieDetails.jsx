import { useEffect, useState, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'api/fetchMovie';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const backLink = useRef(location.state?.from || '/');

  useEffect(() => {
    const searchMovieDetails = () => {
      setLoading(true);

      fetchMovieDetails(movieId)
        .then(movieDetails => {
          setMovieDetails(movieDetails);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    searchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movieDetails || {};

  return (
    <>
      <section className="sectionBtn">
        <div className="container">
          <Link to={backLink.current}>
            <button type="button" className={css.btnGB}>
              ← Go back
            </button>
          </Link>
          {loading && <div>Loading...</div>}
        </div>
      </section>

      {movieDetails && (
        <section className="section">
          <div className="container">
            <div className={css.wrapper}>
              <img
                className={css.poster}
                width="300px"
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
                }
                alt={original_title}
              />
              <div className={css.information}>
                <h1>
                  {title} ({release_date.slice(0, 4)})
                </h1>
                <p className={css.desc}>User score: {popularity}</p>
                <h2 className={css.title}>Overview</h2>
                <p className={css.desc}>{overview}</p>
                <h2 className={css.title}>Genres</h2>
                <ul className={css.descGenres}>
                  {genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
      <hr />
      <section className="section">
        <div className="container">
          <h3>Additional information</h3>
          <ul className={css.addInfoList}>
            <li className={css.addInfoItem}>
              <Link to="cast" className={css.addInfo}>
                Cast
              </Link>
            </li>
            <li className={css.addInfoItem}>
              <Link to="reviews" className={css.addInfo}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <Outlet />
    </>
  );
};

export default MovieDetails;
