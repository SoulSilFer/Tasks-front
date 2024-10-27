import { FC } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Value } from 'react-calendar/src/shared/types.js';
import * as S from './styles';

interface Props {
  showWeekNumbers?: boolean;
  showDoubleView?: boolean;
  selectRange?: boolean;
  disabledPast?: boolean;
  setDates: (values: Value) => void;
}

export const StyledCalendar: FC<Props> = ({
  selectRange = false,
  showDoubleView = false,
  showWeekNumbers = true,
  disabledPast = false,
  setDates,
}) => {
  return (
    <S.Container
      calendarType="gregory"
      showWeekNumbers={showDoubleView ? false : showWeekNumbers}
      showDoubleView={showDoubleView}
      selectRange={selectRange}
      minDate={disabledPast ? new Date() : undefined}
      onChange={(value) => setDates(value)}
    />
  );
};
