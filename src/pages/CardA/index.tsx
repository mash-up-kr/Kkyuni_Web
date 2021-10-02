import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import WrapCanvasA from '@src/components/WrapCanvasA';

interface CardAProps {
  //
}

const Wrapper = styled.div`
  //
`;

const CardA = (): ReactElement => (
  <Wrapper>
    <WrapCanvasA />
  </Wrapper>
);

export default CardA;
