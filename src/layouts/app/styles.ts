/// src/layouts/app/styles.ts

import styled from 'styled-components';

export const FullPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 0.4rem;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 1rem;
  background-color: ${({ theme }) => theme.background.secondary};
`;
