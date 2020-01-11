import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render(){
    return (
      <header className="header">
        <div className="header_container">
          <div className="header_logo-wrap">
            <a href="index.html" className="logo">CS:GO COIN</a>
          </div>
          <div className="header_singup-wrap">
            <a href="#" className="singUp">Sing UP</a>
          </div>
        </div>
      </header>
    );
  }
}