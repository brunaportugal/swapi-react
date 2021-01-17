import React, { useEffect, useState } from 'react';
import { Grid, Dimmer, Loader, Card } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';

export default function Film() {
  const location = useLocation();
  const film = location.state;

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
        <Grid.Row>
          <Grid.Column>
            <h1>{film.title}</h1>
            <img className="films-images" src={`../films/${film.episode_id}.jpg`} alt=""></img>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid columns={2}>
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
                        <h3>{character.name}</h3>
                      </Grid.Row>
                  </div>
                </Grid.Column>
              )
            })}
          </Grid>
        </Grid.Row>
      </Grid>
      )}
    </>
  )
}
