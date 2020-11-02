import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import './App.css';
import portfolioData from './portfolioData.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar portfolioData={portfolioData}/>
        <Footer />
      </div>
    )
  }
}

export default App;
