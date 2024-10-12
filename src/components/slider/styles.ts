import styled from 'styled-components';

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: auto;
  height: 20px;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  box-sizing: border-box;
  border-radius: 5px;
  border: ${({ theme }) => theme.border[0]};
  box-shadow: ${({ theme }) => theme.boxShadow[0]};
  position: relative;
  cursor: pointer;
  width: 50px;
  height: 20px;
  background-color: #fff;
  transition: 0.3s;
  display: flex;

  &:before {
    box-sizing: border-box;
    position: absolute;
    display: flex;
    content: '';
    height: 20px;
    width: 20px;
    border: ${({ theme }) => theme.border[0]};
    border-radius: 5px;
    left: -2px;
    bottom: 2px;
    background-color: #fff;
    box-shadow: 0 3px 0 ${({ theme }) => theme.secondary.main};
    transition: 0.3s;
  }

  ${ToggleInput}:checked + & {
    background-color: ${({ theme }) => theme.primary.main};
  }

  ${ToggleInput}:checked + &::before {
    transform: translateX(30px);
  }
`;

export const Label = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.secondary.main};
`;
