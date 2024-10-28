/// src/components/tab/styles.ts

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  nav {
    display: flex;
    justify-content: flex-start;
    height: 3rem;
    gap: 3px;
  }

  button {
    background-color: ${({ theme }) => theme.primary.dark};
    padding: 1rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    width: 11rem;

    border: none;
    border-radius: ${({ theme }) => theme.borderRadius[0]};
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;

    transition: transform 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.primary.light};
      transform: scale(1.1);
    }
  }

  button.active {
    background-color: ${({ theme }) => theme.primary.main};
  }
`;

export const Content = styled.main`
  border: ${({ theme }) => theme.border[0]};
  border-radius: ${({ theme }) => theme.borderRadius[0]};
  border-color: ${({ theme }) => theme.primary.main};
  border-top-left-radius: 0;
  padding: 1rem;
  overflow: hidden;

  div {
    & > * {
      margin-bottom: 0.2rem;
    }
  }
`;
