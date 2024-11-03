import { FC, ReactNode, useEffect, useRef } from 'react';
import * as S from './styles';

interface Props {
  open: boolean;
  children: ReactNode;
  handleClose: () => void;
  sub?: boolean;
}

export const StyledModal: FC<Props> = ({
  open,
  children,
  handleClose,
  sub,
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

  return (
    <S.Container
      isOpen={open ? 'yes' : undefined}
      sub={sub ? 'yes' : undefined}>
      <S.Content ref={containerRef} sub={sub ? 'yes' : undefined}>
        {children}
      </S.Content>
    </S.Container>
  );
};
