import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js'

const FavoriteFilms = () => {
  const {favoriteMovies} = useContext(GlobalContext)

  return (
    <div>
      <h1>Favorite Movies</h1>
      {favoriteMovies.map((film) => (
        <h3>{film.title}</h3>
      ))}
    </div>
  );
};

export default FavoriteFilms;
