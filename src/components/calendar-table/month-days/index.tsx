import { FC, useState } from 'react';
import * as S from './styles';

interface Props {
  selectValues: (value: number[]) => void;
  max?: number;
}

export const MonthDaysTable: FC<Props> = ({ selectValues, max = 31 }) => {
  const days = Array.from({ length: max }, (_, i) => i + 1); // Gera uma array com os dias de 1 a 31
  const [selectedDays, setSelectedDays] = useState<number[]>([]);

  const handleDayClick = (day: number) => {
    setSelectedDays((prevSelected) => {
      const updatedSelected = prevSelected.includes(day)
        ? prevSelected.filter((d) => d !== day)
        : [...prevSelected, day];

      selectValues(updatedSelected); // Envia o array atualizado
      return updatedSelected;
    });
  };

  return (
    <S.TableContainer>
      {days.map((day) => (
        <S.DayContent
          key={day}
          selected={selectedDays.includes(day) ? 'true' : undefined}
          onClick={() => handleDayClick(day)}>
          <span>{day}</span>
        </S.DayContent>
      ))}
    </S.TableContainer>
  );
};
