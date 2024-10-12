import React, { createContext, useState } from 'react';

export type ROUTES = 'login' | 'home';

interface ContextProps {
  currentRoute: ROUTES;
  updateCurrentPage: (page: ROUTES) => void;
}

export const PagesContext = createContext({} as ContextProps);

type Props = {
  children: React.ReactNode;
};

export const PagesProvider = ({ children }: Props) => {
  const [currentRoute, setCurrentRoute] = useState<ROUTES>('login');

  const updateCurrentPage = (page: ROUTES) => {
    setCurrentRoute(page);
  };

  return (
    <PagesContext.Provider value={{ currentRoute, updateCurrentPage }}>
      {children}
    </PagesContext.Provider>
  );
};
