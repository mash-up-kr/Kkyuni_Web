import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { useAppDispatch, useUiState, setIsDark } from '@src/store';

const Wrapper = styled.div`
  ${({ theme }) => theme.flexCol()}
  background-color: ${({ theme }) => theme.background};
  .text {
    color: ${({ theme }) => theme.text};
  }
  .text1{
    font-family: 'Gmarket Sans';
    font-weight: bold;
    font-size: 13px;
  }
  .text2{
    font-family: 'Gmarket Sans';
    font-weight: bold;
    font-size: 18px;
  }
  .text3{
    font-family: 'Gmarket Sans';
    font-size: 14px;
  }
  .text4{
    font-family: 'Black Ops One';
    font-size: 70px;
  }
`;

const Toggle = (): ReactElement => {
  const dispatch = useAppDispatch();
  const { isDark } = useUiState();

  return (
    <Wrapper>
      <button type="button" onClick={() => dispatch(setIsDark({ isDark: !isDark }))}>{isDark ? 'dark' : 'light'}</button>
      <div className="text">result</div>
      <div className="text1">노래 제목</div>
      <div className="text2">일기 제목</div>
      <div className="text3">일기 내용</div>
      <div className="text4">211002</div>
    </Wrapper>
  );
};

export default Toggle;
