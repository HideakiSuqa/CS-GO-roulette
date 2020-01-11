import React from 'react';
import './Main.css';
import Container from './Components/Container/Container';
import Footer from './Components/Header/Footer';
import Header from './Components/Footer/Header';


export default class App extends React.Component {
  render(){
    return (
      <div className="body">
        <Header />
        <Container />
        <Footer />
      </div> 
    );
  }
}



