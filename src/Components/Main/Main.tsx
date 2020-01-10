import React from 'react';
import './Main.css';

export default class Main extends React.Component {
  render(){
    return (
      <main>
        <div className="container-fluid">
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
      </main>
    );
  }
}