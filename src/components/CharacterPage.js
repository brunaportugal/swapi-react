import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { UncontrolledCollapse,  Button } from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';


export default function CharacterPage({ character, species, homeworld }) {
  // const { addCharacterToFavorites, removeCharacterFromFavorites, favoriteCharacters} = useContext(GlobalContext);
  // let storedCharacter = favoriteCharacters.find(o => o.id === character.id);
  // const isFavoriteCharacter = storedCharacter ? true : false
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
        <h4>Species: {!species ? "n/a" : species.map(s => s.name).join(", ")}</h4>
      </div>

    </>
    );
}
      // <div className="character-show mt-5">
      //   <Button
      //   className="col text-center"
      //   color="success"
      //   style={{ marginBottom: '1rem' }}

      //   onClick={() => isFavoriteCharacter
      //     ? removeCharacterFromFavorites(character)
      //     : addCharacterToFavorites(character)}
      // >
      //   {isFavoriteCharacter ? "Favorite" : "Add to Favorites"}
      // </Button>
      // </div>

