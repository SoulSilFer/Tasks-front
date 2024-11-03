import { FC } from 'react';

import { PageHolder } from 'src/components';

export const OrganizationPage: FC = () => {
  return (
    <PageHolder>
      <h3>Você não está em nenhuma organização</h3>

      <button>Criar</button>

      <button>Procurar uma</button>
    </PageHolder>
  );
};
