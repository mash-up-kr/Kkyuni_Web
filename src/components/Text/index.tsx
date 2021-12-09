import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

type TextType = 'text1' | 'text2' | 'text3' | 'text4';

export interface TextProps {
  text: string;
  className: TextType;
  rotate?: boolean;
}

const Wrapper = styled.div<{ rotate?: boolean }>`
  ${({ rotate }) => rotate
    && `transform: rotate(90deg); transform-origin: top left;
  `}
  overflow: hidden;

  .text1 {
    font-family: 'Gmarket Sans';
    font-weight: bold;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.white70};
    ${({ theme }) => theme.ellipse()}
  }
  .text2 {
    font-family: 'Gmarket Sans';
    font-weight: bold;
    font-size: 18px;
    height: 18px;
    color: ${({ theme }) => theme.colors.white70};
    ${({ theme }) => theme.ellipse()}
  }
  .text3 {
    font-family: 'Gmarket Sans';
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white60};
    line-height: 1.6;
    line-break: anywhere;
   ${({ theme }) => theme.ellipseLine(4)}
  }
  .text4 {
    font-family: 'Black Ops One';
    font-size: 70px;
    color: transparent;
    -webkit-text-stroke: 2px white;
    opacity: 0.1;
  }
`;

const Text = ({ text, className, rotate = false }: TextProps): ReactElement => (
  <Wrapper rotate={rotate} className="text">
    <div className={className}>{text}</div>
  </Wrapper>
);

export default Text;
