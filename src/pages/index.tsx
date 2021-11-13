import React, { useEffect } from 'react';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';

import CardA from '@src/components/CardA';
import { useDiaryState } from '@src/store';
import { fetchDiary } from '@src/store/diarySlice';

const IndexPage = () => {
  const { diary } = useDiaryState();
  const dispatch = useDispatch();
  // const [diary, setDiary] = useState<Diary>({
  //   title: '우리의개꿈',
  //   content: '화성갈끄니까',
  //   date: new Date(),
  //   type: 'BLUE',
  //   emotion: 'ANGRY',
  //   youtubeInfo: {
  //     link: 'https://youtu.be/Ih4xoL9KqOE',
  //     title: '코인 퉤 - 우리의 개꿈',
  //     thumbnail:
  //       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKPud2uX3576yqQ7Pz4vCfn2gLyxDA0cEX8Q&usqp=CAU',
  //     playTime: 0,
  //   },
  // });

  useEffect(() => {
    const parsed = queryString.parse(window.location.search);

    if (parsed.date && parsed.token) {
      dispatch(
        fetchDiary({
          date: parsed.date.toString(),
          token: parsed.token.toString(),
        }),
      );
    }
  }, []);

  if (!diary) {
    return <></>;
  }

  return <CardA {...diary} />;
};

export default IndexPage;
