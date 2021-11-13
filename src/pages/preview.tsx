import React, { ReactElement, useEffect } from 'react';
import styled from '@emotion/styled';

import CardA from '@src/components/CardA';
import {
  setDiary as setDiaryState,
  useAppDispatch,
  useDiaryState,
} from '@src/store';
import Diary from '@src/types/Diary';
import CardB from '@src/components/CardB';

const PreviewPage = (): ReactElement => {
  const { diary } = useDiaryState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (window as any).setDiary = (diaryStr: string) => {
      const newDiary: Diary = JSON.parse(diaryStr);
      newDiary.date = new Date(newDiary.date);
      dispatch(setDiaryState({ diary: newDiary }));
    };
  }, []);

  if (!diary) {
    return <></>;
  }

  return (
    <DiarySwiper>
      <CardA {...diary} />
      <CardB {...diary} />
    </DiarySwiper>
  );
};

export default PreviewPage;

const DiarySwiper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  overflow-x: scroll;

  > div:not(:first-of-type) {
    margin-left: 20px;
  }
`;
