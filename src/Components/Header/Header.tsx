import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render(){
    return (
      <header className="header">
        <div className="header_container">
          <div className="header_logo-wrap">
            <img alt="cgc" src="src/img/cgc.png"/>
            <a href="index.html" className="logo">CGC</a>
            </div>
            <div className="header_singup-wrap">
            <a href="/#" className="signUp"> Sign in Steam <span className="steamIco"><i className="fab fa-steam-square"></i></span></a>
          </div>
        </div>
      </header>
    );
  }
}