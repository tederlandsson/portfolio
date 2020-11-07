import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact';

import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { GlobalStyles } from './theme';

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
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <div className="main">
            <Navbar />
            <About />
            <Experience />
            <Contact content={content}/>
            <Footer />
          </div>
        </>
      </ThemeProvider>
      
    )
  }
}

export default App;
