import { CSSProperties, FC } from 'react';
import * as S from './styles';

interface Props {
  name: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  error?: string;
  placeholder: string;
  endIcon?: React.ReactNode;
  onIconClick?: () => void;
  data: string[][];
  withLabel?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
}

export const StyledSelect: FC<Props> = ({
  name,
  onChange,
  value,
  error,
  placeholder,
  endIcon,
  onIconClick,
  data,
  withLabel = false,
  disabled = false,
  style,
  ...rest
}) => {
  return (
    <S.SelectContainer hasError={!!error}>
      <S.SelectWrapper hasError={!!error}>
        <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
          <S.Select
            onChange={onChange}
            name={name}
            value={value}
            id={name}
            hasError={!!error}
            noValue={value === ''}
            disabled={disabled}
            style={style}
            {...rest}>
            <option value="" disabled className="placeholder">
              {placeholder}
            </option>

            {data.map(([key, display]) => (
              <option key={key} value={key}>
                {display}
              </option>
            ))}
          </S.Select>

          {withLabel && <S.Label hasError={!!error}>{placeholder}</S.Label>}
        </div>

        {endIcon && (
          <S.EndIconWrapper
            clickable={!!onIconClick}
            onClick={onIconClick}
            hasError={!!error}
            className="endIconWrapper">
            {endIcon}
          </S.EndIconWrapper>
        )}
      </S.SelectWrapper>

      {error && <S.HelperText>{error}</S.HelperText>}
    </S.SelectContainer>
  );
};
