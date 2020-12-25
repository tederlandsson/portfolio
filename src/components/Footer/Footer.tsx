import React, { Suspense } from 'react';
import { Colors } from '../../theme';

interface FooterProps {
  content: {
    name: string;
    poweredBy: string;
    fontsUsed: string;
    lastUpdated: string;
  };
};

const renderLoader = () => <p>Loading</p>;

const Footer: React.FC<FooterProps> = (data) => {
  <Suspense fallback={renderLoader()} />
  return (
    <div className="footer" style={footerWrapperCSS}>
      <p>{data.content.poweredBy}</p>
      <p><b>Fonts used:</b> {data.content.fontsUsed}</p>
      <p><b>Last updated: </b>{data.content.lastUpdated}</p>
      <br/>
      &copy; Copyright 2020 {data.content.name}
    </div>   
  );
};

const footerWrapperCSS: object = {
  borderTop: `1px solid ${Colors.borderStroke}`,
  padding: `24px 24px 24px 24px`,
  color: Colors.white,
  background: Colors.darkContainerGradient,
};

export default Footer;