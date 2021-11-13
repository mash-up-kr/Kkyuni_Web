import React, { ReactElement, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';

import CardA from '@src/components/CardA';
import {
  setDiary as setDiaryState,
  useAppDispatch,
  useDiaryState,
} from '@src/store';
import CardB from '@src/components/CardB';

const PreviewPage = (): ReactElement => {
  const { diary } = useDiaryState();
  const dispatch = useAppDispatch();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    (window as any).setDiary = (newDiary: any) => {
      dispatch(
        setDiaryState({
          diary: {
            emotion: newDiary.emotion,
            title: newDiary.title,
            type: 'BLUE',
            date: new Date(),
            content: newDiary.content,
            youtubeInfo: {
              title: newDiary.music.title,
              link: newDiary.music.linkUrl,
              thumbnail: newDiary.music.thumbnailUrl,
              playTime: newDiary.music.playTime,
            },
          },
        }),
      );
    };
  }, []);

  useEffect(() => {
    (window as any).selectType = () => {
      if (index === 0 || index === 2) {
        return 'A';
      }

      return 'B';
    };
  }, [index]);

  if (!diary) {
    return <Wrapper />;
  }

  return (
    <Wrapper>
      <Swiper
        centeredSlides
        spaceBetween={30}
        slidesPerView={2}
        onSlideChange={(e) => setIndex(e.activeIndex)}
      >
        <SwiperSlide>
          <CardA {...diary} />
        </SwiperSlide>
        <SwiperSlide>
          <CardB {...diary} />
        </SwiperSlide>
        <SwiperSlide>
          <CardA {...diary} type="GREEN" />
        </SwiperSlide>
        <SwiperSlide>
          <CardB {...diary} type="GREEN" />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default PreviewPage;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #1c1c1c;
`;
