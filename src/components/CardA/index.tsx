import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import CardABackground from '@src/assets/CardA.svg';
import Play from '@src/assets/Play.svg';
import BarcodeSmall from '@src/assets/BarcodeSmall.png';

import AlbumCover from '@src/components/AlbumCover';
import Text from '@src/components/Text';
import Badge from '@src/components/Badge';

import Diary from '@src/types/Diary';
import { formatDate } from '@src/util';

const Wrapper = styled.div`
  position: relative;

  width: 280px;
  height: 512px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  svg {
    color: ${(props) => props.color};
  }

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

  .barcode {
    position: absolute;
    left: 68.21%;
    right: 0;
    top: 93.16%;
    bottom: -2.15%;
    overflow: hidden;
  }
`;

const CardA = ({
  type,
  date,
  title,
  content,
  youtubeInfo,
  emotion,
}: Diary): ReactElement => (
  <Wrapper color={type === 'BLUE1' ? '#4B13FE' : '#C4F212'}>
    <span className="date">
      <Text text={formatDate(date)} className="text4" rotate />
    </span>
    <a
      className="album-cover"
      href={youtubeInfo.link}
      target="_blank"
      rel="noreferrer"
    >
      <AlbumCover src={youtubeInfo.thumbnail} />
    </a>
    <Badge type={emotion} />
    <div className="play-container">
      <a href={youtubeInfo.link} target="_blank" rel="noreferrer">
        <Play />
      </a>
      <Text text={youtubeInfo.title} className="text1" />
    </div>
    <CardABackground />
    <div className="text-area">
      <Text text={title} className="text2" />
      <Text text={content} className="text3" />
    </div>
    <div className="barcode">
      <img src={BarcodeSmall} alt="barcode_small" />
    </div>
  </Wrapper>
);

export default CardA;
