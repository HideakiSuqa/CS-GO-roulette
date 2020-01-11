import React from 'react';
import './Container.css';
import Circle from './Circle/Circle';

export default class Container extends React.Component {
  render(){
    return (
      <div className="container">
        <Circle/>
      </div>
    );
  }
}