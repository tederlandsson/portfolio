import React from 'react';
import { Colors } from '../../theme';

type FooterProps = {
  content: {
    name: string;
  };
};

const Footer: React.FC<FooterProps> = ({content})  => {
  return (
    <div className="footer" style={footerWrapperCSS}>
        <p>Powered by React</p>
        <p><b>Fonts used:</b> Avenir, Work Sans</p>
        <p><b>Last updated: </b>8 Nov 2020</p>
        <br/>
        &copy; Copyright 2020 {content.name}
    </div>    
  );
};

const footerWrapperCSS = {
  borderTop: `1px solid ${Colors.borderStroke}`,
  padding: `24px 24px 24px 24px`,
  color: Colors.white,
  background: Colors.darkContainerGradient,
};

export default Footer;