import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact';

// Theme
import { GlobalStyles } from './theme';

// Content
import { AboutContent, ContactInfo } from './config/about';
class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
          <div className="main">
            <About />
            <Experience />
            <Contact content={ContactInfo.data}/>
            <Footer content={AboutContent.data} />
          </div>
      </>      
    )
  }
}

export default App;
