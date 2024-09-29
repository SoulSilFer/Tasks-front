import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;  /* Adiciona 100% de altura para todos os containers */
    width: 100%;
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.background.main};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;
