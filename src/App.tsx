import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact';

// import { ThemeProvider } from 'styled-components';
// import { Theme } from './theme/index';
import { GlobalStyles } from './theme';

class App extends Component {
  render() {
    return (
      // <ThemeProvider theme={Theme}>
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
      // </ThemeProvider>
      
    )
  }
}

export default App;
