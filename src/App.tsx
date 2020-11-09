import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact';

import { GlobalStyles } from './theme';

class App extends Component {
  render() {
    return (
        <>
          <GlobalStyles />
          <div className="main">
            {/* <Navbar /> */}
            <About />
            <Experience />
            <Contact />
            <Footer />
          </div>
        </>      
    )
  }
}

export default App;
