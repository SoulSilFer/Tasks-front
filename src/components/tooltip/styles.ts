import { Tooltip as ReactToolTip } from 'react-tooltip';
import styled from 'styled-components';

export const Tooltip = styled(ReactToolTip).attrs({
  className: 'custom-tooltip',
})`
  &.custom-tooltip {
    background-color: ${({ theme }) => theme.paper.main};

    span {
      font-size: 1rem;
      font-weight: bold;
      color: ${({ theme }) => theme.secondary.main};
    }
  }
`;
