import styled, { css } from 'styled-components';

export const Container = styled.div<{
  height: string;
  width: string;
  showDoubleView: boolean;
}>`
  display: flex;
  flex-direction: row;
  border: ${({ theme }) => theme.border[0]};
  border-color: ${({ theme }) => theme.secondary.main};
  box-shadow: ${({ theme }) => theme.boxShadow[0]};
  border-radius: ${({ theme }) => theme.borderRadius[1]};
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  ${({ showDoubleView }) =>
    showDoubleView
      ? css`
          transition: width 0.2s ease, height 0.2s ease;
        `
      : css`
          transition: width 0.1s ease, height 0.2s ease;
        `}
`;

export const SideMenuContainer = styled.div`
  background-color: #fff;
  padding: 1rem;
  width: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const SideMenuIcon = styled.div<{
  color: 'primary' | 'secondary';
  cursor: 'pointer' | 'default';
  rotate: 'yes' | 'no';
  fitSize: 'yes' | 'no';
}>`
  svg {
    height: ${({ fitSize }) => (fitSize === 'yes' ? '1.5rem' : '2rem')};
    width: ${({ fitSize }) => (fitSize === 'yes' ? '1.5rem' : '2rem')};
    transition: transform 0.2s ease;
    fill: ${({ theme, color }) =>
      color === 'primary' ? theme.primary.main : theme.secondary.main};
    cursor: ${({ cursor }) => cursor};

    &:hover {
      transform: ${({ rotate }) =>
        rotate === 'yes' ? 'rotate(180deg)' : 'scale(1.1)'};
    }

    ${({ rotate }) => rotate === 'yes' && 'transform: rotate(180deg);'}

    line {
      stroke: ${({ theme, color }) =>
        color === 'primary' ? theme.primary.main : theme.secondary.main};
    }
  }
`;
