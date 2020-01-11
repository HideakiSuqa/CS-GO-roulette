import React from 'react';
import './Container.css';
import Circle from './Circle/Circle';

export default class Container extends React.Component {
  render(){
    return (
      <section className="hero bg_gradient">
        <Circle/>
      </section>
    );
  }
}