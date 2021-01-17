import React from 'react';
import { FontSizes, Margins, Colors, Typography } from '../../theme/';
import styled from 'styled-components';

type BannerProps = Readonly<{
  text: string;
  url?: string; 
  linkText?: string;
}>;

const Banner: React.FC<BannerProps> = (
  content
) => {
  const {
    text,
    url,
    linkText,
  } = content;

  return (
    <BannerStyling>
      <div className="banner">
        <p>{text}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">{linkText ? linkText : 'here!'}</a>
      </div>
    </BannerStyling>
  );
};

const BannerStyling = styled.button`
  background-color: ${Colors.white};
  font-weight: bold;
  width: 100vw;
}
`;

export default Banner;