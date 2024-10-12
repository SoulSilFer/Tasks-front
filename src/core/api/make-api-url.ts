import { API_ROUTES } from '.';

const backendUrl = import.meta.env.VITE_BACK_END_URL;

export const makeApiUrl = (route: API_ROUTES): string => {
  return `${backendUrl}/${route}`;
};
