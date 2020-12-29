import React, { useState } from 'react';
import { isDesktop } from '../../utils';

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

function Overlay(content: any) {
  const [showAboutMe, setShowAboutMe] = useState(false)
  const icons = [nodeIcon, fileTypeYarn, reactIcon, githubFilled, fileTypeAzurepipelines, browserstackIcon, seleniumIcon];
  
  let overlay
  if (showAboutMe) {
    overlay = 
    <div className="overlay">
      <button className="closeButton border-b-2">{isDesktop ? 'Click' : 'Press'} anywhere to close <Icon icon={closeCircleOutlined} className="closeIcon" /> </button>
      {content.data.header1 && (
        <>
          <h2>{content.data.header1} I'm {content.data.name}</h2>
          <br />
        </>
      )}
      {content.data.text.map((x: string[]) => (
        <p>{x}<br /></p>
      ))}
      {content.data.header2 && (
        <>
          <h2 className="subHeader">{content.data.header2}</h2>
          <br />
        </>
      )}
      {content.data.text2 && content.data.text2.map((x: string[]) => (
        <p>{x}<br /></p>
      ))}
      <br />
      {icons.map((x) => (
          <Icon icon={x} />
      ))}
    
    </div>
  } else {
    overlay = 
    <p 
      className="prompt">
        {isDesktop ? 'Click' : 'Press'} here to learn more <br />
        <i>about me</i>
    </p>
  }

  return (
    <OverlayStyled>
      <p
        onClick={() => setShowAboutMe(!showAboutMe)}
      >{overlay}</p>
    </OverlayStyled>
  )
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

  .prompt > i {
    font-weight: bold;
    overflow: hidden;
  }

  .overlay {
    color: ${Colors.white};
    background-color: ${Colors.blueGradientBackGround};
    background: {Colors.blueGradient};
    border-top: 10px solid ${Colors.borderStroke};
    padding: ${Margins.medium} ${Margins.Large} 0 ${Margins.Large};
  }

  .overlay > h2 {
    color: ${Colors.white};
    font-weight: bold;
    text-align: left;
    margin-top: ${Margins.medium};
  }


  .subHeader {
    font-size: 1.3em;
  }

  .overlay > p {
    text-align: justify;
    left-align: 50%;
    right-align: 50%;    
  }

  .closeButton {
    position: right;
    text-style: italic;
    font-size: ${FontSizes.large};
    margin-bottom: ${Margins.medium};
  }

  .closeIcon {
    font-size: 1.5em;
    margin-top: 15px;
  }

  li {
    display: inline-block;
    margin-left: 6px;
  }
`;