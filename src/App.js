import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Team from './Components/Team';
import VisionMission from './Components/VisionMission';
import Awards from './Components/Awards';
import Careers from './Components/Careers';
import Testimonials from './Components/Testimonials';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <VisionMission />
        <Team />
        <Awards />
        <Testimonials />
        <Careers />
        <Footer />
      </div>
    );
  }
}

export default App;
