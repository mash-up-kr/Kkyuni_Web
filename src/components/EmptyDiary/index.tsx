import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import CardEmptyBackground from '@src/assets/CardEmpty.svg';
import Logo from '@src/assets/Logo.png';
import Plus from '@src/assets/Plus.svg';

const Wrapper = styled.div`
  position: relative;
  width: 280px;
  height: 512px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  svg {
    color: ${(props) => props.color};
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  left: 135px;
  top: 341px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .plus-container {
    margin-bottom: 37px;
    position: relative;
    img:last-child {
      position: absolute;
      left: 34px;
      top: 17px;
    }
    span {
      font-family: 'Gmarket Sans';
      font-size: 16px;
      color: ${({ theme }) => theme.colors.white100};
    }
  }
`;

const EmptyCard = (
  <Wrapper>
    <CardEmptyBackground />
    <ContentWrapper>
      <div className="plus-container">
        <img src={Logo} alt="logo" />
        <img src={Plus} alt="plus" />
      </div>
      <span>영화같은 오늘을 남겨보세요.</span>
    </ContentWrapper>
  </Wrapper>
);

export default EmptyCard;
