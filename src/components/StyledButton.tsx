import { FC } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Loading } from './Loading';

interface Props {
  label: string;
  onClick: () => void;
  loading: boolean;
  disabled?: boolean;
}

const ButtonContainer = styled.div`
  display: inline-block;
  width: 100%;
`;

const clickAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95); /* Diminui levemente */
  }
  100% {
    transform: scale(1); /* Volta ao tamanho original */
  }
`;

const Button = styled.button<{ loading: boolean; disabled?: boolean }>`
  transition: border-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease,
    transform 0.3s, background-color 0.3s ease;
  border: 1px solid ${({ theme }) => theme.primary.light};
  border-radius: ${({ theme }) => theme.borderRadius[0]};
  background-color: ${({ theme }) => theme.background.light};
  color: ${({ theme }) => theme.primary.main};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  position: relative;
  width: auto;
  min-width: 100px;
  width: 100%;
  cursor: ${({ disabled, loading }) =>
    disabled || loading ? 'not-allowed' : 'pointer'};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) =>
    disabled ? 'none' : 'auto'}; /* Bloqueia clique se desativado */

  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow[0]};
    color: ${({ theme }) => theme.primary.dark};
    border: 1px solid ${({ theme }) => theme.primary.main};
  }

  &:active {
    ${({ disabled, loading }) =>
      !disabled &&
      !loading &&
      css`
        animation: ${clickAnimation} 0.2s ease-out;
      `}
    border: 1px solid ${({ theme }) => theme.primary.dark};
  }

  svg {
    fill: ${({ theme }) => theme.primary.main};
    height: 1rem;
    width: 1rem;
  }
`;

const Label = styled.span<{ loading: boolean }>`
  visibility: ${({ loading }) => (loading ? 'hidden' : 'visible')};
`;

const LoadingWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton: FC<Props> = ({
  label,
  loading,
  onClick,
  disabled = false,
}) => {
  return (
    <ButtonContainer>
      <Button
        onClick={() => {
          if (disabled || loading) return;
          onClick();
        }}
        disabled={disabled}
        loading={loading}>
        <Label loading={loading}>{label}</Label>
        {loading && (
          <LoadingWrapper>
            <Loading />
          </LoadingWrapper>
        )}
      </Button>
    </ButtonContainer>
  );
};
