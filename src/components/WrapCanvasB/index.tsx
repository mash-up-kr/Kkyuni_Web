import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import CardB from '@src/assets/CardB.svg';
import BarcodeLarge from '@src/assets/BarcodeLarge.svg';
import Diary from '@src/types/Diary';
import { formatDate } from '@src/util';
import AlbumCover from '../AlbumCover';
import Badge from '../Badge';
import Text from '../Text';

const Wrapper = styled.div<{ color: string }>`
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
  left: 10px;
  right: 10px;
  top: 32.5px;
  bottom: 33.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.5px solid rgba(255, 255, 255, 0.5);
`;

const SongNameRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
`;

const AlbumRow = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -1px;
    width: 0.5px;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
  }
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 46.5px;
  padding: 0 10px;
  box-sizing: border-box;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
`;

const DetailRow = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const WrappedCover = styled(AlbumCover)`
  margin-left: -10px;
  border-right: 0.5px solid rgba(255, 255, 255, 0.5);
`;

const BadgeWrapper = styled.div`
  position: absolute;
  top: 90px;
  right: 20px;
`;

const DateWrapper = styled.div`
  position: absolute;
  left: 0px;
  bottom: 0px;
  color: white;
  line-height: 57px;
  font-family: 'Black Ops One';
  font-size: 57px;
`;

const WrapCanvasB = ({
  type,
  date,
  title,
  content,
  youtubeInfo,
  emotion,
}: Diary): ReactElement => (
  <Wrapper color={type === 'BLUE2' ? '#4B13FE' : '#C4F212'}>
    <CardB />
    <ContentWrapper>
      <SongNameRow>
        <Text text={youtubeInfo.title} className="text1" />
      </SongNameRow>
      <AlbumRow>
        <a href={youtubeInfo.link} target="_blank" rel="noreferrer">
          <WrappedCover src={youtubeInfo.thumbnail} />
        </a>
        <BarcodeLarge />
      </AlbumRow>
      <TitleRow>
        <Text text={title} className="text2" />
      </TitleRow>
      <DetailRow>
        <Text text={content} className="text3" />
      </DetailRow>
    </ContentWrapper>
    <BadgeWrapper>
      <Badge type="ANGRY" />
    </BadgeWrapper>
    <DateWrapper>
      <Text text={formatDate(date)} className="text4" />
    </DateWrapper>
  </Wrapper>
);

export default WrapCanvasB;
