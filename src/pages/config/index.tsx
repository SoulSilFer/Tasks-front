import { FC } from 'react';

import { PageHolder } from 'src/components';
import { useAppTheme, useAppTranslation } from 'src/hooks';
import * as S from './styles';

export const ConfigPage: FC = () => {
  const { t, i18n } = useAppTranslation();
  const selectedLanguage = i18n.language;
  const { toggleTheme, theme } = useAppTheme();

  const handleChangeLanguage = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { value } = e.target;
    void i18n.changeLanguage(value);
  };

  const handleChangeTheme = (_e: React.ChangeEvent<HTMLInputElement>): void => {
    toggleTheme();
  };

  return (
    <PageHolder>
      <S.RadioContainer>
        <h3>{t('language')}:</h3>

        <S.RadioContent>
          <input
            type="radio"
            value="pt-BR"
            checked={selectedLanguage === 'pt-BR'}
            onChange={handleChangeLanguage}
          />
          <span>Português</span>
        </S.RadioContent>

        <S.RadioContent>
          <input
            type="radio"
            value="en-US"
            checked={selectedLanguage === 'en-US'}
            onChange={handleChangeLanguage}
          />
          <span>English</span>
        </S.RadioContent>
      </S.RadioContainer>

      <S.Divider />

      <S.RadioContainer>
        <h3>{t('theme')}:</h3>

        <S.RadioContent>
          <input
            type="radio"
            value="light"
            checked={theme === 'lightThemeOne'}
            onChange={handleChangeTheme}
          />
          <span>{t('light')}</span>
        </S.RadioContent>

        <S.RadioContent>
          <input
            type="radio"
            value="dark"
            checked={theme === 'darkTheme'}
            onChange={handleChangeTheme}
          />
          <span>{t('dark')}</span>
        </S.RadioContent>
      </S.RadioContainer>
    </PageHolder>
  );
};
