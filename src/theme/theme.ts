export interface Palletes {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

export interface NewTheme {
  primary: Palletes;
  secondary: Palletes;
  disabled: Palletes;
  error: Palletes;
  active: Palletes;
  boxShadow: string[];
  background: Palletes;
  borderRadius: string[];
}

const darkTheme: NewTheme = {
  primary: {
    light: '#e0b97a', // Ligeiramente mais claro que o main
    main: '#d7a85e',
    dark: '#b5894a', // Ligeiramente mais escuro que o main
    contrastText: '#211f1f', // Contraste com o background
  },
  secondary: {
    light: '#e2e7e9', // Ligeiramente mais claro que o main
    main: '#dde2e4',
    dark: '#b0b5b7', // Ligeiramente mais escuro que o main
    contrastText: '#211f1f', // Contraste com o background
  },
  disabled: {
    light: '#a6a6a6', // Cinza claro
    main: '#8c8c8c', // Cinza médio
    dark: '#666666', // Cinza escuro
    contrastText: '#ffffff', // Contraste com o texto
  },
  error: {
    light: '#f28b82', // Vermelho claro
    main: '#d93025', // Vermelho
    dark: '#b71c1c', // Vermelho escuro
    contrastText: '#ffffff', // Contraste com o texto
  },
  active: {
    light: '#a6d4fa', // Azul claro
    main: '#42a5f5', // Azul
    dark: '#0077c2', // Azul escuro
    contrastText: '#ffffff', // Contraste com o texto
  },
  boxShadow: [
    '0px 1px 3px rgba(0, 0, 0, 0.12)',
    '0px 1px 2px rgba(0, 0, 0, 0.24)',
  ],
  background: {
    light: '#2e2c2c', // Ligeiramente mais claro que o main
    main: '#211f1f',
    dark: '#1a1818', // Ligeiramente mais escuro que o main
    contrastText: '#ffffff', // Contraste com o texto
  },
  borderRadius: ['4px', '8px'],
};

const lightTheme: NewTheme = {
  primary: {
    light: '#e0b97a', // Ligeiramente mais claro que o main
    main: '#d7a85e',
    dark: '#b5894a', // Ligeiramente mais escuro que o main
    contrastText: '#282321', // Contraste com o background
  },
  secondary: {
    light: '#3a3533', // Ligeiramente mais claro que o main
    main: '#282321',
    dark: '#1f1b1a', // Ligeiramente mais escuro que o main
    contrastText: '#d6d6d6', // Contraste com o background
  },
  disabled: {
    light: '#a6a6a6', // Cinza claro
    main: '#8c8c8c', // Cinza médio
    dark: '#666666', // Cinza escuro
    contrastText: '#ffffff', // Contraste com o texto
  },
  error: {
    light: '#f28b82', // Vermelho claro
    main: '#d93025', // Vermelho
    dark: '#b71c1c', // Vermelho escuro
    contrastText: '#ffffff', // Contraste com o texto
  },
  active: {
    light: '#a6d4fa', // Azul claro
    main: '#42a5f5', // Azul
    dark: '#0077c2', // Azul escuro
    contrastText: '#ffffff', // Contraste com o texto
  },
  boxShadow: [
    '0px 1px 3px rgba(0, 0, 0, 0.12)',
    '0px 1px 2px rgba(0, 0, 0, 0.24)',
  ],
  background: {
    light: '#e0e0e0', // Ligeiramente mais claro que o main
    main: '#d6d6d6',
    dark: '#b3b3b3', // Ligeiramente mais escuro que o main
    contrastText: '#282321', // Contraste com o texto
  },
  borderRadius: ['4px', '8px'],
};

export { darkTheme, lightTheme };
