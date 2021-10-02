import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { useAppDispatch, useUiState, setIsDark } from '@src/store';

const Wrapper = styled.div`
  ${({ theme }) => theme.flexCol()}
  background-color: ${({ theme }) => theme.background};
  .text {
    color: ${({ theme }) => theme.text};
  }
`;

const App = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { isDark } = useUiState();

  return (
    <Wrapper>
      <button type="button" onClick={() => dispatch(setIsDark({ isDark: !isDark }))}>{isDark ? 'dark' : 'light'}</button>
      <div className="text">result</div>
    </Wrapper>
  );
};

export default App;
