import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '4bf52262cafa45f4a78d30477a8ff03d';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchMovieByName = async query => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchMovieActors = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
};
