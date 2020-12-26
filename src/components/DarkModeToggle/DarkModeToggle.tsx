import React, { useState } from 'react';

function DarkModeToggle() {
  const [showDarkMode, setDarkMode] = useState(true)

  let brightModeStyling
  let darkModeStyling
  let styling

  if (showDarkMode) {
    // styling = darkModeStyling;
  }

  return (
    <div className="toggleButton">

    </div>
  )
}

export default DarkModeToggle;