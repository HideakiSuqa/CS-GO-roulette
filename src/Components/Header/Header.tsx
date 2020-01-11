import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render(){
    return (
      <header className="header">
        <div className="header_container">
          <div className="header_logo-wrap">
            <a href="index.html" className="logo">CS:GO COIN <i className="fas fa-camera"></i></a>
          </div>
          <div className="header_singup-wrap">
            <a href="/#" className="signUp">Sign in Steam <i className="fab fa-steam-square"></i> </a>
          </div>
        </div>
      </header>
    );
  }
}