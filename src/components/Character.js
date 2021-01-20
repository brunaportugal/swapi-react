import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';

export default function Character() {
  const location = useLocation();
  const character = location.state;

  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  const toggleFavoriteCharacter = (id) => {
    if (favoriteCharacters.includes(id)) {
      const newFavoriteCharacters = favoriteCharacters.filter(f => f !== id);
      setFavoriteCharacters(newFavoriteCharacters);
    } else {
      const newFavoriteCharacters = [...favoriteCharacters, id];
      setFavoriteCharacters(newFavoriteCharacters);
    }
  };
  const isFavoriteCharacter = favoriteCharacters.includes(character.id);

  return (
    <>
      <Grid.Column>
        <img className="films-images" src={`../characters/${character.id}.jpg`} alt=""></img>
        <h1>{character.name}</h1>
        <button onClick={ () => toggleFavoriteCharacter(character.id) }>{isFavoriteCharacter ? "Favorite" : "Not Favorite"}</button>
      </Grid.Column>
    </>

    );
}
