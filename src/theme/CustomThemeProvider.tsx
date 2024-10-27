import React, { createContext, ReactNode, useState } from 'react';
import { darkTheme, lightTheme } from 'src/theme';
import { ThemeProvider } from 'styled-components';

interface AppThemeContextProps {
  toggleTheme: () => void;
  theme: string;
}

export const AppThemeContext = createContext<AppThemeContextProps | undefined>(
  undefined
);

export const CustomThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState('lightThemeOne');

  const toggleTheme = () => {
    setTheme(theme === 'lightThemeOne' ? 'darkTheme' : 'lightThemeOne');
  };

  return (
    <AppThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme === 'lightThemeOne' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};
