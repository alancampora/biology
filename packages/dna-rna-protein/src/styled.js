import styled, { createGlobalStyle } from 'styled-components';

export const StyledTitle = styled.div`
	font-size: 2em;
	color: red;
`;

export const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Patrick+Hand|Sniglet');
    font-family: 'Sniglet', cursive;
    font-size: 1.2em;
  }
`


