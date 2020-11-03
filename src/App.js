import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Contact from './components/contact/contact';

import './App.css';
import content from './content.js'; // My content

// Extenral
import WebFont from 'webfontloader';


WebFont.load({
  google: {
    families: [
      'Neuton:400,700', 'sans-serif',
      'Work Sans:300,400,500,700', 'sans-serif'
    ]
  }
});

class App extends Component {
  render() {
    return (
      <div className="main">
        <Navbar content={content}/>
        <About content={content}/>
        <Contact content={content}/>
        <Footer content={content}/>
      </div>
    )
  }
}

export default App;
