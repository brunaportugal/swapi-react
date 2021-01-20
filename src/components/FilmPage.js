import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { UncontrolledCollapse,  Button } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';


export default function FilmPage({ film, characters }) {

  const { addMovieToFavoriteMovies, removeMovieFromFavoriteMovies, favoriteMovies} = useContext(GlobalContext);
  let storedMovie = favoriteMovies.find(o => o.episode_id === film.episode_id);
  const isFavoriteMovie = storedMovie ? true : false


  return (
    <>
    <div>
      <img className="film-banner" src={`../films/${film.episode_id}.jpg`} alt=""></img>
      <h1 className="film-title-show">{film.title}</h1>
    </div>
    <div className="special-div film-info">
      <h4 data-testid="film-director">Director: {film.director}</h4>
      <h4>Producer(s): {film.producer}</h4>
      <h4>Release date: {film.release_date}</h4>
      <h5 className="text-justify mt-3">{film.opening_crawl}</h5>
    </div>
    <div className="special-div">
      <Button className="col text-center" color="primary" id="toggler" style={{ marginBottom: '1rem' }}>Characters</Button>
        <UncontrolledCollapse toggler="#toggler">
          <Grid columns={3}>
            {characters.map((character, i) => {
              return (
                <Grid.Column key={i}>
                  <div className='character-list'>
                      <Grid.Row>
                        <Link to={{
                          pathname: `/character/${character.id}`,
                          state: character
                        }}>
                          <img className="avatar" src={`../characters/${character.id}.jpg`} alt=""></img>
                        </Link>
                      </Grid.Row>
                      <Grid.Row>
                        <p className="characters-index">{character.name}</p>
                      </Grid.Row>
                  </div>
                </Grid.Column>
              )
            })}
          </Grid>
        </UncontrolledCollapse>
      <Button
        className="col text-center"
        color="success"
        style={{ marginBottom: '1rem' }}
        onClick={() => isFavoriteMovie
          ? removeMovieFromFavoriteMovies(film)
          : addMovieToFavoriteMovies(film)}
      >
        {isFavoriteMovie ? "Favorite" : "Add to Favorites"}
      </Button>
    </div>
    </>
  )

}
