import styled, { createGlobalStyle } from 'styled-components';

export const StyledTitle = styled.div`
	font-size: 2em;
	color: red;
`;

export const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Patrick+Hand');
    font-family: 'Patrick Hand', sans-serif;
  }
`


