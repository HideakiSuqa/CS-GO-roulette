import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Circle from './Components/Container/Circle/Circle';

export default class App extends React.Component {
  render(){
    return (
      <div className="bg_gradient">
        <Header />
<<<<<<< HEAD
        <div className="container-fluid row">
=======
        <div className="hero container-fluid">
>>>>>>> f8fdc4bfcba9c21e5b363fca7936ad5fdf51f33a
          <div className="row">
            <div className="col-7">
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



