import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import EmotionBlue from '@src/assets/EmotionBlue.svg';
import EmotionYellow from '@src/assets/EmotionYellow.svg';

type BadgeType = 'blue' | 'yellow';

interface BadgeProps {
  type: BadgeType;
}

const Wrapper = styled.div`
  width: 80px;
  height: 80px;
`;

const Badge = ({ type }: BadgeProps): ReactElement => (
  <Wrapper>
    {
      {
        blue: <EmotionBlue />,
        yellow: <EmotionYellow />,
      }[type]
    }
  </Wrapper>
);

export default Badge;
