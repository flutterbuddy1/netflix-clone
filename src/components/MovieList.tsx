import React from 'react';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

interface MovieListProps {
  movies: Movie[] | undefined;
  loading?: boolean;
}

const MovieList: React.FC<MovieListProps> = ({ movies, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="animate-pulse">
              <Shimmer />
            </div>
          ))}
      </div>
    );
  }

  if (!movies) {
    return <div>No movies found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="relative rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <Link to={`/movie/${movie.imdbID}`} className="block">
            <img src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/300x450' : movie.Poster} alt={movie.Title} className="object-cover w-full h-auto" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{movie.Title}</h3>
              <p className="text-gray-400">{movie.Year}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
