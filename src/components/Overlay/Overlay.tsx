import React, { useState } from 'react';
import { isDesktop } from '../../utils';

// Shared components
import Button from '../Button/Button';

// Theme
import { Margins, Colors, FontSizes } from '../../theme';
import styled from 'styled-components';

// Icons
import { Icon } from '@iconify/react';
import githubFilled from '@iconify-icons/ant-design/github-filled';
import fileTypeAzurepipelines from '@iconify-icons/vscode-icons/file-type-azurepipelines';
import closeCircleOutlined from '@iconify-icons/ant-design/close-circle-outlined';
import nodeIcon from '@iconify-icons/fa-brands/node';
import fileTypeYarn from '@iconify-icons/vscode-icons/file-type-yarn';
import reactIcon from '@iconify-icons/logos/react';
import browserstackIcon from '@iconify-icons/logos/browserstack';
import personRunningMediumSkinTone from '@iconify-icons/twemoji/person-running-medium-skin-tone';
import javascriptIcon from '@iconify-icons/logos/javascript';
import typescriptIcon from '@iconify-icons/logos/typescript-icon';

interface OverlayProps {
  overlayContent: {
    header1: string;
    header2?: string;
    text1: string[];
    text2?: string[];
  };
};

const Overlay = (content: OverlayProps) => {
    const [showAboutMe, setShowAboutMe] = useState(false)
    const icons = [typescriptIcon, javascriptIcon, reactIcon, fileTypeYarn, nodeIcon, githubFilled, fileTypeAzurepipelines, browserstackIcon];
    
    let overlay
    if (showAboutMe) {
      overlay = 
      <div className="overlay">
        <button className="close-button">{isDesktop ? 'Click' : 'Tap'} anywhere to close 
          <Icon icon={closeCircleOutlined} className="closeIcon" />
        </button>
        <br />
        <Icon icon={personRunningMediumSkinTone} className="top-icon"/>
        <div className="header1-container">
          {content.overlayContent.header1 && (
            <h2>{content.overlayContent.header1}</h2>
          )}
          <br />
        </div>
        {content.overlayContent.text1.map((x: string) => (
          <p>{x}<br /></p>
        ))}
        <br />
        {content.overlayContent.text2 && content.overlayContent.text2.map((x: string) => (
          <p>{x}<br /></p>
        ))}
        <br />
        {content.overlayContent.header2 && (
          <>
            <h3>{content.overlayContent.header2}</h3>
          </>
        )}
        {icons.map((x) => (
            <Icon icon={x} />
        ))}
      </div>
    } else {
      overlay = <>
      <Button buttonText="About me" color="primary" />
      </>
    }

    return (
      <OverlayStyled>
        <p >{isDesktop ? 'Click' : 'Tap'} here to learn more about me</p>
        <button
          className="overlay-button"
          onClick={() => setShowAboutMe(!showAboutMe)}
        >{overlay}</button>
      </OverlayStyled>
    );
}

export default Overlay;

const OverlayStyled = styled.div`
  .overlay {
    z-index: 2;
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    height: 100vh;
    overflow: scroll;
    color: ${Colors.white};
    background-color: ${Colors.blueGradientBackGround};
    background: {Colors.blueGradient};
    padding: ${Margins.medium} ${Margins.Large} 0 ${Margins.Large};
    text-align: center;
  }

  .overlay h2 {
    color: ${Colors.white};
    font-weight: bold;
    margin-top: ${Margins.medium};
  }

  .overlay h3 {
    font-weight: bold;
  }

  .overlay p {
    margin: auto 5% auto 10%;
    position: center;
    max-width: ${isDesktop ? '80%' : '80%'};
    font-size: ${FontSizes.medium};
    text-align: ${isDesktop ? 'justify' : 'justify'};  
    text-justify: inter-word;
  }

  .closeIcon {
    font-size: ${FontSizes.Large};
    margin-top: 15px;
  }

  li {
    display: inline-block;
    margin-left: 6px;
  }

  .top-icon svg {
    font-size: 10em;
  }
  
  a {
    color: ${Colors.white};
    font-size: ${FontSizes.medium};
    font-weight: bold;
    text-decoration: underline;
  }
`;