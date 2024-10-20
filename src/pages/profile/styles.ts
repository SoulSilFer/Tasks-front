/// src\pages\profile\styles.ts

import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.paper.main};
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  border: ${({ theme }) => theme.border[0]};
  box-shadow: ${({ theme }) => theme.boxShadow[0]};
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`;
