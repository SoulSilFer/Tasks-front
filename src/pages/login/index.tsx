/// src\pages\login\index.tsx

import { FC, useState } from 'react';

import { StyledSlider } from 'src/components';
import { useAppTranslation } from 'src/hooks';
import { SignInCard } from './signIn';
import { SignUpCard } from './signUp';
import * as S from './styles';

export const LoginPage: FC = () => {
  const { t } = useAppTranslation();

  const [cardState, setCardState] = useState<0 | 1>(0);
  const [passwordType, setPasswordType] = useState<'text' | 'password'>(
    'password'
  );

  return (
    <S.Container>
      <StyledSlider
        firstName="Log in"
        secondName="Sign up"
        setValue={setCardState}
      />

      <S.CardSwitch>
        <S.FlipCardInner isFlipped={cardState === 1}>
          <SignInCard
            passwordType={passwordType}
            setPasswordType={setPasswordType}
            t={t}
          />

          <SignUpCard
            t={t}
            passwordType={passwordType}
            setPasswordType={setPasswordType}
          />
        </S.FlipCardInner>
      </S.CardSwitch>
    </S.Container>
  );
};
