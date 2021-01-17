import React, { Component } from 'react';
import { FontSizes, Margins, Colors, Typography } from '../../theme/';
import styled from 'styled-components'

interface ButtonProps {
  buttonText: string;
  color: string;
  url?: string;
}
export default class Button extends Component<ButtonProps> {
  render() {
    const btnContent = this.props.url ? <a href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.buttonText}</a> : this.props.buttonText;
    if (this.props.color.toLowerCase() === 'primary') {
      return (
        <StyledButton>
          <button className="button">
            {btnContent}
          </button>
        </StyledButton>
      );
    } else {
      return (
        <StyledSecondaryButton>
          <button className="button">
            {this.props.buttonText}
          </button>
        </StyledSecondaryButton>
      );
    }
  }
}


// Primary button styling
const StyledButton = styled.button`
  background-color: ${Colors.white};
  color: ${Colors.experienceBlue};
  padding: ${Margins.xsmall} ${Margins.small} ${Margins.xsmall} ${Margins.small}; 
  margin: ${Margins.large} ${Margins.large} ${Margins.large} ${Margins.large};
  font-size: ${FontSizes.large};
  font-family: ${Typography.secondary};
  font-weight: 700;
  text-align: center;
  border-radius: 6px;
}

:hover {
  background-color: ${Colors.buttonHover};
}
`;

// secondary button styling
const StyledSecondaryButton = styled.button`
  background-color: ${Colors.experienceBlue};
  color: ${Colors.white};
  border: 1px ${Colors.white} solid;
  padding: 0 ${Margins.small} 0 ${Margins.small}; 
  margin: ${Margins.large} ${Margins.large} ${Margins.large} ${Margins.large};
  font-size: ${FontSizes.Large};
  font-family: ${Typography.secondary};
  font-weight: 700;
  text-align: center;
  border-radius: 6px;
}

`;
