import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import './i18n';
import { LoginPage, PagesContext, PagesProvider, ROUTES } from './pages';
import { GlobalStyles, lightTheme } from './theme';

const routes: Record<ROUTES, JSX.Element> = {
  login: <LoginPage />,
  home: <div>Home Page</div>,
};

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <PagesProvider>
        <InnerApp />
      </PagesProvider>
    </ThemeProvider>
  );
}

function InnerApp(): React.ReactElement {
  const { currentRoute } = useContext(PagesContext);

  return routes[currentRoute];
}

export default App;
