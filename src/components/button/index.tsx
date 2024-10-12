import { FC } from 'react';

import { Loading } from '../Loading';
import * as S from './styles';

interface Props {
  label: string;
  onClick: () => void;
  loading: boolean;
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset' | undefined;
}

export const StyledButton: FC<Props> = ({
  label,
  loading,
  onClick,
  disabled = false,
  type,
}) => {
  return (
    <S.ButtonContainer>
      <S.Button
        onClick={() => {
          if (disabled || loading) return;
          onClick();
        }}
        disabled={disabled}
        loading={loading}
        type={type}>
        {loading ? (
          <S.LoadingWrapper>
            <Loading />
          </S.LoadingWrapper>
        ) : (
          <span>{label}</span>
        )}
      </S.Button>
    </S.ButtonContainer>
  );
};
