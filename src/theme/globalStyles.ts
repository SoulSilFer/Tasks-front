import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html, body, #root {
    height: 100svh;
    width: 100svw;
    background-color: ${({ theme }) => theme.background.main};
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow: auto;
    position: relative;
  }

  /* Customizando a barra de rolagem */
  *::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
    height: 10px; /* Altura da barra de rolagem horizontal */
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) =>
      theme.secondary.main}; /* Cor do fundo da barra de rolagem */
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.primary.dark}; /* Cor do thumb da barra de rolagem */
    border-radius: 10px; /* Raio do thumb da barra de rolagem */
    
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) =>
      theme.primary.main}; /* Cor do thumb ao passar o mouse */
  }
`;
