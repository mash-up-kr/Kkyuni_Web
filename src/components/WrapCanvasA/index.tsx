import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import CardA from '@src/assets/CardA.svg';

const Wrapper = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const WrapCanvasA = (): ReactElement => (
  <Wrapper>
    <CardA />
  </Wrapper>
);

export default WrapCanvasA;
