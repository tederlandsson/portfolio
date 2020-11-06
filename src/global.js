import { createGlobalStyle } from 'styled-components';

const fontSizes = {
  xsmall: '0.75em',
  small: '0.9em',
  medium: '1.0em',
  large: '1.25em',
  Large: '1.5em',
  huge: '2em',
};

export const GlobalStyles = createGlobalStyle`
  html {
    overflow-x: hidden;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    display: grid;
  }
  body::before {
    pointer-events: none;
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.18;
    background-size: 50px 50px;
    background-image: linear-gradient(
        transparent 0%,
        transparent 98%,
      ),
      linear-gradient(
        90deg,
        transparent 0%,
        transparent 98%,
      );
  }

  .main {
    height: 100%;
    width: 100%;
    text-align: center;
  }

  .grid-container {
    display: grid;
  }
  
  .no-bullets {
    list-style-type: none;
    padding: 0 5% 0 5%;
    font-family: 'Work Sans', sans-serif;
  }

  h1 {
    font-size: ${fontSizes.huge};
    font-family: 'Avenir', 'sans-serif';
    font-weight: 400;
  }

  h2 {
    font-style: bold;
    font-size: ${fontSizes.large};
    font-weight: 500;
  }

  h3 {
    font-size: ${fontSizes.medium};
    margin-bottom: -2px
  }

  p {
    font-size: ${fontSizes.medium}};
    font-family: 'Work Sans', sans-serif;
  }

  .backgroundGradient {
    background: rgb(35,108,74);
    background: linear-gradient(0deg, rgba(35,108,74,1) 0%, rgba(36,115,78,0.9962359943977591) 31%, rgba(37,155,100,1) 100%);
  }
`;

export default fontSizes;