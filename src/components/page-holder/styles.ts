import styled, { keyframes } from 'styled-components';

const heightAnimation = keyframes`
  0% {
    max-height: 0;
  }
  100% {
    max-height: 100%;
  }
`;

export const Container = styled.div<{ height?: string }>`
  background-color: ${({ theme }) => theme.paper.main};
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  border: ${({ theme }) => theme.border[0]};
  box-shadow: ${({ theme }) => theme.boxShadow[0]};
  width: 100%;
  padding: 1rem;
  position: relative;
  min-width: 350px;
  margin-top: 1rem;
  height: fit-content;
  animation: ${heightAnimation} 0.2s ease;
`;

// background-color: ${({ theme }) => theme.paper.main};
// border-radius: ${({ theme }) => theme.borderRadius[1]};
// border: ${({ theme }) => theme.border[0]};
// box-shadow: ${({ theme }) => theme.boxShadow[0]};
// width: 100%;
// height: fit-content;
// padding: 1rem;
// position: relative;
// min-width: 350px;
// margin-top: 1rem;

// transition: all;
