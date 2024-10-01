import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  margin-bottom: 0.5rem;
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.paper.main};

  height: 60%;
  max-height: 250px;
  width: 80%;
  max-width: 300px;
  row-gap: 0.5rem;
  border: ${({ theme }) => theme.border[0]};
  box-shadow: ${({ theme }) => theme.boxShadow[0]};
  border-radius: ${({ theme }) => theme.borderRadius[1]};
`;

export const Link = styled.a`
  display: flex;
  font-size: 0.75rem;
  place-self: start;
  margin-bottom: 0.75rem;
`;
