import React, { Component } from 'react';
import { FontSizes, Margins, Colors, Typography } from '../../theme/';
import styled from 'styled-components'

interface ButtonProps {
  buttonText: string;
  color: string;
}
export default class Button extends Component<ButtonProps> {
  render() {
    if (this.props.color === 'primary') {
      return (
        <StyledButton>
          <button className="button">
            {this.props.buttonText}
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
  font-size: ${FontSizes.Large};
  font-family: ${Typography.secondary};
  font-weight: 600;
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
