import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'api/fetchMovie';
import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      fetchTrendingMovies()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingFilms();
  }, []);

  return (
    <main>
      <section className="section">
        <div className="container">
          <h1>Trending today</h1>
          <TrendingMoviesList films={films} />

          {loading && <div>Loading...</div>}
        </div>
      </section>
    </main>
  );
};

export default HomePage;
