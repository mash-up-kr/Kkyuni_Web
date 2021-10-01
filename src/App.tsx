import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { customTypes } from 'custom-types';

interface AppProps {
  isDark: boolean;
  setIsDark: customTypes.State<boolean>;
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexCol()}
  background-color: ${({ theme }) => theme.background};
  .text {
    color: ${({ theme }) => theme.text};
  }
`;

const App = ({ isDark, setIsDark }: AppProps): ReactElement => (
  <Wrapper>
    <button type="button" onClick={() => setIsDark((prev: boolean) => !prev)}>{isDark ? 'dark' : 'light'}</button>
    <div className="text">result</div>
  </Wrapper>
);

export default App;
