import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; // Alterado para flex-start para alinhar os itens no topo
  align-items: center;
  height: 100%;
  overflow: auto; // Certifique-se de permitir overflow
  padding: 2rem;

  & > * {
    margin-bottom: 0.75rem;
  }

  & .buttons {
    display: flex;
    flex-direction: row;
    width: 80%;
    gap: 1rem;
  }
`;

export const DaysContainer = styled.div<{ disabled?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    gap: 2px;

    ${({ theme, disabled }) => disabled && { color: theme.disabled.main }};

    :first-child {
      color: ${({ theme, disabled }) =>
        !disabled ? theme.primary.main : theme.disabled.main};
    }
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const RadioInputContent = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  width: 100%;
`;

export const RadioInputInfo = styled.div<{ selected?: string }>`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;

  transition: all 0.3s;

  &:hover {
    transform: translateX(10%) scale(1.2);
    width: 80%;
  }

  span {
    color: ${({ theme, selected }) =>
      !selected ? theme.paper.contrastText : theme.primary.main};
  }
`;

export const RadioInputSub = styled.div<{ show?: string }>`
  margin-top: 0.5rem;
  display: ${({ show }) => (!show ? 'none' : 'flex')};
  border: ${({ theme }) => theme.border[1]};
  border-radius: ${({ theme }) => theme.borderRadius[0]};
  padding: 0.5rem;
  margin-left: 1rem;
  width: 96%;
`;
