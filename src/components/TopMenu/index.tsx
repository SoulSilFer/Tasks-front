// src/components/navigation/TopMenu/index.tsx

import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGES_ROUTES, SHOW_TASK, STORAGE_KEYS } from 'src/common';
import {
  AvatarIcon,
  DoorOutIcon,
  HomeIcon,
  MenuPopover,
  SettingsIcon,
  StyledSelect,
} from 'src/components';
import { LocalStorage } from 'src/core';
import { useAppLogOut, useAppSelector, useAppTranslation } from 'src/hooks';
import { handleBaseInputChange } from 'src/utils';
import * as S from './styles';

export const TopMenu: FC = () => {
  const navigate = useNavigate();
  const { t } = useAppTranslation();
  const logOut = useAppLogOut();
  const localStorage = new LocalStorage();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedValue, setSelectedValue] = useState<{ organization: string }>({
    organization: '',
  });

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      name: t('profile'),
      onClick: () => {
        navigate(PAGES_ROUTES.PROFILE);
      },
      icon: <AvatarIcon />,
    },
    {
      name: t('settings'),
      onClick: () => {
        navigate(PAGES_ROUTES.CONFIG);
      },
      icon: <SettingsIcon />,
    },
    {
      name: t('logOut'),
      onClick: () => {
        logOut();
      },
      icon: <DoorOutIcon />,
    },
  ];

  const { request } = useAppSelector((state) => state.getUserById);

  const orgArrayData = [
    [SHOW_TASK.USER, t('personal')],
    ...(request?.organizations?.map((org) => [org.id, org.acronym]) || []),
    [SHOW_TASK.ALL, t('allFemale')],
  ];

  useEffect(() => {
    if (selectedValue.organization) {
      localStorage.set(STORAGE_KEYS.SELECT_ORG, selectedValue.organization);
    }
  }, [selectedValue]);

  return (
    <S.HeaderContainer>
      <S.LogoHomeContainer>
        <S.HomeIconContainer onClick={() => navigate(PAGES_ROUTES.HOME)}>
          <HomeIcon />
        </S.HomeIconContainer>

        <S.Logo>SilFer.Tasks</S.Logo>
      </S.LogoHomeContainer>

      <S.SelectContainer>
        <StyledSelect
          name="organization"
          placeholder={t('organiation')}
          value={selectedValue.organization}
          onChange={(e) => {
            handleBaseInputChange(e, selectedValue, setSelectedValue);
          }}
          data={orgArrayData} // Passa o array montado para o StyledSelect
        />
      </S.SelectContainer>

      <S.AvatarContainer onClick={handleOpen}>
        {request && request.picture ? (
          <img src={request.picture} alt="avatar" />
        ) : (
          <AvatarIcon />
        )}
      </S.AvatarContainer>

      <MenuPopover items={menuItems} anchor={anchorEl} onClose={handleClose} />
    </S.HeaderContainer>
  );
};
