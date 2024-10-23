import { FC, ReactNode } from 'react';

import * as S from './styles';

interface Props {
  children: ReactNode;
}

export const PageHolder: FC<Props> = ({ children }) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
