import { FC } from 'react';

import * as S from './styles';

interface Props {
  firstName: string;
  secondName: string;
  setValue: (value: 0 | 1) => void;
}

export const StyledSlider: FC<Props> = ({
  firstName,
  secondName,
  setValue,
}) => (
  <S.SliderContainer>
    <S.Label>{firstName}</S.Label>

    <label className="switch" style={{ display: 'flex' }}>
      <S.ToggleInput
        type="checkbox"
        className="toggle"
        onChange={(e) => setValue(e.target.checked ? 1 : 0)}
      />

      <S.Slider className="slider" />
    </label>

    <S.Label>{secondName}</S.Label>
  </S.SliderContainer>
);

export default StyledSlider;
