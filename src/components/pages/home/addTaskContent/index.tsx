import React, { FC, ReactNode, useState } from 'react';
import { Value } from 'react-calendar/src/shared/types.js';

import {
  MonthDaysTable,
  StyledButton,
  StyledInput,
  StyledTextField,
  WeekDaysTable,
} from 'src/components';
import { useAppTranslation } from 'src/hooks';
import { Translations } from 'src/i18n/locales';
import { weekDayBuilder } from 'src/utils';
import { AddNumberModal } from '../numberModal';
import * as S from './styles';

interface RadioInputProps {
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  children?: ReactNode;
}

interface RadioValuesType {
  endDate: boolean;
  repeatWeekly: boolean;
  repeatMonthly: boolean;
  repeatNextDays: boolean;
  repeatBusinessDays: boolean;
}

const radioValuesInitialState: RadioValuesType = {
  endDate: false,
  repeatWeekly: false,
  repeatMonthly: false,
  repeatNextDays: false,
  repeatBusinessDays: false,
};

interface Props {
  closeModal: () => void;
  date: Value;
}

export const AddTaskModalContent: FC<Props> = ({ closeModal, date }) => {
  const { t } = useAppTranslation();
  const selectedDate = weekDayBuilder(date);

  const [radioValues, setRadioValues] = useState<RadioValuesType>(
    radioValuesInitialState
  );
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [monthDays, setMonthDays] = useState<number[]>([]);
  const [businessDays, setBusinessDays] = useState<number[]>([]);
  const [nextDays, setNextDays] = useState<number>(0);
  const [numberModal, setNumberModal] = useState<boolean>(false);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setRadioValues({
      endDate: value === 'endDate',
      repeatWeekly: value === 'repeatWeekly',
      repeatMonthly: value === 'repeatMonthly',
      repeatNextDays: value === 'repeatNextDays',
      repeatBusinessDays: value === 'repeatBusinessDays',
    });
  };

  const radioInputBuilder = (inputs: RadioInputProps[]) => {
    return inputs.map((input, index) => (
      <S.RadioInputContent key={index}>
        <S.RadioInputInfo
          selected={input.checked ? 'true' : undefined}
          onClick={() => {
            const event = new MouseEvent('click', {
              view: window,
              bubbles: true,
              cancelable: true,
            });
            const radioElement = document.querySelector(
              `input[value="${input.value}"]`
            );
            if (radioElement) radioElement.dispatchEvent(event);
            if (index === 3) setNumberModal(true);
          }}>
          <input
            type="radio"
            value={input.value}
            checked={input.checked}
            onChange={input.onChange}
          />
          <span>{input.title}</span>
        </S.RadioInputInfo>

        {input.children && (
          <S.RadioInputSub show={input.checked ? 'true' : undefined}>
            {input.children}
          </S.RadioInputSub>
        )}
      </S.RadioInputContent>
    ));
  };

  const radioInputs: RadioInputProps[] = [
    {
      value: 'endDate',
      checked: radioValues.endDate,
      onChange: handleRadioChange,
      title: 'Somente para a data selecionada',
    },
    {
      value: 'repeatWeekly',
      checked: radioValues.repeatWeekly,
      onChange: handleRadioChange,
      title: 'Todos os dias {n} da semana'.replace('{n}', weekDays.join(', ')),
      children: <WeekDaysTable setWeekDays={setWeekDays} />,
    },
    {
      value: 'repeatMonthly',
      checked: radioValues.repeatMonthly,
      onChange: handleRadioChange,
      title: 'Todos os dias {n} do mês'.replace('{n}', monthDays.join(', ')),
      children: <MonthDaysTable selectValues={setMonthDays} />,
    },
    {
      value: 'repeatNextDays',
      checked: radioValues.repeatNextDays,
      onChange: handleRadioChange,
      title: 'Para os próximos {n} dias'.replace('{n}', nextDays.toString()),
    },
    {
      value: 'repeatBusinessDays',
      checked: radioValues.repeatBusinessDays,
      onChange: handleRadioChange,
      title: 'Todos os dias {n} útil'.replace('{n}', businessDays.join(', ')),
      children: <MonthDaysTable max={21} selectValues={setBusinessDays} />,
    },
  ];

  return (
    <S.Container>
      <h3>Criar Tarefa</h3>

      <S.DaysContainer disabled={radioValues.endDate ? undefined : 'true'}>
        {selectedDate.map((dayInfo, index) => (
          <div key={index}>
            <h4>{t(dayInfo[0] as keyof Translations['translations'])}</h4>
            <h4> - </h4>
            <h4>{dayInfo[1]}</h4>
          </div>
        ))}
      </S.DaysContainer>

      <StyledInput name={'name'} placeholder={'Nome'} />

      <StyledTextField
        name={'description'}
        placeholder={'Descrição'}
        rows={3}
      />

      <S.RadioContainer>
        <h3>Repetir:</h3>
        {radioInputBuilder(radioInputs)}
      </S.RadioContainer>

      <div className="buttons">
        <StyledButton
          label={'Cancelar'}
          onClick={closeModal}
          loading={false}
          type={'button'}
        />

        <StyledButton
          label={'Criar!!!'}
          onClick={() => window.alert('hihi')}
          loading={false}
          type={'button'}
        />
      </div>

      <AddNumberModal
        handleClose={() => setNumberModal(false)}
        open={numberModal}
        setDaysValue={setNextDays}
      />
    </S.Container>
  );
};
