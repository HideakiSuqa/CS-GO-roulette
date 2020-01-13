import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Circle from './Components/Circle/Circle';

export default class App extends React.Component {
  render(){
    return (
      <div className="BodyBody">
      <Header />
      <section className="hero bg_gradient">
        <div className="container-fluid">
          <div className="row">
            <div className="col-5">
             < Circle />
            </div>
            <div className="col-4">
              <p>AAAAAAAAAAAAAAAAAAAAAAA</p>
            </div>
            <div className="col-3"><p>AAAAAAAAAAAAAAAAAAAAAAA</p></div>
          </div>
        </div>
      </section> 
      <Footer />
      </div>
    );
  }
}



