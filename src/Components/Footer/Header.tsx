import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render(){
    return (
      <header>
        <div className="container">
  <div className="row">
    <div className="col-sm">
      One of three columns
    </div>
    <div className="col-sm">
      One of three columns
    </div>
    <div className="col-sm">
      One of three columns
    </div>
  </div>
</div>
      </header>
    );
  }
}