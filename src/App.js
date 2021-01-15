import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar.js";
import Films from "./components/Films.js";
import People from "./components/People.js";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      let res = await fetch('https://swapi.dev/api/films/?format=json');
      let data = await res.json();
      setFilms(data.results);
    }

    fetchFilms();
  }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path='/'>
              <Films data={films}/>
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
