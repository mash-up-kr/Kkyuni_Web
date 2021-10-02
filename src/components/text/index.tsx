import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

type TextType = 'text1' | 'text2' | 'text3' | 'text4'

interface TextProps {
  text: string;
  className: TextType;
  rotate?: boolean;
}

const Wrapper = styled.img<{ rotate?: boolean }>`
  ${({ rotate }) => (rotate && 'transform: rotate(90deg);')};
  .text1{
    font-family: 'Gmarket Sans';
    font-weight: bold;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.white70};
  }
  .text2{
    font-family: 'Gmarket Sans';
    font-weight: bold;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white70};
  }
  .text3{
    font-family: 'Gmarket Sans';
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white60};
  }
  .text4{
    font-family: 'Black Ops One';
    font-size: 70px;
    color: ${({ theme }) => theme.colors.white10};
  }
`;

const Text = ({ text, className, rotate }: TextProps): ReactElement => (
  <Wrapper src={text} className={className} rotate={rotate}>{text}</Wrapper>
);

export default Text;
