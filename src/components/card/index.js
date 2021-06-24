import * as React from 'react';

import * as S from './Card.style';

/**
 * Card Component
 *
 * @prop {React.Node}     children      react child that will be rendered inside the card wrapper
 */
const Card = ({
  children,
  withPadding = true,
  fullWidth = false,
  ...rest
}) => {
  return (
    <S.Card 
      aria-label="card-component"
      withPadding={withPadding}
      {...rest}
    >
        {children}
    </S.Card>
  );
}

export default Card;