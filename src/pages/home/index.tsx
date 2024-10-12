import { FC } from 'react';

import { StyledButton, StyledInput } from 'src/components';
import * as S from './styles';

export const HomePage: FC = () => {
  return (
    <S.PageContainer>
      <S.ButtonsContainer>
        <StyledButton
          label="Sing up"
          type="button"
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
          loading={false}
        />

        <StyledButton
          label="Sing up"
          type="button"
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
          loading={false}
        />
      </S.ButtonsContainer>

      <S.FieldsContainer>
        <StyledInput type="text" name="email" placeholder="E-mail" />

        <StyledInput
          type="password"
          name="password"
          placeholder="Senha"
          error="vitor"
        />

        <StyledButton
          label="Sing up"
          type="button"
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
          loading={false}
        />
      </S.FieldsContainer>
    </S.PageContainer>
  );
};
