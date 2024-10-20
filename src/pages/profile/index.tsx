/// src\pages\profile\index.tsx

import { FC, useEffect, useState } from 'react';

import {
  GENDER,
  GetUserByIdInitialState,
  GetUserByIdResponse,
} from 'src/common';
import {
  AvatarIcon,
  Loading,
  PencilIcon,
  StyledInput,
  StyledSelect,
} from 'src/components';
import { useAppSelector, useAppTranslation } from 'src/hooks';
import * as S from './styles';

export const ProfilePage: FC = () => {
  const { t } = useAppTranslation();

  const [values, setValues] = useState<GetUserByIdResponse>(
    GetUserByIdInitialState
  );
  const [formattedBirthdate, setFormattedBirthdate] = useState<string>('');

  const { request } = useAppSelector((state) => state.getUserById);

  useEffect(() => {
    if (request) {
      setValues(request);
      if (request.birthdate) {
        setFormattedBirthdate(
          formatDateToDisplay(request.birthdate.toString())
        );
      }
    }
  }, [request]);

  const formatDateToDisplay = (date: string) => {
    const [year, month, day] = date.split('-').map(Number);
    const newDate = new Date(year, month - 1, day);
    return newDate.toLocaleDateString();
  };

  const disableFields = true;

  return (
    <S.Container>
      <S.Content>
        <S.FieldsContainer show={!!request}>
          <S.AvatarContainer
            onClick={() => window.alert('Nothing for now, my love.')}>
            {values.picture ? (
              <img src={values.picture} alt="avatar" />
            ) : (
              <AvatarIcon />
            )}
            <PencilIcon className="pencil-icon" />
          </S.AvatarContainer>

          <S.Divider />

          <StyledInput
            name="name"
            placeholder={t('name')}
            withLabel
            value={values.name}
            disabled={disableFields}
          />

          <StyledInput
            name="email"
            placeholder={t('email')}
            withLabel
            value={values.email}
            disabled={disableFields || (request && request.isGoogle && true)}
          />

          <S.FieldGroup>
            <StyledSelect
              name="gender"
              placeholder={t('gender')}
              withLabel={true}
              disabled={disableFields}
              value={values.gender ? values.gender : ''}
              data={[
                [GENDER.FEMALE, t('female')],
                [GENDER.MALE, t('male')],
                [GENDER.OTHER, t('other')],
              ]}
            />

            <StyledInput
              type="date"
              name="birthdate"
              placeholder={t('birthdateFull')}
              withLabel
              value={formattedBirthdate}
              disabled={disableFields}
            />
          </S.FieldGroup>

          <S.Divider />

          {request && !request.isGoogle && (
            <S.FieldGroup>
              <StyledInput
                name="password"
                type="password"
                placeholder={t('changePassword')}
                withLabel
                value={'Oh no, my darling, not in here'}
                disabled={disableFields}
              />

              <StyledInput
                name="password"
                type="password"
                placeholder={t('confirmPassword')}
                withLabel
                value={'Oh no, my darling, not in here'}
                disabled={disableFields}
              />
            </S.FieldGroup>
          )}
        </S.FieldsContainer>

        <S.LoadingContainer show={!request}>
          <Loading />
        </S.LoadingContainer>
      </S.Content>
    </S.Container>
  );
};
