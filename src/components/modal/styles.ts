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

export const Container = styled.div<{ isOpen?: string; sub?: string }>`
  z-index: ${({ sub }) => (sub ? 100000 : 99999)};
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: ${({ sub }) =>
    sub ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.4)'};
  animation: ${fadeIn} 0.3s ease;
`;

export const Content = styled.main<{ sub?: string }>`
  background-color: #fefefe;
  margin: ${({ sub }) => (sub ? '20% auto' : '15% auto')};
  border: ${({ theme }) => theme.border[0]};
  border-radius: ${({ theme }) => theme.borderRadius[0]};
  box-shadow: ${({ theme }) => theme.boxShadow[0]};
  width: ${({ sub }) => (sub ? '60%' : '80%')};
  animation: ${slideIn} 0.3s ease;
`;
