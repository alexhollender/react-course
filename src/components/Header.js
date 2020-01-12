import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" exact={true}>Home</NavLink>
    <NavLink to="/add">Add expense</NavLink>
    <NavLink to="/help">Help</NavLink>
  </header>
);

export default Header;
