import {
  CSSProperties,
  FC,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
} from 'react';
import * as S from './styles';

interface Props {
  type?: HTMLInputTypeAttribute;
  name: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  error?: string;
  placeholder: string;
  endIcon?: React.ReactNode;
  onIconClick?: () => void;
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement> | undefined;
  withLabel?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
  rows?: number;
}

export const StyledTextField: FC<Props> = ({
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
  rows,
  ...rest
}) => {
  return (
    <S.InputContainer hasError={!!error}>
      <S.InputWrapper hasError={!!error}>
        <S.Input
          onChange={onChange}
          name={name}
          value={value}
          placeholder={!withLabel ? placeholder : ''}
          hasError={!!error}
          onKeyDown={onKeyDown}
          disabled={disabled}
          style={style}
          rows={rows}
          title={placeholder}
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
