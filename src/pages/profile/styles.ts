/// src\pages\profile\styles.ts

import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.paper.main};
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  border: ${({ theme }) => theme.border[0]};
  box-shadow: ${({ theme }) => theme.boxShadow[0]};
  width: 100%;
  height: 100%;
  padding: 1rem;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export const FieldsContainer = styled.main<{ show: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  & > * {
    margin-bottom: 1rem;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => theme.border[0]};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  position: relative;
  overflow: hidden;
  border-color: ${({ theme }) => theme.primary.main};
  cursor: pointer;
  transition: all 0.3s ease;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
  }

  svg {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.primary.main};
  }

  /* Overlay para o efeito de desfoque */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(4px);
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 50%;
  }

  .pencil-icon {
    position: absolute;
    width: 2rem;
    fill: ${({ theme }) => theme.primary.main};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    &::after {
      opacity: 1;
    }

    .pencil-icon {
      opacity: 1;
      z-index: 1;
    }
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border: '1px solid';
  border-color: ${({ theme }) => theme.secondary.main};
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  & > div {
    flex: 1 1 1px;
    min-width: 201px;
  }
`;

export const LoadingContainer = styled.div<{ show: boolean }>`
  position: absolute;
  opacity: ${({ show }) => (show ? 1 : 0)};
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.paper.main};
  transition: opacity 0.3s ease;
  z-index: ${({ show }) => (show ? 1 : -1)};

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${({ theme }) => theme.primary.main};
    width: 50%;
    height: 50%;
  }
`;
