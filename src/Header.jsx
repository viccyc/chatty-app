import React, {Component} from 'react';

const Header = (props) => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <span className="navbar-users">{props.userCount} users online</span>
      
    </nav>
  );
} 

export default Header;