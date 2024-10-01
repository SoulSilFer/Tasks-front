import { FC, HTMLInputTypeAttribute } from 'react';
import styled from 'styled-components';

interface Props {
  type: HTMLInputTypeAttribute;
  name: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
  label: string;
  endIcon?: React.ReactNode;
  onIconClick?: () => void;
}

const InputContainer = styled.div<{ hasError: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: fill 0.3s ease;

  &:hover {
    label {
      color: ${({ theme, hasError }) =>
        hasError ? theme.error.main : theme.primary.main};
    }

    input {
      border-color: ${({ theme, hasError }) =>
        hasError ? theme.error.main : theme.primary.main};
    }

    span {
      color: ${({ theme, hasError }) =>
        hasError ? theme.error.main : theme.primary.main};
    }

    svg {
      fill: ${({ theme, hasError }) =>
        hasError ? theme.error.main : theme.primary.main};
    }
  }

  &:focus {
    label {
      color: ${({ theme, hasError }) =>
        hasError ? theme.error.main : theme.primary.main};
    }
  }
`;

const Label = styled.label<{ hasError: boolean }>`
  margin-bottom: 1px;
  color: ${({ theme, hasError }) =>
    hasError ? theme.error.dark : theme.secondary.main};
  width: max-content;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input<{ hasError: boolean }>`
  padding: 0.5rem;
  padding-right: 2.5rem; /* Espaço para o ícone */
  border: 1px solid
    ${({ theme, hasError }) =>
      hasError ? theme.error.dark : theme.secondary.main};
  border-radius: 4px;
  width: 100%;
  color: ${({ theme, hasError }) =>
    hasError ? theme.error.dark : theme.secondary.main};
  transition: border-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease,
    transform 0.3s;
  background-color: ${({ theme }) => theme.disabled.contrastText};

  &:focus {
    border-color: ${({ theme, hasError }) =>
      hasError ? theme.error.main : theme.primary.dark};
    outline: none;
    color: ${({ theme, hasError }) =>
      hasError ? theme.error.main : theme.primary.main};
    transform: scale(1.01);
    box-shadow: ${({ theme }) => theme.boxShadow[0]};
  }

  &:active {
    border-color: ${({ theme, hasError }) =>
      hasError ? theme.error.main : theme.primary.dark};
    color: ${({ theme, hasError }) =>
      hasError ? theme.error.main : theme.primary.main};
  }

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow[0]};
    transform: scale(1.01);
  }

  &::-webkit-calendar-picker-indicator {
    filter: invert(1) brightness(40%) sepia(100%) saturate(100%)
      hue-rotate(180deg);
    cursor: pointer;
  }
`;

const EndIconWrapper = styled.div<{ clickable: boolean; hasError: boolean }>`
  position: absolute;
  right: 0.5rem;
  top: 55%;
  transform: translateY(-50%);
  pointer-events: ${({ clickable }) => (clickable ? 'auto' : 'none')};
  cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};

  svg {
    fill: ${({ theme, hasError }) =>
      hasError ? theme.error.main : theme.primary.main};
    width: 1rem;
    height: 1rem;
  }
`;

const HelperText = styled.span`
  margin-top: 1px;
  color: ${({ theme }) => theme.error.dark};
  font-size: 0.875rem;
`;

export const StyledInput: FC<Props> = ({
  type,
  name,
  onChange,
  value,
  error,
  label,
  endIcon,
  onIconClick,
  ...rest
}) => (
  <InputContainer hasError={!!error}>
    <Label htmlFor={name} hasError={!!error}>
      {label}
    </Label>
    <InputWrapper>
      <Input
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        id={name}
        hasError={!!error}
        {...rest}
      />
      {endIcon && (
        <EndIconWrapper
          clickable={!!onIconClick}
          onClick={onIconClick}
          hasError={!!error}>
          {endIcon}
        </EndIconWrapper>
      )}
    </InputWrapper>
    {error && <HelperText>{error}</HelperText>}
  </InputContainer>
);
