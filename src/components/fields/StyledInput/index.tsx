import {
  CSSProperties,
  FC,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  useState,
} from 'react';
import * as S from './styles';

interface Props {
  type?: HTMLInputTypeAttribute;
  name: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
  placeholder: string;
  endIcon?: React.ReactNode;
  onIconClick?: () => void;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined;
  withLabel?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
}

export const StyledInput: FC<Props> = ({
  type = 'text',
  name,
  onChange,
  value,
  error,
  placeholder,
  endIcon,
  onIconClick,
  onKeyDown,
  withLabel = false,
  disabled,
  style,
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

  console.log({ type });

  return (
    <S.InputContainer hasError={!!error}>
      <S.InputWrapper hasError={!!error}>
        <S.Input
          type={type === 'date' && showPlaceholder ? 'text' : type}
          onChange={onChange}
          name={name}
          value={value}
          placeholder={!withLabel ? placeholder : ''}
          onFocus={handleFocus}
          onBlur={handleBlur}
          hasError={!!error}
          onKeyDown={onKeyDown}
          disabled={disabled}
          style={style}
          {...rest}
        />

        {withLabel && <S.Label hasError={!!error}>{placeholder}</S.Label>}

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
