import { API_KEY, API_URL } from './config';

export const fetchMovies = async (query: string) => {
  try {
    const response = await fetch(`${API_URL}/?apikey=${API_KEY}&s=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    return null;
  }
};

export const fetchMovieById = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/?apikey=${API_KEY}&i=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
