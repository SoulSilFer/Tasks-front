/// src\pages\login\signInCard.tsx

import { FC, SetStateAction, useState } from 'react';
import { Translations } from 'src/i18n/locales';

import { GENDER, SignUpInitialValues, SignUpType } from 'src/common';
import {
  StyledButton,
  StyledInput,
  StyledSelect,
  VisibilityIcon,
} from 'src/components';
import { HandleBaseInputChange } from 'src/utils';
import * as S from './styles';

interface Props {
  t: (key: keyof Translations['translations']) => string;

  passwordType: 'password' | 'text';
  setPasswordType: (value: SetStateAction<'password' | 'text'>) => void;
}

export const SignUpCard: FC<Props> = ({ t, passwordType, setPasswordType }) => {
  const [signUpFormData, setSignUpFormData] = useState<
    SignUpType & { confirmPassword: string }
  >({ ...SignUpInitialValues, confirmPassword: '' });

  const passwordsDontMatch =
    signUpFormData.password !== '' &&
    signUpFormData.confirmPassword !== '' &&
    signUpFormData.password !== signUpFormData.confirmPassword;

  return (
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
            type={passwordType}
            onChange={(e) =>
              HandleBaseInputChange(e, signUpFormData, setSignUpFormData)
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
              HandleBaseInputChange(e, signUpFormData, setSignUpFormData)
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
  );
};
