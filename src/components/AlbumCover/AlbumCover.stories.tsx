import React from 'react';
import { Story, Meta } from '@storybook/react';
import AlbumCover from '@src/components/AlbumCover';

export default {
  title: 'Album Cover',
  component: AlbumCover,
} as Meta;

const Template: Story = ({ src, isSmall }) => <AlbumCover src={src} isSmall={isSmall} />;

export const albumCover = Template.bind({});

albumCover.args = {
  src: 'https://media.architecturaldigest.com/photos/5890e88033bd1de9129eab0a/1:1/w_870,h_870,c_limit/Artist-Designed%20Album%20Covers%202.jpg',
  isSmall: false,
};
