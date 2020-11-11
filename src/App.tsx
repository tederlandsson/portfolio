import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact';

import { AboutContent } from './config/about';

import { GlobalStyles } from './theme';

class App extends Component {
  render() {
    return (
        <>
          <GlobalStyles />
            <div className="main">
              {/* <Navbar content={AboutCo  <ntent.data}/> */}
              <About />
              <Experience />
              <Contact />
              <Footer content={AboutContent.data}/>
            </div>
        </>      
    )
  }
}

export default App;
