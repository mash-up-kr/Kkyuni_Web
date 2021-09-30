import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  ${({ theme }) => theme.flexCol()}
  .text {
    color: ${({ theme }) => theme.colors.red};
  }
`;

const App = () => (
  <Wrapper>
    <div className="text">test</div>
  </Wrapper>
);

export default App;
