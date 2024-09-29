import { FC, useState } from 'react';

import { StyledButton, StyledInput } from 'src/components';
import * as S from './styles';

export const HomePage: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <S.PageContainer>
      <StyledInput type={'text'} name={'vitor'} label={'hihi'} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.25rem',
          width: '100%',
        }}>
        <StyledButton
          label="Cancelar"
          onClick={() => setLoading(!loading)}
          loading={loading}
        />

        <StyledButton
          label="Criar conta"
          onClick={() => setLoading(!loading)}
          loading={loading}
        />
      </div>
    </S.PageContainer>
  );
};
