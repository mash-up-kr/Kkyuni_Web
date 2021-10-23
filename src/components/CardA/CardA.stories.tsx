import React from 'react';
import { Story, Meta } from '@storybook/react';
import CardA from '@src/components/CardA';
import Diary from '@src/types/Diary';

export default {
  title: 'CardA',
  component: CardA,
} as Meta;

const Template: Story<Diary> = (args: Diary) => <CardA {...args} />;

export const cardA = Template.bind({});

cardA.args = {
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
};
