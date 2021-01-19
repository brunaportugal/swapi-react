import React, { useEffect, useState } from 'react';
import { Grid, Dimmer, Loader, Image } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import { UncontrolledCollapse,  Button } from 'reactstrap';

export default function Film() {
  const location = useLocation();
  const film = location.state;

  const [favoriteFilms, setFavoriteFilms] = useState([]);
  const toggleFavoriteFilm = (episode_id) => {
    if (favoriteFilms.includes(episode_id)) {
      const newFavoriteFilms = favoriteFilms.filter(f => f !== episode_id);
      setFavoriteFilms(newFavoriteFilms);
    } else {
      const newFavoriteFilms = [...favoriteFilms, episode_id];
      setFavoriteFilms(newFavoriteFilms);
    }
  };
  const isFavoriteFilm = favoriteFilms.includes(film.episode_id);

  const numberPattern = /\d+/;
  const characterIds = film.characters.map(character => character.match( numberPattern )[0]);
  const [loading, setLoading] = useState(true);

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      const characterInfo = await Promise.all(characterIds.map(async id => {
        let res = await fetch(`https://swapi.dev/api/people/${id}/`);
        let characterData = await res.json();
        characterData.id = id;
        return characterData;
      }))
      setCharacters(characterInfo);
      setLoading(false);
    }

    fetchCharacters();
  }, [])

  return (
    <>
      {loading ? (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
        ) : (
        <Grid columns='equal'>
          <Grid.Row className="row-banner">
            <Grid.Column className="column-banner">
              <img className="film-banner" src={`../films/${film.episode_id}.jpg`} alt=""></img>
              <h1 className="film-title-show">{film.title}</h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <div className="special-div film-info">
                <h4>Director: {film.director}</h4>
                <h4>Producer(s): {film.producer}</h4>
                <h4>Release date: {film.release_date}</h4>
                <h5>{film.opening_crawl}</h5>
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
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
              <Button className="col text-center" color="success" style={{ marginBottom: '1rem' }} onClick={ () => toggleFavoriteFilm(film.episode_id) }>{isFavoriteFilm ? "Favorite" : "Add to favorites"}</Button>
            </div>
          </Grid.Row>
        </Grid>
      )}
    </>
  )
}
