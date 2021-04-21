import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Team from './Components/Team';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Team />
        {/* <About/>
        <Resume data={this.state.resumeData.resume}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact/>
        <Footer/> */}
        <Footer />
      </div>
    );
  }
}

export default App;
