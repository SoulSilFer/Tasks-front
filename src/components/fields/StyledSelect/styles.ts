// src/components/fields/StyledInput/styles.ts
import styled from 'styled-components';

export const SelectContainer = styled.div<{ hasError: boolean }>`
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

export const SelectWrapper = styled.div<{ hasError: boolean }>`
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

export const Label = styled.label<{ hasError: boolean }>`
  pointer-events: none;
  transition: color 0.2s ease;
  margin-left: 1px;
  margin-bottom: 1px;
  font-weight: bold;
  width: max-content;
  color: ${({ theme, hasError }) =>
    hasError ? theme.error.dark : theme.secondary.main};
`;

export const Select = styled.select<{
  hasError: boolean;
  noValue: boolean;
  disabled?: boolean;
}>`
  width: 100%;
  height: 40px;

  border-color: ${({ theme, hasError }) =>
    hasError ? theme.error.dark : theme.secondary.main};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.disabled.background : '#fff'};
  color: ${({ theme, disabled }) =>
    disabled ? theme.disabled.main : theme.secondary.main};

  border-radius: ${({ theme }) => theme.borderRadius[1]};
  border: ${({ theme }) => theme.border[0]};
  position: relative;
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.secondary.main};
  padding: 5px 5px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease,
    transform 0.3s;
  color: ${({ theme, noValue }) =>
    noValue ? '#3232329c' : theme.secondary.main};
  option {
    font-weight: bold;
    color: ${({ theme }) => theme.secondary.main};
  }
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &:focus + ${Label}, &:hover + ${Label} {
    color: ${({ theme, hasError }) =>
      hasError ? theme.error.main : theme.primary.main};
  }
  &:focus,
  &:hover {
    border-color: ${({ theme, hasError }) =>
      hasError ? theme.error.main : theme.primary.main};
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.boxShadow[0]};
  }

  &:disabled {
    color: ${({ theme }) => theme.disabled.main};
    cursor: default;
    border-color: ${({ theme }) => theme.disabled.main};
    pointer-events: none;
    background-color: ${({ theme }) => theme.disabled.light};
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
