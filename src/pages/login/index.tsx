import { FC, useState } from 'react';

import { useDispatch } from 'react-redux';
import {
  GENDER,
  SignInInitialValues,
  SignInType,
  SignUpInitialValues,
  SignUpType,
} from 'src/common';
import {
  EmailIcon,
  StyledButton,
  StyledInput,
  StyledSelect,
  StyledSlider,
  VisibilityIcon,
} from 'src/components';
import { signInRequest } from 'src/core';
import { useAppTranslation } from 'src/hooks';
import { HandleBaseInputChange } from 'src/utils';
import * as S from './styles';

export const LoginPage: FC = () => {
  const { t } = useAppTranslation();

  const [passwordType, setPasswordType] = useState<'text' | 'password'>(
    'password'
  );
  const [cardState, setCardState] = useState<0 | 1>(0);
  const [signInFormData, setSignInFormData] =
    useState<SignInType>(SignInInitialValues);
  const [signUpFormData, setSignUpFormData] = useState<
    SignUpType & { confirmPassword: string }
  >({ ...SignUpInitialValues, confirmPassword: '' });

  const passwordsDontMatch =
    signUpFormData.password !== '' &&
    signUpFormData.confirmPassword !== '' &&
    signUpFormData.password !== signUpFormData.confirmPassword;

  const dispatch = useDispatch();

  const submit = () =>
    dispatch(
      signInRequest({
        email: signInFormData.email,
        password: signInFormData.password,
      })
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
          <S.FlipCardFront>
            <S.FlipCardForm>
              <StyledInput
                type="email"
                name="email"
                placeholder={t('email')}
                endIcon={<EmailIcon />}
                onChange={(e) =>
                  HandleBaseInputChange(e, signInFormData, setSignInFormData)
                }
                value={signInFormData.email}
              />

              <StyledInput
                name="password"
                placeholder={t('password')}
                type={passwordType}
                onChange={(e) =>
                  HandleBaseInputChange(e, signInFormData, setSignInFormData)
                }
                value={signInFormData.password}
                endIcon={
                  <VisibilityIcon visibility={passwordType === 'password'} />
                }
                onIconClick={() =>
                  setPasswordType(
                    passwordType === 'password' ? 'text' : 'password'
                  )
                }
              />

              <StyledButton
                label="Let's go"
                onClick={submit}
                disabled={false}
                loading={false}
                type="submit"
              />
            </S.FlipCardForm>
          </S.FlipCardFront>

          <S.FlipCardBack>
            <S.FlipCardForm>
              <StyledInput
                name="name"
                placeholder={t('name')}
                type="text"
                onChange={(e) =>
                  HandleBaseInputChange(e, signUpFormData, setSignUpFormData)
                }
                value={signUpFormData.name}
              />
              <StyledInput
                name="email"
                placeholder={t('email')}
                type="email"
                onChange={(e) =>
                  HandleBaseInputChange(e, signUpFormData, setSignUpFormData)
                }
                value={signUpFormData.email}
              />

              <S.TwoColumns>
                <StyledSelect
                  name="gender"
                  placeholder={t('selectGender')}
                  value={signUpFormData.gender}
                  onChange={(e) =>
                    HandleBaseInputChange(e, signUpFormData, setSignUpFormData)
                  }
                  data={[
                    [GENDER.FEMALE, 'Feminino'],
                    [GENDER.MALE, 'Masculino'],
                    [GENDER.OTHER, 'Outro'],
                  ]}
                />

                <StyledInput
                  name="birthDay"
                  placeholder={t('birthdate')}
                  type="date"
                  onChange={(e) =>
                    HandleBaseInputChange(e, signUpFormData, setSignUpFormData)
                  }
                  value={signUpFormData.birthDay}
                />
              </S.TwoColumns>

              <S.TwoColumns>
                <StyledInput
                  name="password"
                  placeholder={t('password')}
                  type="password"
                  onChange={(e) =>
                    HandleBaseInputChange(e, signUpFormData, setSignUpFormData)
                  }
                  value={signUpFormData.password}
                />

                <StyledInput
                  name="confirmPassword"
                  placeholder={t('confirmPassword')}
                  type="password"
                  onChange={(e) =>
                    HandleBaseInputChange(e, signUpFormData, setSignUpFormData)
                  }
                  value={signUpFormData.confirmPassword}
                />
              </S.TwoColumns>

              <S.ErrorSpan show={passwordsDontMatch}>
                As senhas não coincidem
              </S.ErrorSpan>

              <StyledButton
                label={t('confirm')}
                onClick={() => console.log(signUpFormData)}
                disabled={false}
                loading={false}
                type="submit"
              />
            </S.FlipCardForm>
          </S.FlipCardBack>
        </S.FlipCardInner>
      </S.CardSwitch>
    </S.Container>
  );
};
