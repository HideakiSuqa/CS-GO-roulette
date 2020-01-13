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
             <div className="hero_roulette">
              <div className="hero_roulette-text">
                <span className="hero_roulette_text-ico"><i className="fas fa-chevron-right"></i></span><a href="#">skins</a><br/><span className="hero_roulette_text_number"><p>36 100</p>
                </span>
              </div>
             < Circle />
             </div>
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



