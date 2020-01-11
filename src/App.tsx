import React from 'react';
import './App.css';
import Container from './Components/Container/Container'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';

export default class App extends React.Component {
  render(){
    return (
      <div className="body">
        <Header />
        <Hero />
        <Container />
        <Footer />
      </div> 
    );
  }
}



