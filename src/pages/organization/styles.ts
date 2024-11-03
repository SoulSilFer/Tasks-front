import styled from 'styled-components';

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RadioContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
`;

export const Divider = styled.hr`
  width: 100%;
  border: '1px solid';
  border-color: ${({ theme }) => theme.secondary.main};
  margin-bottom: 1rem;
  margin-top: 1rem;
`;
