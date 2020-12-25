import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact';

// Theme
import { GlobalStyles } from './theme';

// Content
import { AboutContent } from './config/about';
const footerContent = AboutContent.data
class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
          <div className="main">
            <About />
            <Experience />
            <Contact />
            <Footer content={footerContent}/>
          </div>
      </>      
    )
  }
}

export default App;
