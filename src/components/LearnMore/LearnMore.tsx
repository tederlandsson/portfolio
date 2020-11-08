import React, { useState } from 'react';
import { StyledLearnMore } from './LearnMore.styled';
import { Content, OverlayContent } from '../../config/about';
import { isDesktop } from '../../utils';

function LearnMore() {
  const [showAboutMe, setShowAboutMe] = useState(false)

  let overlay
  if (showAboutMe) {
    overlay = 
    <div className="fixed bg-white top-0 left-0 w-full h-full shadow overlay">
      <button className="closeButton border-b-2">{isDesktop ? 'Click' : 'Press'} anywhere to close</button>
      <h2>{OverlayContent.header} I'm {Content.name}</h2>
      <br />
      {OverlayContent.text.map((x) => (
        <p>{x} <br/></p>
      ))}
    </div>
  } else {
    overlay = 
    <p className="prompt">{isDesktop ? 'Click' : 'Press'} here to learn more <i>about me</i></p>
  }

  return (
    <StyledLearnMore>
      <p className="learnMoreLink"
        onClick={() => setShowAboutMe(!showAboutMe)}
      >{overlay}</p>
    </StyledLearnMore>
  )
}

export default LearnMore;