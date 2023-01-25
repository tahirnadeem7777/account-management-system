import React from 'react';
import { Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
      <Navbar.Toggle
        aria-controls='navbarScroll'
        data-bs-target='#navbarScroll'
      />
      <Navbar.Collapse id='navbarScroll'>
        <Nav>
          <NavLink as={Link} to='/home'>
            Home
          </NavLink>
          <NavLink as={Link} to='/login'>
            Sign in
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
