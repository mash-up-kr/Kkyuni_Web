import React, { useEffect, useMemo } from 'react';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import CardA from '@src/components/CardA';
import CardB from '@src/components/CardB';
import NewCard from '@src/assets/NewCard.png';

import { useDiaryState } from '@src/store';
import { fetchDiary } from '@src/store/diarySlice';

const IndexPage = () => {
  const { diary } = useDiaryState();
  const dispatch = useDispatch();

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

  const renderCard = useMemo(() => {
    if (!diary) {
      return <NewCardImg src={NewCard} alt="make-new" />;
    }

    if (diary.type?.includes('1')) {
      return <CardA {...diary} />;
    }

    return <CardB {...diary} />;
  }, [diary]);

  return (
    <Wrapper>
      <CardWrapper calcScale={(window.innerHeight / 512) * 0.9}>
        {renderCard}
      </CardWrapper>
    </Wrapper>
  );
};

export default IndexPage;

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #1c1c1c;
  overflow: hidden;
`;

const CardWrapper = styled.div<{ calcScale: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${({ calcScale }) => 280 * calcScale}px !important;
  transform: translate(-42%, -50%) scale(${({ calcScale }) => calcScale});
`;

const NewCardImg = styled.img`
  width: 86%;
`;
