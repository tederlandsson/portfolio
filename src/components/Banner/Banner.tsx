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
      <div
        className="banner"
      >
        <p>{text} 
          <a href={url} target="_blank" rel="noopener noreferrer">{linkText ? linkText : 'here!'}</a>
        </p>
      </div>
    </BannerStyling>
  );
};

const BannerStyling = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  font-family: ${Typography.main};
  font-weight: 300;
  background-color: ${Colors.blueGradientBackGround};
  color: white;
  padding: ${Margins.small} 0 ${Margins.small} 0;
  width: 100vw;
  }

  a:link, a:visited {
    font-family: ${Typography.secondary};
    color: ${Colors.aqua};
    font-size: ${FontSizes.medium};
    font-weight: bold;
    text-decoration: underline;
  }
}
`;

export default Banner;