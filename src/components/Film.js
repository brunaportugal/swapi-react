import React, { useEffect, useState } from 'react';
import { Grid, Dimmer, Loader, Image } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import { UncontrolledCollapse, Collapse, Button, CardBody, Card } from 'reactstrap';

export default function Film({ favoriteFilms, toggleFavoriteFilm }) {

  const location = useLocation();
  const film = location.state;

  const numberPattern = /\d+/;
  const characterIds = film.characters.map(character => character.match( numberPattern )[0]);
  const [loading, setLoading] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
          <div className="special-div">
            <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>Description</Button>
              <UncontrolledCollapse toggler="#toggler">
                <p>{film.opening_crawl}</p>
              </UncontrolledCollapse>
          </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <div className="pr-4">

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
        </div>
        </Grid.Row>
      </Grid>
      )}
    </>
  )
}
