import React from 'react';
import './Main.css';
import Circle from './Cirlce/Circle';

export default class Main extends React.Component {
  render(){
    return (
      <div className="container">
        <Circle/>
      </div>
    );
  }
}