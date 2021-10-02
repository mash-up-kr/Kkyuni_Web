import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import CardB from '@src/assets/CardB.svg';
import BarcodeLarge from '@src/assets/BarcodeLarge.svg';
import AlbumCover from '../AlbumCover';
import Badge from '../Badge';

const Wrapper = styled.div`
  position: relative;
  width: 280px;
  height: 512px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
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

const WrapCanvasB = (): ReactElement => (
  <Wrapper>
    <CardB />
    <ContentWrapper>
      <SongNameRow>
        sadasds
      </SongNameRow>
      <AlbumRow>
        <WrappedCover
          src="https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/1:1/w_870,h_870,c_limit/Artist-Designed%20Album%20Covers%202.jpg"
        />
        <BarcodeLarge />
      </AlbumRow>
      <TitleRow>
        asdasdj
      </TitleRow>
      <DetailRow>
        asdasdds
      </DetailRow>
    </ContentWrapper>
    <BadgeWrapper>
      <Badge type="blue" />
    </BadgeWrapper>
    <DateWrapper>
      211018
    </DateWrapper>
  </Wrapper>
);

export default WrapCanvasB;
