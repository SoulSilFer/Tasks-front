/// src\components\navigation\TopMenu\index.tsx

import { FC, useState } from 'react';

import { StyledSelect } from 'src/components/fields';
import { EmailIcon, VisibilityIcon } from 'src/components/icons';
import { MenuPopover } from 'src/components/MenuPopover';
import * as S from './styles';

export const TopMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      name: 'Profile',
      onClick: () => {
        window.alert('Profile clicked');
      },
      icon: <EmailIcon />,
    },
    {
      name: 'Settings hahahah',
      onClick: () => {
        console.log('Settings clicked');
        handleClose();
      },
      icon: <VisibilityIcon visibility />,
    },
  ];

  return (
    <S.HeaderContainer>
      <S.Logo>SilFer.Tasks</S.Logo>

      <S.SelectContainer>
        <StyledSelect
          name="organization"
          placeholder={'Organização'}
          data={[
            ['personal', 'Pessoal'],
            ['all', 'Todas'],
          ]}
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
