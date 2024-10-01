import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  perspective: 1000px;
  margin-top: 1rem;
`;

export const CardSwitch = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
`;

export const FlipCardInner = styled.div<{ isFlipped: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: transform 0.8s;
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
  gap: 20px;
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  border: ${({ theme }) => theme.border[0]};
  box-shadow: ${({ theme }) => theme.boxShadow[0]};
`;

export const FlipCardBack = styled(FlipCardFront)`
  transform: rotateY(180deg);
`;

export const FlipCardForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const FlipCardInput = styled.input`
  width: 250px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  border: ${({ theme }) => theme.border[0]};
  background-color: #fff;

  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary.main};
  padding: 5px 10px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease,
    transform 0.3s;

  &::placeholder {
    color: ${({ theme }) => theme.secondary.light};
    opacity: 0.8;
  }

  &:focus,
  &:hover {
    border: ${({ theme }) => theme.border[1]};
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.boxShadow[0]};
  }
`;

export const FlipCardButton = styled.button`
  margin: 20px 0;
  width: 120px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  border: ${({ theme }) => theme.border[0]};
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow[0]};
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary.main};
  cursor: pointer;

  transition: border-color 0.3s ease, transform 0.1s;

  &:hover {
    border-color: ${({ theme }) => theme.primary.main};
  }

  &:active {
    box-shadow: none;
    transform: translate(3px, 3px);
  }
`;
