/// src\components\MenuPopover\styles.ts

import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  0% { 
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

export const PopoverContainer = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 50px; /* Ajuste conforme necessário */
  right: 10px; /* Ajuste conforme necessário */
  border-radius: ${({ theme }) => theme.borderRadius[0]};
  padding: 0.5rem;
  z-index: 1000;
  width: auto;
  background-color: ${({ theme }) => theme.background.light};
  border: ${({ theme }) => theme.border[1]};
  box-shadow: ${({ theme }) => theme.boxShadow[0]};
  animation: ${({ isOpen }) => (isOpen ? slideDown : slideUp)} 0.3s ease;
  transition: opacity 0.3s, transform 0.3s;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-10px)'};
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
  justify-content: flex-start;

  &:hover {
    background-color: ${({ theme }) => theme.background.dark};
  }
`;

export const Icon = styled.span`
  display: flex;
  margin-right: 0.75rem;
  svg {
    width: 1.25rem;
    height: 1.25rem;
    fill: ${({ theme }) => theme.primary.main};
  }
`;

export const ItemText = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.primary.contrastText};
`;
