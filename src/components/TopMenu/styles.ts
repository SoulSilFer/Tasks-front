/// src\components\navigation\TopMenu\styles.ts

import styled from 'styled-components';

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: ${({ theme }) => theme.paper.main};
  padding: 0 20px;
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  border: ${({ theme }) => theme.border[0]};
  box-shadow: ${({ theme }) => theme.boxShadow[0]};
  margin-bottom: 1rem;
  min-width: 150px;
`;

export const LogoHomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;

export const HomeIconContainer = styled.div`
  display: flex;
  justify-content: center;

  svg {
    cursor: pointer;
    transition: filter 0.1s, transform 0.1s;
    fill: ${({ theme }) => theme.primary.main};
    width: clamp(2.5rem, 4vw, 1rem);
    height: clamp(2.5rem, 4vw, 1rem);

    &:hover {
      filter: drop-shadow(${({ theme }) => theme.boxShadow[0]});
      transform: scale(1.1);
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: ${({ theme }) => theme.primary.main};
  font-size: clamp(1rem, 4vw, 40px);

  @media (max-width: 400px) {
    display: none;
  }
`;
export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.secondary.main};

  @media (max-width: 350px) {
    display: none;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: ${({ theme }) => theme.border[1]};
  border-radius: 50%;
  border-color: ${({ theme }) => theme.primary.main};

  transition: box-shadow 0.2s ease-in, transform 0.2s;

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow[2]};
    transform: scale(1.1);
  }

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  svg {
    fill: ${({ theme }) => theme.primary.main};
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;
