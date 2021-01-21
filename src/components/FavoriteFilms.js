import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js';
import { Link } from 'react-router-dom';

const FavoriteFilms = () => {
  const {favoriteMovies} = useContext(GlobalContext)

  return (
    <>
      <div className="col text-center mt-4 mb-4">
        <h1 className="fav-title">Favorite</h1>
        <h1 className="fav-title">Movies</h1>
      </div>
        {favoriteMovies.map((film) => (
          <div className="d-flex align-items-center">
            <Link to={{
                    pathname: `/film/${film.episode_id}`,
                    state: film
                  }} >
              <img className="film-poster mr-4 mt-3" src={`../films/${film.episode_id}.jpg`} alt=""></img>
            </Link>
            <h3>{film.title}</h3>
          </div>
        ))}
  </>
  );
};

export default FavoriteFilms;
