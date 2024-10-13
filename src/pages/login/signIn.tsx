import { FC, SetStateAction, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { SignInInitialValues, SignInType } from 'src/common';
import {
  EmailIcon,
  StyledButton,
  StyledInput,
  VisibilityIcon,
} from 'src/components';
import { clearSignInState, signInRequest } from 'src/core';
import { useApiCallback, useAppSelector } from 'src/hooks';
import { Translations } from 'src/i18n/locales';
import { handleBaseInputChange } from 'src/utils';
import { PagesContext } from '../PagesProvider';
import * as S from './styles';

interface Props {
  t: (key: keyof Translations['translations']) => string;
  passwordType: 'password' | 'text';
  setPasswordType: (value: SetStateAction<'password' | 'text'>) => void;
  signUpEmail: string;
}

export const SignInCard: FC<Props> = ({
  t,
  passwordType,
  setPasswordType,
  signUpEmail,
}) => {
  const dispatch = useDispatch();
  const { updateCurrentPage } = useContext(PagesContext);

  const [signInFormData, setSignInFormData] =
    useState<SignInType>(SignInInitialValues);
  const [oldSignInFormData, setOldSignInFormData] =
    useState<SignInType>(SignInInitialValues);
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [isFormValid, setIsFormValid] = useState(false);

  const {
    error: authError,
    load: authLoad,
    request: authRequest,
  } = useAppSelector((state) => state.auth.signIn);

  // Função para validar o email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Função para lidar com a mudança do input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleBaseInputChange(e, signInFormData, setSignInFormData);

    if (e.target.name === 'email') {
      const isValidEmail = validateEmail(e.target.value);
      setEmailError(isValidEmail ? undefined : t('invalidEmail'));
    }
  };

  useEffect(() => {
    const isFormFilled =
      signInFormData.email !== '' && signInFormData.password !== '';
    setIsFormValid(isFormFilled && !emailError);
  }, [signInFormData, emailError]);

  const handleSubmit = () => {
    setOldSignInFormData(signInFormData);
    dispatch(signInRequest(signInFormData));
  };

  useEffect(() => {
    if (authRequest) {
      updateCurrentPage('home');
    }
  }, [authRequest, updateCurrentPage]);

  useApiCallback({
    variant: 'error',
    callback: clearSignInState,
    watcher: authError,
  });

  useEffect(() => {
    setSignInFormData({
      password: '',
      email: signUpEmail,
    });
  }, [signUpEmail]);

  const disableButton =
    !isFormValid || authLoad || oldSignInFormData === signInFormData;

  return (
    <S.FlipCardFront>
      <S.FlipCardForm>
        <StyledInput
          type="email"
          name="email"
          placeholder={t('email')}
          endIcon={<EmailIcon />}
          onChange={handleInputChange}
          value={signInFormData.email}
          error={signInFormData.email && emailError}
        />

        <StyledInput
          name="password"
          placeholder={t('password')}
          type={passwordType}
          onChange={(e) =>
            handleBaseInputChange(e, signInFormData, setSignInFormData)
          }
          value={signInFormData.password}
          endIcon={<VisibilityIcon visibility={passwordType === 'password'} />}
          onIconClick={() =>
            setPasswordType(passwordType === 'password' ? 'text' : 'password')
          }
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !disableButton) handleSubmit();
          }}
        />

        <StyledButton
          label={t('letsGo')}
          onClick={handleSubmit}
          disabled={disableButton}
          loading={authLoad}
          type="submit"
        />
      </S.FlipCardForm>
    </S.FlipCardFront>
  );
};
