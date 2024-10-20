// src/components/navigation/TopMenu/index.tsx

import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PAGES_ROUTES } from 'src/common';
import {
  AvatarIcon,
  DoorOutIcon,
  MenuPopover,
  SettingsIcon,
  StyledSelect,
} from 'src/components';
import { useAppLogOut, useAppSelector, useAppTranslation } from 'src/hooks';
import { handleBaseInputChange } from 'src/utils';
import * as S from './styles';

export const TopMenu: FC = () => {
  const navigate = useNavigate();
  const { t } = useAppTranslation();
  const logOut = useAppLogOut();

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
        console.log('Settings clicked');
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
    ['personal', t('personal')],
    ...(request?.organizations?.map((org) => [org.id, org.acronym]) || []),
    ['all', t('allFemale')],
  ];

  console.log({ selectedValue });

  return (
    <S.HeaderContainer>
      <S.Logo>SilFer.Tasks</S.Logo>

      <S.SelectContainer>
        <StyledSelect
          name="organization"
          placeholder={t('organiation')}
          value={selectedValue.organization}
          onChange={(e) =>
            handleBaseInputChange(e, selectedValue, setSelectedValue)
          }
          data={orgArrayData} // Passa o array montado para o StyledSelect
        />
      </S.SelectContainer>

      <S.AvatarContainer onClick={handleOpen}>
        <img
          src="https://lh3.googleusercontent.com/pw/AP1GczMzo15luQmTNJAnNqDN19dvXNOWDkLKCNwxs19CDAeL611MrkEh0aL24AilOHV894J6onDV9amrGLUkxhiHaboXtpIbuEepKtbmIEBIJp_Hng_ZJEv2jOUVjbvhKIt_04zwJ2dfvncxlAFQqK1RyBiJGg=w318-h324-s-no-gm?authuser=0"
          alt="avatar"
        />
      </S.AvatarContainer>

      <MenuPopover items={menuItems} anchor={anchorEl} onClose={handleClose} />
    </S.HeaderContainer>
  );
};
