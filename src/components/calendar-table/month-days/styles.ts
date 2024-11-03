import styled from 'styled-components';

export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr); // Define 8 colunas no mínimo
  gap: 0.5rem;
  width: 100%;
  @media (max-width: 600px) {
    grid-template-columns: repeat(4, 1fr); // Adapta para telas menores
  }
  justify-items: center;
`;

export const DayContent = styled.div<{ selected?: string }>`
  border-radius: ${({ theme }) => theme.borderRadius[0]};
  padding: 3px;
  width: 2.5rem;
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
