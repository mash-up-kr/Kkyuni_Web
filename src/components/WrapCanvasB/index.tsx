import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import CardB from '@src/assets/CardB.svg';

const Wrapper = styled.div`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const WrapCanvasB = (): ReactElement => (
  <Wrapper>
    <CardB />
  </Wrapper>
);

export default WrapCanvasB;
