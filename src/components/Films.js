import React from 'react';
import { Grid, Menu, Container } from 'semantic-ui-react';

export default function Films({ data }) {
  return (
    <>
      <h1>Films</h1>
      <Grid columns={1}>
        {data.map((films, i) => {
          return (
            <Grid.Column key={i}>
              <img className="films-images" src={`../films/${i + 1}.jpg`}></img>
              <h3>{films.name}</h3>
            </Grid.Column>
          )
        })}
      </Grid>
    </>
  )
}
