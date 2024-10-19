/// src\components\navigation\TopMenu\styles.ts

import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.paper.main};
  padding: 0 20px;
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  border: ${({ theme }) => theme.border[0]};
  box-shadow: ${({ theme }) => theme.boxShadow[0]};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary.main};
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.secondary.main};
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: ${({ theme }) => theme.border[1]};
  border-radius: 50%;

  transition: box-shadow 0.2s ease-in, transform 0.2s;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow[1]};
    transform: scale(1.1);
  }

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;
