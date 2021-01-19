import React, { Component } from 'react';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact';

// Theme
import { GlobalStyles } from './theme';

// Content
import { AboutContent, ContactInfo, OverlayContent, FooterContent, BannerContent } from './config/about';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
          <div className="main">
            <Banner text={BannerContent.text} url={BannerContent.url} linkText={BannerContent.linkText}/>
            <About aboutContent={AboutContent} overlayContent={OverlayContent}/>
            <Experience />
            <Contact data={ContactInfo.data}/>
            <Footer data={FooterContent.data}
            />
          </div>
      </>      
    )
  }
}

export default App;
