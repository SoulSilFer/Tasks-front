import { FC, useState } from 'react';
import { Value } from 'react-calendar/src/shared/types.js';
import {
  AddCalendarIcon,
  AddTaskModalContent,
  CalendarRangeIcon,
  PixelArrowIcon,
  SplitColumnsIcon,
  StyledCalendar,
  StyledModal,
  StyledToolTip,
} from 'src/components';
import * as S from './styles';

interface Props {
  setDates: (values: Value) => void;
}

export const CalendarHomePage: FC<Props> = ({ setDates }) => {
  const [selectRange, setSelectRange] = useState<boolean>(false);
  const [showDoubleView, setShowDoubleView] = useState<boolean>(false);
  const [addModal, setAddModal] = useState<boolean>(false);
  const [addSubTask, setAddSubTask] = useState<boolean>(false);
  const [innerDate, setInnerDate] = useState<Value>(new Date());

  return (
    <S.Container
      height={showDoubleView ? '21rem' : '19rem'}
      width={showDoubleView ? '752px' : '376px'}
      showDoubleView={showDoubleView}>
      <StyledCalendar
        setDates={(e) => {
          setDates(e);
          setInnerDate(e);
        }}
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
          color="primary"
          cursor="pointer"
          rotate="no">
          <StyledToolTip
            children={<AddCalendarIcon />}
            content="Adicionar tarefa"
            id="addTask"
            itemClick={() => setAddModal(true)}
          />
        </S.SideMenuIcon>
        <S.SideMenuIcon
          fitSize="no"
          color="secondary"
          cursor="default"
          rotate="yes">
          <div style={{ transform: 'rotate(180deg)' }}>
            <PixelArrowIcon />
          </div>
        </S.SideMenuIcon>
      </S.SideMenuContainer>
      <StyledModal
        open={addModal}
        children={
          <AddTaskModalContent
            closeModal={() => setAddModal(false)}
            addSubTask={setAddSubTask}
            date={innerDate}
          />
        }
        handleClose={() => setAddModal(false)}
      />
      {/* <StyledModal
        open={addSubTask}
        children={
          <AddTaskModalContent closeModal={() => setAddSubTask(false)} />
        }
        sub
        handleClose={() => setAddSubTask(false)}
      /> */}
    </S.Container>
  );
};
