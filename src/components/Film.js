import React, { useEffect, useState } from 'react';
import { Grid, Menu, Container } from 'semantic-ui-react';
import { Link, Route, useLocation } from 'react-router-dom';

export default function Film() {
  const location = useLocation();
  console.log(location);
  const film = location.state;
  console.log(film);

  const numberPattern = /\d+/;

  const characterIds = film.characters.map(character => character.match( numberPattern ) [0] );
  console.log(characterIds);


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
      console.log(characterInfo);
    }

    fetchCharacters();
  }, [])

  return (
    <>
      <h1>{film.title}</h1>
      <Grid columns={1}>
        <Grid.Column>
          <Link to={`/film/${film.episode_id}`}>
            <img className="films-images" src={`../films/${film.episode_id}.jpg`} alt=""></img>
          </Link>
          <ul>
            {characters.map(character =>
              <li>
                <img className="avatar" src={`../characters/${character.id}.jpg`} alt=""></img>
                {character.name}
              </li>)}
          </ul>
        </Grid.Column>
      </Grid>
    </>
  )
}
