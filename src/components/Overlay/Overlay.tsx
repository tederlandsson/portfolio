import React, { useState } from 'react';
import { isDesktop } from '../../utils';
import { Margins, Colors, FontSizes } from '../../theme';

import styled from 'styled-components';
import { Icon } from '@iconify/react';
import closeCircleOutlined from '@iconify-icons/ant-design/close-circle-outlined';

function Overlay(content: any) {
  const [showAboutMe, setShowAboutMe] = useState(false)
  
  let overlay
  if (showAboutMe) {
    overlay = 
    <div className="fixed bg-white top-0 left-0 w-full h-full shadow overlay">
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
          <h2>{content.data.header2}</h2>
          <br />
        </>
      )}
      {content.data.text2 && content.data.text2.map((x: string[]) => (
        <p>{x}<br /></p>
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
  .prompt {
    font-size: ${FontSizes.Large};
    font-style: bold;
    margin: 0 ${Margins.large} -3% ${Margins.large};
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
    padding: ${Margins.medium} ${Margins.Large} ${Margins.Large} ${Margins.Large};
  }

  .overlay > h2 {
    color: ${Colors.white};
    font-weight: bold;
    text-align: left;
    margin-top: ${Margins.medium};
  }

  .overlay > p {
    text-align: justify;
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