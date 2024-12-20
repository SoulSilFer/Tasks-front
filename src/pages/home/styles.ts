import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const CalendarContainer = styled.div`
  position: relative;
`;

export const BlockScreen = styled.div<{ show?: string }>`
  height: 100%;
  width: 100%;
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: ${({ show }) => (show ? 2 : -99)};
  opacity: ${({ show }) => (show ? 1 : 0)};
  border-radius: ${({ theme }) => theme.borderRadius[0]};
  transition: opacity 0.2s ease-in-out;
  flex-direction: column;

  svg {
    fill: ${({ theme }) => theme.primary.main};
    width: 30%;
    z-index: ${({ show }) => (show ? 3 : -99)};
  }
`;

export const SelectedDateText = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TaskContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  max-width: 600px;
`;

export const TaskItem = styled.div`
  background-color: white;
  padding: 1rem;
  width: 90%;
  border: ${({ theme }) => theme.border[0]};
  border-radius: ${({ theme }) => theme.borderRadius[0]};
  box-shadow: ${({ theme }) => theme.boxShadow[0]};

  h3 {
    color: ${({ theme }) => theme.secondary.dark};
  }
`;
