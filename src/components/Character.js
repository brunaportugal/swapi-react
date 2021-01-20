import React, { useState, useEffect, useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
import { Button } from 'reactstrap';

export default function Character() {
  const location = useLocation();
  const character = location.state;

  const [homeworld, setHomeworld] = useState([]);
  useEffect(() => {
    async function fetchHomeworld() {
      let res = await fetch(character.homeworld);
      let data = await res.json();
      setHomeworld(data);
    }

    fetchHomeworld();
  }, [])

  const [species, setSpecies] = useState([]);
  useEffect(() => {
    async function fetchSpecies() {
      let res = await fetch(character.species);
      let data = await res.json();
      setSpecies(data);
    }

    fetchSpecies();
  }, [])

  return (
    <>
      <div className="character-show">
        <img className="big-avatar" src={`../characters/${character.id}.jpg`} alt=""></img>
        <h1>{character.name}</h1>
      </div>
      <div className="character-show mt-4">
        <h4>Height: {character.height}cm</h4>
        <h4>Mass: {character.mass}</h4>
        <h4>Hair color: {character.hair_color}</h4>
        <h4>Skin color: {character.skin_color}</h4>
        <h4>Eye color: {character.eye_color}</h4>
        <h4>Birth year: {character.birth_year}</h4>
        <h4>Gender: {character.gender}</h4>
        <h4>Homeworld: {homeworld.name}</h4>
        <h4>Species: { !species.length ? "n/a" : species.name }</h4>
      </div>
      <div className="character-show mt-5">
        <Button
          className="col text-center"
          color="success"
          style={{ marginBottom: '1rem' }}
        >
          Favorite
        </Button>
      </div>

    </>

    );
}
