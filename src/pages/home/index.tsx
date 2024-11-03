/// src\pages\home\index.tsx

import { FC, useCallback, useEffect, useState } from 'react';
import { Value } from 'react-calendar/src/shared/types.js';
import { useDispatch } from 'react-redux';

import { SHOW_TASK, STORAGE_KEYS } from 'src/common';
import { CalendarHomePage, Loading } from 'src/components';
import { getTaskByDateRequest, LocalStorage } from 'src/core';
import { useAppSelector, useAppTranslation } from 'src/hooks';
import * as S from './styles';

export const HomePage: FC = () => {
  const dispatch = useDispatch();
  const { t } = useAppTranslation();

  const localStorage = new LocalStorage();
  const selectedOrg = localStorage.get(STORAGE_KEYS.SELECT_ORG) as
    | SHOW_TASK
    | string;
  const [dates, setDates] = useState<Value>(new Date());

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatSelectedOrg = (value: SHOW_TASK | string) => {
    if (value === SHOW_TASK.ALL || value == SHOW_TASK.USER) {
      return {
        show: value,
        organizationId: undefined,
      };
    } else {
      return {
        show: SHOW_TASK.ORGANIZATION,
        organizationId: value,
      };
    }
  };

  const callApi = useCallback(() => {
    if (Array.isArray(dates)) {
      // Handle range dates if needed
    } else {
      const formattedDate = formatDate(dates as Date);
      dispatch(
        getTaskByDateRequest({
          selectedDate: formattedDate,
          ...formatSelectedOrg(selectedOrg),
        })
      );
    }
  }, [dates, dispatch]);

  useEffect(() => {
    if (!Array.isArray(dates)) {
      callApi();
    }
  }, [dates, callApi]);

  const { load, request } = useAppSelector((state) => state.getTaskByDate);

  return (
    <S.PageContainer>
      <S.CalendarContainer>
        <S.BlockScreen show={load ? 'show' : ''}>
          <Loading />
          <h3>Buscando tarefas...</h3>
        </S.BlockScreen>

        <CalendarHomePage setDates={setDates} />
      </S.CalendarContainer>

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

      {request && (
        <S.TaskContainer>
          {request.map((item, index) => (
            <S.TaskItem key={index}>
              <h3>{item.name}</h3>
            </S.TaskItem>
          ))}
        </S.TaskContainer>
      )}
    </S.PageContainer>
  );
};
