import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Contact from './components/contact/contact';

import './App.css';
import content from './content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar content={content}/>
        <About content={content}/>
        <Contact content={content}/>
        <Footer content={content}/>
      </div>
    )
  }
}

export default App;
