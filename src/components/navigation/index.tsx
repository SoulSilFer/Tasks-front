import { FC } from 'react';

import * as S from './styles';
import { TopMenu } from './TopMenu';

export const NavBars: FC = () => {
  return (
    <S.Navbar>
      <TopMenu />
    </S.Navbar>
  );
};
