import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import CardA from '@src/assets/CardA.svg';
import Play from '@src/assets/Play.svg';

import AlbumCover from '@src/components/AlbumCover';
import Text from '@src/components/Text';
import Badge from '@src/components/Badge';

const Wrapper = styled.div`
  position: relative;

  width: 280px;
  height: 512px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .date {
    position: absolute;
    top: 40px;
    left: 60px;
  }

  .play-container {
    ${({ theme }) => theme.flexRow('flex-start')}
    position: absolute;
    width: 220px;
    height: 34px;
    left: 21.43%;
    right: 0%;
    top: calc(50% - 34px / 2 + 22px);
    border-top: 2px solid ${({ theme }) => theme.colors.white20};
    border-bottom: 2px solid ${({ theme }) => theme.colors.white20};
    div {
      width: 100%;
    }
    svg {
      display: block;
    }
    > div {
      height: auto;
      margin-left: 5px;
    }
  }

  .album-cover {
    position: absolute;
    top: 40px;
    right: 0px;
  }

  .badge {
    position: absolute;
    top: 12px;
    left: 32px;
  }

  .stroke {
    position: absolute;
    left: 2.5%;
    right: 2.14%;
    top: 64.06%;
    bottom: 35.94%;
  }

  .text-area {
    position: absolute;

    width: 240px;
    height: 122px;

    left: 20px;
    top: 362px;

    > div:first-child {
      margin-bottom: 5px;
      ${({ theme }) => theme.ellipse()}
    }
    ${({ theme }) => theme.flexCol('flex-start', 'flex-start')}
  }
`;

const WrapCanvasA = (): ReactElement => (
  <Wrapper>
    <span className="date">
      <Text text="211010" className="text4" rotate />
    </span>
    <AlbumCover src="" />
    <Badge type="yellow" />
    <div className="play-container">
      <span>
        <Play />
      </span>
      <Text text="absdb" className="text1" />
    </div>
    <CardA />
    <div className="text-area">
      <Text
        text="asdfsadfasdfsaasdfsadfasdfsaasdfsadfasdfsa"
        className="text2"
      />
      <Text
        text="asdfsadfsdafsdafsadfsadfsadfsadfasdfasdfadsdfdas"
        className="text3"
      />
    </div>
  </Wrapper>
);

export default WrapCanvasA;
