import React, { Component } from 'react';
import { Colors } from '../../theme';
interface FooterProps {
  content: {
    name: string;
    poweredBy: string;
    fontsUsed: string;
    tests: string;
    lastUpdated: string;
  };
};
class Footer extends Component<FooterProps> {
  render() {
    const content = this.props.content;

    return (
      <div className="footer" style={footerWrapperCSS}>
        <p>{content.poweredBy}</p>
        <p><b>Fonts used:</b> {content.fontsUsed}</p>
        <p><b>Software tests:</b> {content.tests}</p>
        <p><b>Last updated: </b>{content.lastUpdated}</p>
        <br/>
        &copy; Copyright 2020 {content.name}
      </div>   
    );
  }
}

const footerWrapperCSS: object = {
  borderTop: `1px solid ${Colors.borderStroke}`,
  padding: `24px 24px 24px 24px`,
  color: Colors.white,
  background: Colors.darkContainerGradient,
};

export default Footer;