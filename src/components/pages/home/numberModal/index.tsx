import { FC, useEffect, useRef, useState } from 'react';
import { StyledInput } from 'src/components/fields';
import * as S from './styles';

interface Props {
  open: boolean;
  handleClose: () => void;
  setDaysValue: (value: number) => void;
}

export const AddNumberModal: FC<Props> = ({
  open,
  handleClose,
  setDaysValue,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      handleClose();
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const [value, setValue] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Remove caracteres não numéricos e garante que o valor mínimo seja 0
    const numericValue = value.replace(/[^0-9]/g, '');
    const validValue =
      numericValue === '' ? 0 : Math.max(0, parseInt(numericValue));

    setValue(validValue);
    setDaysValue(validValue); // Atualiza o valor no componente pai
  };

  const handleDecrement = () => {
    if (value === 0) return;
    const newValue = value - 1;
    setValue(newValue);
    setDaysValue(newValue); // Atualiza o valor no componente pai
  };

  const handleIncrement = () => {
    const newValue = value + 1;
    setValue(newValue);
    setDaysValue(newValue); // Atualiza o valor no componente pai
  };

  return (
    <S.Container isOpen={open}>
      <S.Content ref={containerRef}>
        <span onClick={handleDecrement}>-</span>

        <StyledInput
          name={'days'}
          placeholder={''}
          type="number"
          containerWidth="50%"
          value={value}
          onChange={handleInputChange}
        />

        <span onClick={handleIncrement}>+</span>
      </S.Content>
    </S.Container>
  );
};
