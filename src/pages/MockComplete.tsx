import React from 'react';

import CardA from '@src/components/CardA';
import { Wrapper, CardWrapper } from '@src/pages';

const MockComplete = () => (
  <Wrapper>
    <CardWrapper calcScale={(window.innerHeight / 512) * 0.9}>
      <CardA {...{
        emotion: 'NOTBAD',
        title: '겨울이 온 날',
        type: 'BLUE1',
        date: new Date(),
        content: '오늘따라 유난히 코 끝이 시렸다.',
        youtubeInfo: {
          title: '누구나 겨울이 오면 - 잔나비',
          link: 'https://www.youtube.com/watch?v=xVhucE0IvWE',
          thumbnail: 'https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/496/014/80496014_1418721729968_1_600x600.JPG/dims/resize/Q_80,0',
          playTime: 7,
        },
      }}
      />
    </CardWrapper>
  </Wrapper>
);

export default MockComplete;
