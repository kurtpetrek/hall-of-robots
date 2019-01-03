import React from 'react';
import './Header.css';

const Header = ({title}) => (
  <header>
    <h1 className="Header">{title}</h1>
  </header>
);

export default Header;
