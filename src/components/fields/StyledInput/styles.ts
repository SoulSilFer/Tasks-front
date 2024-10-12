import styled from 'styled-components';

export const InputContainer = styled.div<{ hasError: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: fill 0.3s ease, transform 0.3s;

  &:hover {
    span {
      color: ${({ theme, hasError }) =>
        hasError ? theme.error.main : theme.primary.main};
    }

    svg {
      transform: scale(1.08);
    }
  }
`;

export const InputWrapper = styled.div<{ hasError: boolean }>`
  position: relative;
  width: 100%;

  &:hover {
    .endIconWrapper {
      right: 3px;

      svg {
        fill: ${({ theme, hasError }) =>
          hasError ? theme.error.main : theme.primary.main};
      }
    }
  }
`;

export const Input = styled.input<{ hasError: boolean }>`
  width: 100%;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  border: ${({ theme }) => theme.border[0]};
  background-color: #fff;
  position: relative;
  border-color: ${({ theme, hasError }) =>
    hasError ? theme.error.dark : theme.secondary.main};

  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary.main};
  padding: 5px 5px;
  padding-right: 2rem;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease,
    transform 0.3s;

  &::placeholder {
    color: ${({ theme }) => theme.secondary.light};
    opacity: 0.8;
  }

  &:focus,
  &:hover {
    border-color: ${({ theme, hasError }) =>
      hasError ? theme.error.main : theme.primary.main};
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.boxShadow[0]};
  }

  position: relative;

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    position: Absolute;
    left: 80%;
    width: 70%;
    height: 70%;
    opacity: 1;
    box-sizing: Border-box;
  }
`;

export const EndIconWrapper = styled.div<{
  clickable: boolean;
  hasError: boolean;
}>`
  position: absolute;
  right: 0.5rem;
  top: 55%;
  transform: translateY(-50%);
  pointer-events: ${({ clickable }) => (clickable ? 'auto' : 'none')};
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
  transition: fill 0.3s ease, transform 0.3s ease, position 0.3s, right 0.3s;

  svg {
    transition: fill 0.3s ease, transform 0.3s ease, position 0.3s, right 0.3s;

    fill: ${({ theme, hasError }) =>
      hasError ? theme.error.dark : theme.secondary.main};
    width: 1rem;
    height: 1rem;
  }
`;

export const HelperText = styled.span`
  margin-top: 1px;
  color: ${({ theme }) => theme.error.dark};
  font-size: 0.85rem;
  font-weight: bold;
`;
