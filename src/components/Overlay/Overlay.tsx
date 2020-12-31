import React, { useState } from 'react';
import { isDesktop } from '../../utils';

// Shared components
import Button from '../Button/Button';

// Theme
import { Margins, Colors, FontSizes } from '../../theme';
import styled from 'styled-components';

// Icons
import { Icon } from '@iconify/react';
import seleniumIcon from '@iconify-icons/logos/selenium';
import githubFilled from '@iconify-icons/ant-design/github-filled';
import fileTypeAzurepipelines from '@iconify-icons/vscode-icons/file-type-azurepipelines';
import closeCircleOutlined from '@iconify-icons/ant-design/close-circle-outlined';
import nodeIcon from '@iconify-icons/fa-brands/node';
import fileTypeYarn from '@iconify-icons/vscode-icons/file-type-yarn';
import reactIcon from '@iconify-icons/logos/react';
import browserstackIcon from '@iconify-icons/logos/browserstack';
import personRunningMediumSkinTone from '@iconify-icons/twemoji/person-running-medium-skin-tone';

interface OverlayProps {
  overlayContent: {
    header1: string;
    header2: string;
    text1: any;
    text2?: any;
  },
}

const Overlay = (content: OverlayProps) => {
    const [showAboutMe, setShowAboutMe] = useState(false)
    const icons = [nodeIcon, fileTypeYarn, reactIcon, githubFilled, fileTypeAzurepipelines, browserstackIcon, seleniumIcon];
    
    let overlay
    if (showAboutMe) {
      overlay = 
      <div className="overlay">
        <button className="close-button">{isDesktop ? 'Click' : 'Press'} anywhere to close 
          <Icon icon={closeCircleOutlined} className="closeIcon" /> 
        </button>
        <Icon icon={personRunningMediumSkinTone} className="top-icon"/>
        <div className="header1-container">
          {content.overlayContent.header1 && (
            <h2>{content.overlayContent.header1}</h2>
          )}
          <br />
        </div>
        {content.overlayContent.text1.map((x: string[]) => (
          <p>{x}<br /></p>
        ))}
        <br />
        {content.overlayContent.text2 && content.overlayContent.text2.map((x: string[]) => (
          <p>{x}<br /></p>
        ))}
        <br />
        {content.overlayContent.header2 && (
          <>
            <h3 className="sub-header">{content.overlayContent.header2}</h3>
            <br />
          </>
        )}
        {icons.map((x) => (
            <Icon icon={x} />
        ))}
      </div>
    } else {
      overlay = <>
      < Button buttonText="Read more" color="primary" />
      </>
    }

    return (
      <OverlayStyled>
        <p >{isDesktop ? 'Click' : 'Press'} here to learn more about me</p>
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
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    overflow: scroll;
  }

  .prompt {
    font-size: ${FontSizes.Large};
    font-style: bold;
    margin: 0 ${Margins.large} 0 ${Margins.large};
  }

  .overlay {
    color: ${Colors.white};
    background-color: ${Colors.blueGradientBackGround};
    background: {Colors.blueGradient};
    padding: ${Margins.medium} ${Margins.Large} 0 ${Margins.Large};
  }

  .overlay h2 {
    color: ${Colors.white};
    font-weight: bold;
    margin-top: ${Margins.medium};
  }

  .sub-header {
    font-size: 1.3em;
    font-weight: bold;
  }

  .overlay p {
    text-align: justify;
  }

  .overlay-button {
    text-style: italic;
    font-size: ${FontSizes.large};
    margin-bottom: ${Margins.medium};
    width: 100%;
  }

  .closeIcon {
    font-size: 1.5em;
    margin-top: 15px;
  }

  li {
    display: inline-block;
    margin-left: 6px;
  }

  .top-icon svg {
    font-size: 10em;
  }
`;