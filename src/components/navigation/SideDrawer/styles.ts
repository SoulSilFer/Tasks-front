/// src/components/navigation/SideDrawer/styles.ts

import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  background-color: ${({ theme }) => theme.background.primary};
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.boxShadow[1]};
`;
