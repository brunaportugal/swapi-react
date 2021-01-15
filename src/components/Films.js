import React from 'react';
import { Grid, Menu, Container } from 'semantic-ui-react';
import { Link, Route } from 'react-router-dom';

export default function Films({ data }) {
  return (
    <>
      <h1>Films</h1>
      <Grid columns={1}>
        {data.map((films, i) => {
          return (
            <Grid.Column key={i}>
              <Link to={`/films/${i + 1}`}>
                <img className="films-images" src={`../films/${i + 1}.jpg`} alt=""></img>
              </Link>
              <h3>{films.title}</h3>
            </Grid.Column>
          )
        })}
      </Grid>
    </>
  )
}
