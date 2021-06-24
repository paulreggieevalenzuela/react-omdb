import * as React from 'react';

import * as S from './Wrapper.style';

/**
 * Wrapper Component
 *
 * @prop {React.Node}     children      react child that will be rendered inside the wrapper
 * @prop {boolean}     withPadding      render with padding inside the wrapper
 */
const Wrapper = ({
  children,
  withPadding = true,
  ...rest
}) => {
  return (
    <S.Wrapper 
        aria-label="wrapper-component"
        withPadding={withPadding}
        {...rest}
    >
        {children}
    </S.Wrapper>
  );
}

export default Wrapper;