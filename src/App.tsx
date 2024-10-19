import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import { SnackbarProvider } from 'notistack';
import { useRoutes } from 'react-router-dom';
import './i18n';
import { routes } from './routes';
import { GlobalStyles, lightTheme } from './theme';

function App() {
  const content = useRoutes(routes);

  return (
    <ThemeProvider theme={lightTheme}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />

      <SnackbarProvider maxSnack={3}>{content}</SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
