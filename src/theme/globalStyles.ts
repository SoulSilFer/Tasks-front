/// src\theme\globalStyles.ts

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html, body, #root {
    height: 100%;  
    width: 100%;
    background-color: ${({ theme }) => theme.background.main};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;
