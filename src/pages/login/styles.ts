import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  transition: transform 0.3s ease, height 0.3s ease;
`;

export const CardSwitch = styled.div`
  position: relative;
  margin-top: 1rem;
  width: 380px;
  height: 350px;
  transition: height 0.3s ease;
`;

export const FlipCardInner = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0.8s, height 0.3s ease;
  transform-style: preserve-3d;
  transform: ${({ isFlipped }) =>
    isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

export const FlipCardFront = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  background-color: ${({ theme }) => theme.paper.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  border: ${({ theme }) => theme.border[0]};
  box-shadow: ${({ theme }) => theme.boxShadow[0]};
`;

export const FlipCardBack = styled(FlipCardFront)`
  transform: rotateY(180deg);
`;

export const FlipCardForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 0.5rem;
`;

export const TwoColumns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;

  & > div:first-child {
    flex: 1;
  }

  & > div:last-child {
    flex: 1;
  }
`;

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

// Animação de erro quando ele some (slide de baixo para cima)
const slideUp = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    opacity: 0.5;
    transform: translateY(-5px);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

export const ErrorSpan = styled.span<{ show: boolean }>`
  color: ${({ theme }) => theme.error.main};
  font-size: 0.875rem;
  font-weight: bold;
  transition: opacity 0.3s ease, max-height 0.3s ease;
  max-height: ${({ show }) => (show ? '100px' : '0px')};
  overflow: hidden;
  animation: ${({ show }) => (show ? slideDown : slideUp)} 0.5s ease-in-out;
`;

export const DividerContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  span {
    color: ${({ theme }) => theme.primary.main};
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  height: 0px;
  border: 1px solid;
  border-color: ${({ theme }) => theme.secondary.main};
`;
