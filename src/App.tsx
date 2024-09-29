import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { routes } from './routes';
import { darkTheme, GlobalStyles, lightTheme } from './theme';

function App() {
  const content = useRoutes(routes);
  const [theme, setTheme] = useState('lightThemeOne');

  const toggleTheme = () => {
    setTheme(theme === 'lightThemeOne' ? 'darkThemeOne' : 'lightThemeOne');
  };

  return (
    <ThemeProvider theme={theme === 'lightThemeOne' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {/* <div> */}
      <button onClick={toggleTheme}>Toggle Theme</button>
      {content}
      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
