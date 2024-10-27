import { Helmet } from 'react-helmet';

import { SnackbarProvider } from 'notistack';
import { useRoutes } from 'react-router-dom';
import './i18n';
import { routes } from './routes';
import { CustomThemeProvider, GlobalStyles } from './theme';

function App() {
  const content = useRoutes(routes);

  return (
    <CustomThemeProvider>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />

      <SnackbarProvider maxSnack={3}>{content}</SnackbarProvider>
    </CustomThemeProvider>
  );
}

export default App;
