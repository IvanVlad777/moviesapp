import React from 'react';
//Components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import SearchInput from './Header/SearchInput';
import Favorites from './Favourites/Favourites';

function MainHeader(props) {
  return (
    <div className="fixed-top">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="d-flex align-items-center">
          <Navbar.Brand href="/" className="fs-2 mr-5">
            MoviesApp
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto p-2">
              <SearchInput />

              <NavDropdown
                title="Favorites"
                id="basic-nav-dropdown"
                className="mx-lg-4"
              >
                <div>
                  <Favorites favourites={props.favourites}></Favorites>
                </div>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainHeader;
