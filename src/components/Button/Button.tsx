import React from 'react';
import { FontSizes, Margins, Colors, Typography } from '../../theme/';
import styled from 'styled-components'


const Button = (props: any) => {
  return (
    <StyledButton>
      <button className="button">
        {props.buttonText}
      </button>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  padding: 0 ${Margins.small} 0 ${Margins.small}; 
  text-align: center;
  font-size: ${FontSizes.Large};
  font-style: ${Typography.main};
  margins: ${Margins.large} ${Margins.large} ${Margins.large} ${Margins.large};
  background: ${Colors.tangerineYellow};
  color: #000;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 6px 6px black;
`;

export default Button;