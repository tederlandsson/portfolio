import styled from 'styled-components';

export const StyledAbout = styled.div`
  .grid-container > .about {
      grid-column: 2;
      grid-row: 2;
      background: rgb(35,108,74);
      background: linear-gradient(0deg, rgba(35,108,74,1) 0%, rgba(36,115,78,0.9962359943977591) 31%, rgba(37,155,100,1) 100%);
      color: #fff;
      padding: 18px 0px 18px 0px;
      margin-bottom: 3%;
  }

  .about > p {
    margin: 0 5% 0 5%;
    text-align: justify;
  }

`;

export default StyledAbout;