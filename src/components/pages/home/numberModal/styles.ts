import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0);
  }
`;

export const Container = styled.div<{ isOpen?: boolean }>`
  z-index: 99999;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  animation: ${fadeIn} 0.3s ease;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.main`
  background-color: #fefefe;
  margin: 15% auto;
  border: ${({ theme }) => theme.border[0]};
  border-radius: ${({ theme }) => theme.borderRadius[0]};
  box-shadow: ${({ theme }) => theme.boxShadow[0]};
  animation: ${slideIn} 0.3s ease;
  width: 12rem;
  height: 4rem;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  span {
    cursor: pointer;
    text-align: center;
    border-radius: 50%;
    width: 1.75rem;
    font-weight: bold;

    border: ${({ theme }) => theme.border[0]};
    border-color: ${({ theme }) => theme.primary.main};
    color: ${({ theme }) => theme.primary.main};

    transition: all 0.2s;
    user-select: none;

    &:hover {
      transform: scale(1.1);
      border-color: ${({ theme }) => theme.primary.dark};
      color: ${({ theme }) => theme.primary.dark};
    }
  }
`;
