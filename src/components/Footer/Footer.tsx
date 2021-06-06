import React from 'react';

// Theme
import pattern from '../../assets/pattern.svg';
import { Colors, Margins } from '../../theme';
import styled from 'styled-components';


type FooterProps = Readonly<{
  data: {
    name: string;
    poweredBy: string,
    fontsUsed: string;
    tests: string;
    lastUpdated?: string; 
  },
}>;

const Footer: React.FC<FooterProps> = (
  content
) => {
  const {
    data: {
      name,
      poweredBy,
      fontsUsed,
      tests,
      lastUpdated,
    }
  } = content;

  const year = new Date().getFullYear();

  return (
    <StyledFooter>
      <div className="footer">
        <p>{poweredBy}</p>
        <p><b>Fonts used:</b> {fontsUsed}</p>
        <p><b>Software tests:</b> {tests}</p>
        {lastUpdated && 
          <p><b>Last updated: </b>{lastUpdated}</p>
        }
        <br/>
        &copy; {year} {name}
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
    border-top: 1px solid ${Colors.borderStroke};
    padding: ${Margins.large} ${Margins.large} ${Margins.large} ${Margins.large};
    color: ${Colors.white};
    position: relative;
    background-image: url(${pattern});
    border-top: 3px #4a4a4a solid;
    z-index: -1;
  }

  .footer::after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, ${Colors.experienceBlue}, rgba(0, 0, 255, 0));
    z-index: -1;
  }
`;

export default Footer;