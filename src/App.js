import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Team from './Components/Team';
import Vision_Mission from './Components/Vision_Mission';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Vision_Mission />
        <Team />
        <Footer />
      </div>
    );
  }
}

export default App;
