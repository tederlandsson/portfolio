import React, { Component } from 'react';
import { FontSizes, Margins, Colors, Typography } from '../../theme/';
import styled from 'styled-components'

interface ButtonProps {
  buttonText: string;
  variant?: string;
}
export default class Button extends Component<ButtonProps> {
  render() {
    if (!this.props.variant) {
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
  padding: 0 ${Margins.small} 0 ${Margins.small}; 
  margin: ${Margins.large} ${Margins.large} ${Margins.large} ${Margins.large};
  font-size: ${FontSizes.Large};
  font-family: ${Typography.secondary};
  font-weight: 600;
  text-align: center;
  border-radius: 6px;
  box-shadow: 7px 7px black;
}
`;

// secondary button styling
const StyledSecondaryButton = styled.button`
  background-color: ${Colors.experienceBlue};
  color: ${Colors.white};
  padding: 0 ${Margins.small} 0 ${Margins.small}; 
  margin: ${Margins.large} ${Margins.large} ${Margins.large} ${Margins.large};
  font-size: ${FontSizes.Large};
  font-family: ${Typography.secondary};
  font-weight: 600;
  text-align: center;
  border-radius: 6px;
  box-shadow: 7px 7px black;
}

`;
