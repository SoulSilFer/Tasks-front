import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: inline-block;
  width: 100%;
`;

export const Button = styled.button<{ loading: boolean; disabled?: boolean }>`
  width: 100%;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  border: ${({ theme }) => theme.border[0]};
  background-color: #fff;
  box-shadow: ${({ theme, loading }) =>
    loading ? 'none' : theme.boxShadow[0]};
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme, disabled }) =>
    disabled ? theme.disabled.main : theme.secondary.main};
  cursor: ${({ disabled, loading }) =>
    disabled || loading ? 'default' : 'pointer'};

  transition: border-color 0.3s ease, transform 0.1s, box-shadow 0.3s;

  border-color: ${({ theme, disabled }) =>
    disabled ? theme.disabled.main : theme.secondary.main};

  &:hover {
    border-color: ${({ theme, disabled }) => !disabled && theme.primary.main};
  }

  &:active {
    box-shadow: ${({ disabled }) => !disabled && 'none'};
    transform: ${({ disabled, loading }) =>
      !disabled && !loading && 'translate(3px, 3px)'};
  }
`;

export const Label = styled.span<{ loading: boolean }>`
  visibility: visible;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${({ theme }) => theme.primary.main};
    width: 2.3rem;
    height: 2.3rem;
  }
`;
