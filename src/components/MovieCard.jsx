import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={`${movie.image}`} alt={movie.name} />
      <h3>{movie.name}</h3>
      <p>Hero: {movie.hero}</p>
      <p>Theatre: {movie.theatre}</p>
      <p>Price: ₹{movie.price}</p>
      <p>Place: {movie.place}</p>
    </div>
  );
}

export default MovieCard;
