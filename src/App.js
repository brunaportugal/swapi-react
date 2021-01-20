import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar.js";
import Films from "./components/Films.js";
import Film from "./components/Film.js";
import Character from "./components/Character.js";
import FavoriteFilms from "./components/FavoriteFilms.js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import './App.css';
import './index.css';
import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      let res = await fetch('https://swapi.dev/api/films/?format=json');
      let data = await res.json();
      setFilms(data.results);
      setLoading(false);
    }

    fetchFilms();
  }, [])

  return (
    <>
    <GlobalProvider>
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
                <Films data={films} />
              </Route>
              <Route path='/film/:id'>
                <Film data={films} />
              </Route>
              <Route path='/character/:id'>
                <Character />
              </Route>
              <Route path='/favorite-films/'>
                <FavoriteFilms />
              </Route>
          </Switch>
          )}
        </Container>
      </Router>
    </GlobalProvider>
    </>
  );
}

