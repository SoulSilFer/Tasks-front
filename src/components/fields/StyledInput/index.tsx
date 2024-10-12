import { FC, HTMLInputTypeAttribute, useState } from 'react';
import * as S from './styles';

interface Props {
  type: HTMLInputTypeAttribute;
  name: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
  placeholder: string;
  endIcon?: React.ReactNode;
  onIconClick?: () => void;
}

export const StyledInput: FC<Props> = ({
  type,
  name,
  onChange,
  value,
  error,
  placeholder,
  endIcon,
  onIconClick,
  ...rest
}) => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const handleBlur = () => {
    if (!value || value === '') {
      setShowPlaceholder(true);
    }
  };

  const handleFocus = () => {
    setShowPlaceholder(false);
  };

  return (
    <S.InputContainer hasError={!!error}>
      <S.InputWrapper hasError={!!error}>
        <S.Input
          type={showPlaceholder ? 'text' : type}
          onChange={onChange}
          name={name}
          value={value}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          hasError={!!error}
          {...rest}
        />

        {endIcon && (
          <S.EndIconWrapper
            clickable={!!onIconClick}
            onClick={onIconClick}
            hasError={!!error}
            className="endIconWrapper">
            {endIcon}
          </S.EndIconWrapper>
        )}
      </S.InputWrapper>

      {error && <S.HelperText>{error}</S.HelperText>}
    </S.InputContainer>
  );
};
