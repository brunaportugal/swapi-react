import React, { useEffect, useState } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
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
  }, [characterIds])

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
