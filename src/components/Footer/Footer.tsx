import React, { Component } from 'react';

// Theme
import pattern from '../../assets/pattern.svg';
import { Colors, Margins } from '../../theme';
import styled from 'styled-components';
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
    const year = new Date().getFullYear();

    return (
      <StyledFooter>
        <div className="footer">
          <p>{content.poweredBy}</p>
          <p><b>Fonts used:</b> {content.fontsUsed}</p>
          <p><b>Software tests:</b> {content.tests}</p>
          <p><b>Last updated: </b>{content.lastUpdated}</p>
          <br/>
          &copy; {year} {content.name}
        </div>
      </StyledFooter>
    );
  }
}

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