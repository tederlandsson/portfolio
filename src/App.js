import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';

import './App.css';
import portfolioData from './portfolioData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar portfolioData={portfolioData}/>
        <Contact portfolioData={portfolioData}/>
        <Footer />
      </div>
    )
  }
}

export default App;
