import { FC, useState } from 'react';

import { StyledSlider } from 'src/components';
import * as S from './styles';

export const LoginPage: FC = () => {
  const [cardState, setCardState] = useState<0 | 1>(0);

  return (
    <S.Container>
      <StyledSlider
        firstName="Log in"
        secondName="Sign up"
        setValue={setCardState}
      />

      <S.Wrapper>
        <S.CardSwitch>
          <S.FlipCardInner isFlipped={cardState === 1}>
            <S.FlipCardFront>
              <S.FlipCardForm>
                <S.FlipCardInput
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <S.FlipCardInput
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <S.FlipCardButton>Let's go!</S.FlipCardButton>
              </S.FlipCardForm>
            </S.FlipCardFront>

            <S.FlipCardBack>
              <S.FlipCardForm>
                <S.FlipCardInput placeholder="Name" type="text" />
                <S.FlipCardInput
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                <S.FlipCardInput
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <S.FlipCardButton>Confirm!</S.FlipCardButton>
              </S.FlipCardForm>
            </S.FlipCardBack>
          </S.FlipCardInner>
        </S.CardSwitch>
      </S.Wrapper>
    </S.Container>
  );
};
