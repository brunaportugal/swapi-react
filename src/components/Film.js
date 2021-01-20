import React, { useEffect, useState, props } from 'react';
import { Grid, Dimmer, Loader, Image } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import { UncontrolledCollapse,  Button } from 'reactstrap';
import FilmPage from './FilmPage.js';

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
        <FilmPage film={film} characters={characters} />
      )}
    </>
  )
}
