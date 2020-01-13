import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Circle from './Components/Circle/Circle';

export default class App extends React.Component {
  render(){
    return (
      <div className="hero bg_gradient">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-9">
              <Circle/>
            </div>
            <div className="col-3">
              <p>fafs</p>
            </div>
          </div>
        </div>
        <Footer />
      </div> 
    );
  }
}



