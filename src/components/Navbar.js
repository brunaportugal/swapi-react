import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Menu inverted>
      <Container>
        <Link to='/' >
          <Menu.Item link name="films" />
        </Link>
        <Link to='/characters'>
          <Menu.Item link name="characters" />
        </Link>
      </Container>
    </Menu>
  );
}
