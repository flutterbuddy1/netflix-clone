import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../utils/api';
import Shimmer from './Shimmer';

interface Movie {
  Title: string;
  Poster: string;
  Plot: string;
  Director: string;
  Actors: string;
  Year: string;
}

interface MovieDetailsProps {
}

const MovieDetails: React.FC<MovieDetailsProps> = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetchMovieById(id || '');
      setMovie(result);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="p-4 flex justify-center items-center">
        <Shimmer />
      </div>
    );
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-2">{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} className="rounded-md" />
      <p className="text-gray-400">{movie.Plot}</p>
      <p className="text-gray-400">Director: {movie.Director}</p>
      <p className="text-gray-400">Actors: {movie.Actors}</p>
      <p className="text-gray-400">Year: {movie.Year}</p>
    </div>
  );
};

export default MovieDetails;
