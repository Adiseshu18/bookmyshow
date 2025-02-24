import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';
import FilterOptions from './components/FilterOptions';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(500);

 
  useEffect(() => {
    fetch('/movies.json')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
      });
  }, []);

  useEffect(() => {
    let filtered = movies.filter(
      (movie) =>
        (movie.theatre.toLowerCase().includes(searchQuery.toLowerCase()) ||
          movie.hero.toLowerCase().includes(searchQuery.toLowerCase())) &&
        movie.price <= maxPrice
    );
    setFilteredMovies(filtered);
  }, [searchQuery, maxPrice, movies]);

  return (
    <div className="App">
      <h1>BookMyShow</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <FilterOptions setMaxPrice={setMaxPrice} maxPrice={maxPrice} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
