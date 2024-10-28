/// src\components\page-holder\index.tsx

import { FC, ReactNode } from 'react';

import * as S from './styles';

interface Props {
  children: ReactNode;
}

export const PageHolder: FC<Props> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};
