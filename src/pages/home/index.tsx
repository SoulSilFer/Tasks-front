/// src\pages\home\index.tsx

import { FC, useState } from 'react';
import { Value } from 'react-calendar/src/shared/types.js';

import { CalendarHomePage } from 'src/components';
import { useAppTranslation } from 'src/hooks';
import * as S from './styles';

export const HomePage: FC = () => {
  const { t } = useAppTranslation();

  const [dates, setDates] = useState<Value>(new Date());

  return (
    <S.PageContainer>
      <CalendarHomePage setDates={setDates} />

      <S.SelectedDateText>
        <h2>
          {Array.isArray(dates) ? t('selectedRangeDates') : t('selectedDate')}
        </h2>

        <h3>
          {Array.isArray(dates)
            ? dates
                .map((item) => item?.toLocaleDateString())
                .join(` ${t('to')} `)
            : dates?.toLocaleDateString()}
        </h3>
      </S.SelectedDateText>
    </S.PageContainer>
  );
};
