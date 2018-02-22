import React, {Component} from 'react';

const Header = () => {
  console.log("Running function <Header/>");
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
    </nav>
  );
} 

export default Header;