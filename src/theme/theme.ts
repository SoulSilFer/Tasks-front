export interface Pallete {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

export interface NewTheme {
  primary: Pallete;
  secondary: Pallete;
  disabled: Pallete;
  error: Pallete;
  active: Pallete;
  boxShadow: string[];
  background: Pallete;
  borderRadius: string[];
  paper: Pallete;
  border: string[];
}

const darkTheme: NewTheme = {
  primary: {
    light: '#e0b97a',
    main: '#d0983e',
    dark: '#b5894a',
    contrastText: '#211f1f',
  },
  secondary: {
    light: '#e2e7e9',
    main: '#c4c4c4',
    dark: '#b0b5b7',
    contrastText: '#211f1f',
  },
  disabled: {
    light: '#a6a6a6',
    main: '#8c8c8c',
    dark: '#666666',
    contrastText: '#ffffff',
  },
  error: {
    light: '#f28b82',
    main: '#d93025',
    dark: '#b71c1c',
    contrastText: '#ffffff',
  },
  active: {
    light: '#a6d4fa',
    main: '#42a5f5',
    dark: '#0077c2',
    contrastText: '#ffffff',
  },
  boxShadow: [
    '0px 1px 3px rgba(0, 0, 0, 0.12)',
    '0px 1px 2px rgba(0, 0, 0, 0.24)',
  ],
  background: {
    light: '#2e2c2c',
    main: '#17131c',
    dark: '#1a1818',
    contrastText: '#ffffff',
  },
  borderRadius: ['4px', '5px', '8px'],
  paper: {
    main: '#d3d3d3',
    dark: '#6e6e6e',
    light: '#efe3e3',
    contrastText: '#000000',
  },
  border: [''],
};

const lightTheme: NewTheme = {
  primary: {
    light: '#ffbf63',
    main: '#fba11f',
    dark: '#b5894a',
    contrastText: '#282321',
  },
  secondary: {
    light: '#666',
    main: '#323232',
    dark: '#1f1b1a',
    contrastText: '#d6d6d6',
  },
  disabled: {
    light: '#a6a6a6',
    main: '#8c8c8c',
    dark: '#666666',
    contrastText: '#ffffff',
  },
  error: {
    light: '#f28b82',
    main: '#d93025',
    dark: '#b71c1c',
    contrastText: '#ffffff',
  },
  active: {
    light: '#a6d4fa',
    main: '#42a5f5',
    dark: '#0077c2',
    contrastText: '#ffffff',
  },
  boxShadow: ['4px 4px #323232'],
  background: {
    light: '#e0e0e0',
    main: '#ffd864',
    dark: '#b3b3b3',
    contrastText: '#282321',
  },
  borderRadius: ['4px', '5px', '8px'],
  paper: {
    main: '#d3d3d3',
    dark: '#eae7d0',
    light: '#efe3e3',
    contrastText: '#000000',
  },
  border: [
    '2px solid #323232',
    '2px solid #fba11f',
    '1px solid #323232',
    '1px solid #d93025',
  ],
};

export { darkTheme, lightTheme };
