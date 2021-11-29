import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import EmotionBlue from '@src/assets/EmotionBlue.png';
import EmotionYellow from '@src/assets/EmotionYellow.png';
import EmotionRed from '@src/assets/EmotionRed.png';
import EmotionPurple from '@src/assets/EmotionPurple.png';
import EmotionGreen from '@src/assets/EmotionGreen.png';
import { Emotion } from '@src/types/Diary';

export interface BadgeProps {
  type: Emotion;
}

const Wrapper = styled.div`
  width: 80px;
  height: 80px;

  > img {
    width: 100%;
    height: 100%;
  }
`;

const getImageFromType = (type: Emotion) => {
  switch (type) {
    case 'ANGRY':
      return EmotionRed;
    case 'FUNNY':
      return EmotionYellow;
    case 'NOTBAD':
      return EmotionGreen;
    case 'PANIC':
      return EmotionPurple;
    case 'SAD':
    default:
      return EmotionBlue;
  }
};

const Badge = ({ type }: BadgeProps): ReactElement => (
  <Wrapper className="badge">
    <img src={getImageFromType(type)} alt="badge" />
  </Wrapper>
);

export default Badge;
