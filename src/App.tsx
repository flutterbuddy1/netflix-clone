import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import MovieDetails from './components/MovieDetails';
import { fetchMovies } from './utils/api';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('avengers');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetchMovies(searchQuery);
      if (result && result.Search) {
        setMovies(result.Search);
      } else {
        setMovies([]);
      }
      setLoading(false);
    };

    fetchData();
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    
      <BrowserRouter>
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<MovieList movies={movies} loading={loading} />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    
  );
}

export default App;
