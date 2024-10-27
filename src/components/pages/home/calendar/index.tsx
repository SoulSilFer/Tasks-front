import { FC, useState } from 'react';
import { Value } from 'react-calendar/src/shared/types.js';

import {
  CalendarRangeIcon,
  PixelArrowIcon,
  SplitColumnsIcon,
  StyledCalendar,
  StyledToolTip,
} from 'src/components';
import * as S from './styles';

interface Props {
  setDates: (values: Value) => void;
}

export const CalendarHomePage: FC<Props> = ({ setDates }) => {
  const [selectRange, setSelectRange] = useState<boolean>(false);
  const [showDoubleView, setShowDoubleView] = useState<boolean>(false);

  return (
    <S.Container
      height={showDoubleView ? '21rem' : '19rem'}
      width={showDoubleView ? '752px' : '376px'}
      showDoubleView={showDoubleView}>
      <StyledCalendar
        setDates={setDates}
        showWeekNumbers
        selectRange={selectRange}
        showDoubleView={showDoubleView}
      />
      <S.SideMenuContainer>
        <S.SideMenuIcon
          fitSize="no"
          color="secondary"
          cursor="default"
          rotate="yes">
          <PixelArrowIcon />
        </S.SideMenuIcon>
        <S.SideMenuIcon
          fitSize="no"
          color="primary"
          cursor="pointer"
          rotate="no">
          <StyledToolTip
            children={<SplitColumnsIcon />}
            content="Ver mês seguinte"
            id="splitColumns"
            itemClick={() => setShowDoubleView(!showDoubleView)}
          />
        </S.SideMenuIcon>
        <S.SideMenuIcon
          fitSize="yes"
          color="primary"
          cursor="pointer"
          rotate="no">
          <StyledToolTip
            children={<CalendarRangeIcon />}
            content="Selecionar por periodo"
            id="rangeSelect"
            itemClick={() => setSelectRange(!selectRange)}
          />
        </S.SideMenuIcon>
        <S.SideMenuIcon
          fitSize="no"
          color="secondary"
          cursor="default"
          rotate="no">
          <PixelArrowIcon />
        </S.SideMenuIcon>
      </S.SideMenuContainer>
    </S.Container>
  );
};
