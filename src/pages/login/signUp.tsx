// src/pages/login/signUpCard.tsx

import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { GENDER, SignUpInitialValues, SignUpType } from 'src/common';
import {
  StyledButton,
  StyledInput,
  StyledSelect,
  VisibilityIcon,
} from 'src/components';
import { clearSignUpState, signUpRequest } from 'src/core';
import { useApiCallback, useAppSelector } from 'src/hooks';
import { Translations } from 'src/i18n/locales';
import { handleBaseInputChange } from 'src/utils';
import * as S from './styles';

interface Props {
  t: (key: keyof Translations['translations']) => string;
  setCardState: Dispatch<SetStateAction<0 | 1>>;
  passwordType: 'password' | 'text';
  setPasswordType: (value: SetStateAction<'password' | 'text'>) => void;
  setSignUpEmail: (value: string) => void;
}

export const SignUpCard: FC<Props> = ({
  t,
  passwordType,
  setPasswordType,
  setCardState,
  setSignUpEmail,
}) => {
  const [signUpFormData, setSignUpFormData] = useState<
    SignUpType & { confirmPassword: string }
  >({ ...SignUpInitialValues, confirmPassword: '' });
  const [oldSignUpFormData, setOldSignUpFormData] = useState<
    SignUpType & { confirmPassword: string }
  >({ ...SignUpInitialValues, confirmPassword: '' });
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const [apiErrors, setApiErrors] = useState<string[]>([]);
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    setOldSignUpFormData(signUpFormData);
    dispatch(signUpRequest(signUpFormData));
  };

  const { error, load, request } = useAppSelector((state) => state.signUp);

  useEffect(() => {
    // Reset email error when user submits a different value
    if (error) {
      const { message } = error;

      if (Array.isArray(message)) {
        setApiErrors(message);
      } else if (message === 'E-mail already in use') {
        setEmailError(t('emailInUse'));
        setApiErrors([]);
      } else {
        setApiErrors([]);
      }
    }

    if (request) {
      setSignUpEmail(signUpFormData.email);
      setCardState(0);
    }
  }, [error, load, request]);

  // Função para validar o email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Função para lidar com a mudança do input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleBaseInputChange(e, signUpFormData, setSignUpFormData);

    if (e.target.name === 'email') {
      const isValidEmail = validateEmail(e.target.value);
      setEmailError(isValidEmail ? undefined : t('invalidEmail'));
    }

    if (e.target.name === 'birthdate') {
      const date = new Date(e.target.value);
      if (isNaN(date.getTime())) {
        // Data inválida, não altera o valor do campo
        setSignUpFormData((prev) => ({ ...prev, birthdate: '' }));
      }
    }
  };

  const passwordsDontMatch =
    signUpFormData.password !== '' &&
    signUpFormData.confirmPassword !== '' &&
    signUpFormData.password !== signUpFormData.confirmPassword;

  useEffect(() => {
    // Verifica se todos os campos obrigatórios estão preenchidos e não há erros de email
    const isFormFilled =
      signUpFormData.name !== '' &&
      signUpFormData.email !== '' &&
      signUpFormData.password !== '' &&
      signUpFormData.confirmPassword !== '' &&
      !emailError;

    const isFormChanged =
      JSON.stringify(signUpFormData) !== JSON.stringify(oldSignUpFormData);

    setIsFormValid(isFormFilled && isFormChanged && !passwordsDontMatch);
  }, [signUpFormData, emailError, oldSignUpFormData, passwordsDontMatch]);

  useApiCallback({
    callback: clearSignUpState,
    variant: 'success',
    watcher: request,
    customMsg: t('userCreated'),
  });

  return (
    <S.FlipCardBack>
      <S.FlipCardForm>
        <StyledInput
          name="name"
          placeholder={t('name')}
          type="text"
          onChange={(e) =>
            handleBaseInputChange(e, signUpFormData, setSignUpFormData)
          }
          value={signUpFormData.name}
        />
        <StyledInput
          name="email"
          placeholder={t('email')}
          type="email"
          onChange={(e) => handleInputChange(e)}
          value={signUpFormData.email}
          error={emailError}
        />

        <S.TwoColumns>
          <StyledSelect
            name="gender"
            placeholder={t('selectGender')}
            value={signUpFormData.gender}
            onChange={(e) =>
              handleBaseInputChange(e, signUpFormData, setSignUpFormData)
            }
            data={[
              [GENDER.FEMALE, 'Feminino'],
              [GENDER.MALE, 'Masculino'],
              [GENDER.OTHER, 'Outro'],
            ]}
          />

          <StyledInput
            name="birthdate"
            placeholder={t('birthdate')}
            type="date"
            onChange={(e) =>
              handleBaseInputChange(e, signUpFormData, setSignUpFormData)
            }
            value={signUpFormData.birthdate}
          />
        </S.TwoColumns>

        <S.TwoColumns>
          <StyledInput
            name="password"
            placeholder={t('password')}
            type={passwordType}
            onChange={(e) =>
              handleBaseInputChange(e, signUpFormData, setSignUpFormData)
            }
            value={signUpFormData.password}
            endIcon={
              <VisibilityIcon visibility={passwordType === 'password'} />
            }
            onIconClick={() =>
              setPasswordType(passwordType === 'password' ? 'text' : 'password')
            }
          />

          <StyledInput
            name="confirmPassword"
            placeholder={t('confirmPassword')}
            type={passwordType}
            onChange={(e) =>
              handleBaseInputChange(e, signUpFormData, setSignUpFormData)
            }
            value={signUpFormData.confirmPassword}
            endIcon={
              <VisibilityIcon visibility={passwordType === 'password'} />
            }
            onIconClick={() =>
              setPasswordType(passwordType === 'password' ? 'text' : 'password')
            }
          />
        </S.TwoColumns>

        <S.ErrorSpan show={passwordsDontMatch}>
          {t('passwordsDontMatch')}
        </S.ErrorSpan>

        {apiErrors.length > 0 && (
          <S.ErrorSpan show={true}>
            {apiErrors.map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </S.ErrorSpan>
        )}

        <StyledButton
          label={t('confirm')}
          onClick={handleSubmit}
          disabled={!isFormValid || load}
          loading={load}
          type="submit"
        />
      </S.FlipCardForm>
    </S.FlipCardBack>
  );
};
