import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import EmotionBlue from '@src/assets/EmotionBlue.svg';
import EmotionYellow from '@src/assets/EmotionYellow.svg';
import EmotionRed from '@src/assets/EmotionRed.svg';
import EmotionPupple from '@src/assets/EmotionPupple.svg';
import EmotionGreen from '@src/assets/EmotionGreen.svg';
import { Emotion } from '@src/types/Diary';

export interface BadgeProps {
  type: Emotion;
}

const Wrapper = styled.div`
  width: 80px;
  height: 80px;
`;

const Badge = ({ type }: BadgeProps): ReactElement => (
  <Wrapper className="badge">
    {
      {
        ANGRY: <EmotionRed />,
        FUNNY: <EmotionYellow />,
        NOTBAD: <EmotionGreen />,
        PANIC: <EmotionPupple />,
        SAD: <EmotionBlue />,
      }[type]
    }
  </Wrapper>
);

export default Badge;
