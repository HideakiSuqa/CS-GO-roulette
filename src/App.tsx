import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Circle from './Components/Container/Circle/Circle';

export default class App extends React.Component {
  render(){
    return (
      <div className="hero bg_gradient">
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-9">
              <div className="Circle"><Circle /></div>
    
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



