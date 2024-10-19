// src/components/slider/index.tsx

import { FC } from 'react';

import * as S from './styles';

interface Props {
  firstName: string;
  secondName: string;
  setValue: (value: 0 | 1) => void;
  checked: boolean; // Novo prop para controlar o estado do slider
}

export const StyledSlider: FC<Props> = ({
  firstName,
  secondName,
  setValue,
  checked,
}) => (
  <S.SliderContainer>
    <S.Label onClick={() => setValue(0)}>{firstName}</S.Label>

    <label className="switch" style={{ display: 'flex' }}>
      <S.ToggleInput
        type="checkbox"
        className="toggle"
        onChange={(e) => setValue(e.target.checked ? 1 : 0)}
        checked={checked} // Controle do estado do checkbox
      />

      <S.Slider className="slider" />
    </label>

    <S.Label onClick={() => setValue(1)}>{secondName}</S.Label>
  </S.SliderContainer>
);

export default StyledSlider;
