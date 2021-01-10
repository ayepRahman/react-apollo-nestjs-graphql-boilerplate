import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');


body {
    background-color: ${p => p.theme.colors.background};
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0; 
  }
`;

export { GlobalStyle };
