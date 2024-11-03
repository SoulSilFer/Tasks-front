import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

export const DayContent = styled.div<{ selected?: string }>`
  border-radius: ${({ theme }) => theme.borderRadius[0]};
  padding: 3px;
  width: 3.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  color: ${({ theme, selected }) =>
    selected ? theme.paper.contrastText : theme.primary.main};
  background-color: ${({ theme, selected }) =>
    selected ? theme.primary.main : theme.paper.contrastText};
  &:hover {
    transform: scale(1.2);
    color: ${({ theme, selected }) =>
      selected ? theme.primary.main : theme.paper.contrastText};
    background-color: ${({ theme, selected }) =>
      selected ? theme.paper.contrastText : theme.primary.main};
  }
`;
