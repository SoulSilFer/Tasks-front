type Params = {
  [key: string]: string | undefined; // Permite valores undefined
};

export const paramBuilder = (params: Params): string => {
  const queryParams = Object.keys(params)
    .filter((key) => params[key]) // Filtra as chaves que têm valores
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(
          params[key] as string
        )}`
    ) // Mapeia para string de query
    .join('&'); // Junta tudo com '&'

  return queryParams ? `?${queryParams}` : ''; // Retorna a string final ou vazio se não houver parâmetros
};
