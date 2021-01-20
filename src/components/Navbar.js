import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Menu inverted secondary>
      <Container>
        <Link to='/' >
          <Menu.Item link name="movies" />
        </Link>
        <Link to='/favorite-films/'>
          <Menu.Item link name="Favorite Movies" />
        </Link>
      </Container>
    </Menu>
  );
}
