/// src\pages\home\index.tsx

import { FC } from 'react';

import { useNavigate } from 'react-router-dom';
import { PAGES_ROUTES } from 'src/common';
import { StyledButton } from 'src/components';
import * as S from './styles';

export const HomePage: FC = () => {
  const navigateTo = useNavigate();

  return (
    <S.PageContainer>
      <StyledButton
        label="Atualizar a página"
        type="button"
        loading={false}
        onClick={() => navigateTo(PAGES_ROUTES.AUTH)}
      />
    </S.PageContainer>
  );
};
