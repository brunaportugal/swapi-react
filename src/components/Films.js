import React from 'react';
import { Grid, Menu, Container } from 'semantic-ui-react';
import { Link, Route } from 'react-router-dom';

export default function Films({ data }) {
  return (
    <>
      <h1>Films</h1>
      <Grid columns={1}>
        {data.map((film, i) => {
          return (
            <Grid.Column key={i}>
              <Link to={{
                pathname: `/film/${i + 1}`,
                state: film
              }} >
                <img className="films-images" src={`../films/${i + 1}.jpg`} alt=""></img>
              </Link>
              <h3>{film.title}</h3>
            </Grid.Column>
          )
        })}
      </Grid>
    </>
  )
}
