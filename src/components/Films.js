import React from 'react';
import { Grid, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Films({ data, favoriteFilms, toggleFavoriteFilm }) {
  return (
    <>
      <h1>Films</h1>
      <Grid columns={1}>
        {data.map((film, i) => {
          const isFavoriteFilm = favoriteFilms.includes(film.episode_id);
          return (
            <Grid.Column key={i}>
              <Link to={{
                pathname: `/film/${film.episode_id}`,
                state: film
              }} >
                <img className="films-images" src={`../films/${film.episode_id}.jpg`} alt=""></img>
              </Link>
              <h3>{film.title}</h3>
              <button onClick={ () => toggleFavoriteFilm(film.episode_id) }>{isFavoriteFilm ? "Favorite" : "Not Favorite"}</button>

            </Grid.Column>
          )
        })}
      </Grid>
    </>
  )
}
