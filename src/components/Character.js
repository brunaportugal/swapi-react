import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CharacterPage from './CharacterPage.js';

export default function Character() {
  const location = useLocation();
  const character = location.state;
  console.log(character);

  const [homeworld, setHomeworld] = useState("n/a");
  useEffect(() => {
    async function fetchHomeworld() {
      let res = await fetch(character.homeworld);
      let data = await res.json();
      setHomeworld(data);
    }
    fetchHomeworld();
  }, [character])

  const [species, setSpecies] = useState(null);
  useEffect(() => {
    if (character.species.length < 1) {
      return
    }
    async function fetchSpecies() {
      const speciesInfo = await Promise.all(character.species.map(async url => {
        let res = await fetch(url);
        return res.json();
      }))
      setSpecies(speciesInfo);
    }
    fetchSpecies();
  }, [character])

  return (
    <>
      <CharacterPage character={character} species={species} homeworld={homeworld} />
    </>
    );
}
