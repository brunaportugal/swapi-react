import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar.js";
import Films from "./components/Films.js";
import Film from "./components/Film.js";
import Character from "./components/Character.js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import './App.css';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      let res = await fetch('https://swapi.dev/api/films/?format=json');
      let data = await res.json();
      console.log(data);
      setFilms(data.results);
      setLoading(false);
    }

    fetchFilms();
  }, [])

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

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          {loading ? (
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>
            ) : (
            <Switch>
              <Route exact path='/'>
                <Films data={films} favoriteFilms={favoriteFilms} toggleFavoriteFilm={toggleFavoriteFilm}/>
              </Route>
              <Route path='/film/:id'>
                <Film data={films}/>
              </Route>
              <Route path='/character/:id'>
                <Character favoriteCharacters={favoriteCharacters} toggleFavoriteCharacter={toggleFavoriteCharacter}/>
              </Route>
          </Switch>
          )}
        </Container>
      </Router>
    </>
  );
}

export default App;
