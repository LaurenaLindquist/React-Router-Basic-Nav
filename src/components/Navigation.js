import React from 'react';
import { Link } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap';

const Navigation = () => {
  return (
    <div>
      <Nav className="App">
        <h1>React Router Mini</h1>
        <NavItem>
          <Link to = "/" className="Nav-link">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/" className="Nav-link">About</Link>
        </NavItem>
        <NavItem>
          <Link to="/" className="Nav-link">Contact</Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default Navigation;
