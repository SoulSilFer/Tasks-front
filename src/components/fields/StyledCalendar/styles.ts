import { Calendar } from 'react-calendar';

import styled from 'styled-components';

export const Container = styled(Calendar)`
  border: 0;
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: ${({ theme }) => theme.primary.main};
    transform: scale(1.2);
  }

  .react-calendar__tile--active {
    background-color: ${({ theme }) => theme.primary.dark};
  }
`;
