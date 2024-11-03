import { FC, useState } from 'react';
import { useAppTranslation } from 'src/hooks';
import * as S from './styles';

interface Props {
  setWeekDays: (days: string[]) => void;
}

export const WeekDaysTable: FC<Props> = ({ setWeekDays }) => {
  const { t } = useAppTranslation();

  const days = [
    t('Sunday').substring(0, 3),
    t('Monday').substring(0, 3),
    t('Tuesday').substring(0, 3),
    t('Wednesday').substring(0, 3),
    t('Thursday').substring(0, 3),
    t('Friday').substring(0, 3),
    t('Saturday').substring(0, 3),
  ];

  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const handleDayClick = (day: string) => {
    setSelectedDays((prevSelected) => {
      const updatedSelected = prevSelected.includes(day)
        ? prevSelected.filter((d) => d !== day)
        : [...prevSelected, day];

      setWeekDays(updatedSelected); // Envia o array atualizado
      return updatedSelected;
    });
  };

  return (
    <S.TableContainer>
      {days.map((day, index) => (
        <S.DayContent
          key={index}
          selected={selectedDays.includes(day) ? 'true' : undefined}
          onClick={() => handleDayClick(day)}>
          <span>{day}</span>
        </S.DayContent>
      ))}
    </S.TableContainer>
  );
};
