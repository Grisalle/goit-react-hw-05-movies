import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api/fetchMovie';
import css from './MoviesReviews.module.css';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviewsFilms = () => {
      setLoading(true);

      fetchMovieReviews(movieId)
        .then(reviews => {
          setReviews(reviews);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchReviewsFilms();
  }, [movieId]);

  return (
    <>
      <section className="section">
        <div className="container">
          {loading && <div>Loading...</div>}
          {reviews.length !== 0 && (
            <div>
              <ul className={css.reviewsList}>
                {reviews.map(({ id, author, content }) => (
                  <li key={id}>
                    <h3 className={css.author}>Author: {author}</h3>
                    <p className={css.content}>{content}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {reviews.length === 0 && (
            <div>We don't have any reviews for this movie</div>
          )}
        </div>
      </section>
    </>
  );
};

export default MovieReviews;
