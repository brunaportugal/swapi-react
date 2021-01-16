import React from 'react';
import { Grid, Menu, Container } from 'semantic-ui-react';
import { Link, Route, useLocation } from 'react-router-dom';

export default function Film({ data }) {
  const location = useLocation();
  console.log(location);
  const film = location.state;
  return (
    <>
      <h1>{film.title}</h1>
      <Grid columns={1}>
        <Grid.Column>
          <Link to={`/film/${film.episode_id}`}>
            <img className="films-images" src={`../films/${film.episode_id}.jpg`} alt=""></img>
          </Link>
        </Grid.Column>
      </Grid>
    </>
  )
}
