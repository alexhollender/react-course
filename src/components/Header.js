import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header className="flex-container">
    <Link to="/" className="page-title"><h3>Expensify</h3></Link>
    <NavLink to="/logout"><button className="text">Logout</button></NavLink>
  </header>
);

export default Header;
