import React from 'react';
import { FontSizes, Margins, Colors, Typography } from '../../theme/';
import styled from 'styled-components'

type ButtonProps = Readonly<{
  buttonText: string;
  color: 'primary' | 'secondary' ;
  url?: string;
}>;

const Button: React.FC<ButtonProps> = (
  content
) => {
  const {
    buttonText,
    color,
    url,
  } = content;

  const buttonContent = url ? <a href={url} target="_blank" rel="noopener noreferrer">{buttonText}</a> : buttonText;

  let button;

  if (color.toLowerCase() === 'primary') {
    button =
      <PrimaryStyling>
        <button className="button">{buttonContent}</button>
      </PrimaryStyling>
  } else {
    button =
      <SecondaryStyling>
        <button className="button">{buttonContent}</button>
      </SecondaryStyling>
  }
  return button;
}


// Primary button styling
const PrimaryStyling = styled.button`
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
const SecondaryStyling = styled.button`
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

export default Button;