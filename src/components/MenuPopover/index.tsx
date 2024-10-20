// src/components/MenuPopover/index.tsx

import React, { useEffect, useRef } from 'react';
import * as S from './styles';

interface MenuItem {
  name: string;
  onClick: () => void;
  icon: React.ReactNode;
}

interface MenuPopoverProps {
  items: MenuItem[];
  anchor: HTMLElement | null;
  onClose: () => void;
}

export const MenuPopover: React.FC<MenuPopoverProps> = ({
  items,
  anchor,
  onClose,
}) => {
  const isOpen = Boolean(anchor);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <S.PopoverContainer ref={popoverRef} isOpen={isOpen}>
      {items.map((item, index) => (
        <S.MenuList key={index}>
          <S.MenuItem
            onClick={(event) => {
              event.stopPropagation(); // Evita que o clique feche o menu imediatamente
              item.onClick(); // Executa a ação do item do menu
              onClose(); // Fecha o menu após a execução
            }}>
            <S.Icon>{item.icon}</S.Icon>

            <S.ItemText>{item.name}</S.ItemText>
          </S.MenuItem>
        </S.MenuList>
      ))}
    </S.PopoverContainer>
  );
};
