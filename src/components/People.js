import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function People({ data }) {
  return (
    <>
      <h1>Characters</h1>
      <Grid columns={3}>
        {data.map((people, i) => {
          return (
            <Grid.Column key={i}>
              <img className="avatar" src={`../characters/${i + 1}.jpg`}></img>
              <h3>{people.name}</h3>
            </Grid.Column>
          )
        })}
      </Grid>
    </>
  )
}
