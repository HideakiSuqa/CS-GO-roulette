import React from 'react';
import './App.css';
import Container from './Components/Container/Container'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

export default class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Container />
        <Footer />
      </div> 
    );
  }
}



