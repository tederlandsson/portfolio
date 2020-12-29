import React, { Component } from 'react';
import { Colors } from '../../theme';

import pattern from '../../assets/pattern.svg';
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

    return (
      <StyledFooter>
        <div className="footer">
          <p>{content.poweredBy}</p>
          <p><b>Fonts used:</b> {content.fontsUsed}</p>
          <p><b>Software tests:</b> {content.tests}</p>
          <p><b>Last updated: </b>{content.lastUpdated}</p>
          <br/>
          &copy; Copyright 2020 {content.name}
        </div>
      </StyledFooter>
    );
  }
}

const StyledFooter = styled.div`
    border-top: 1px solid ${Colors.borderStroke};
    padding: 24px 24px 24px 24px;
    color: ${Colors.white};
    background-image: url(${pattern});
    border-top: 3px #4a4a4a solid;
  }
`;

export default Footer;