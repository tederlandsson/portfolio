import React, { useState } from 'react';
import { StyledLearnMore } from './LearnMore.styled';
import { Content, OverlayContent } from '../../config/about';

function LearnMore() {
  const [showAboutMe, setShowAboutMe] = useState(false)

  let overlay
  if (showAboutMe) {
    overlay = 
    <div className="fixed bg-white top-0 left-0 w-full h-full shadow overlay">
      <button className="closeButton">Close</button>
      <h2>{OverlayContent.header} I'm {Content.name}</h2>
      <br />
      <p>{OverlayContent.text}</p>
    </div>
  } else {
    overlay = 
    <p className="prompt">Click here to earn more <i>about me</i></p>
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