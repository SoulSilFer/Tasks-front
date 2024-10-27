import { FC, Fragment, ReactNode } from 'react';
import { PlacesType } from 'react-tooltip';

import * as S from './styles';

interface Props {
  children: ReactNode;
  id: string;
  content: string;
  place?: PlacesType;
  itemClick?: () => void;
}

export const StyledToolTip: FC<Props> = ({
  children,
  id,
  content,
  place = 'bottom',
  itemClick,
}) => {
  return (
    <Fragment>
      <div id={id} onClick={itemClick}>
        {children}
      </div>

      <S.Tooltip anchorSelect={`#${id}`} place={place}>
        <span>{content}</span>
      </S.Tooltip>
    </Fragment>
  );
};
