import React from 'react';
import { Grid} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Films({ data }) {
  return (
    <>
      <div className="films-index">
        <div className="app-title">
          <h1 className="star-wars-title">Star</h1>
          <h1 className="star-wars-title">Wars</h1>
        </div>
        <Grid columns={1}>
          {data.map((film, i) => {
            return (
              <Grid.Column key={i}>
                <Link to={{
                  pathname: `/film/${film.episode_id}`,
                  state: film
                }} >
                  <img className="films-images" src={`../films/${film.episode_id}.jpg`} alt=""></img>
                  <h3 className="film-title">{film.title}</h3>
                </Link>
              </Grid.Column>
            )
          })}
        </Grid>

      </div>
    </>
  )
}
