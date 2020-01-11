import React from 'react';
import './Container.css';
import Circle from './Circle/Circle';

export default class Container extends React.Component {
  render(){
    return (
      <section className="hero bg_gradient">
        <div className="container-fluid">
          <div className="row">
            <div className="col-7">
              <Circle/>
            </div>
            <div className="col-3">
            <p>fafs</p>
              </div>
          </div>

        </div>
      </section>
    );
  }
}