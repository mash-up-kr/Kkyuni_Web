import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import CardA from '@src/components/CardA';
import Diary from '@src/types/Diary';
import KakaoButton from '@src/components/KakaoButton';

const IndexPage = () => {
  const [diary, setDiary] = useState<Diary>({
    title: '우리의개꿈',
    content: '화성갈끄니까',
    date: new Date(),
    type: 'BLUE',
    emotion: 'ANGRY',
    youtubeInfo: {
      link: 'https://youtu.be/Ih4xoL9KqOE',
      title: '코인 퉤 - 우리의 개꿈',
      thumbnail:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPud2uX3576yqQ7Pz4vCfn2gLyxDA0cEX8Q&usqp=CAU',
      playTime: 0,
    },
  });

  useEffect(() => {
    // 안드로이드에서 불러와야함 window.~~
  }, []);

  return (
    <PageWrapper>
      <CardA {...diary} />
      <KakaoButton url={window.location.href} />
    </PageWrapper>
  );
};

export default IndexPage;

const PageWrapper = styled.div`
  text-align: center;
`;
