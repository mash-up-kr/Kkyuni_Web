import React from 'react';
import { Story, Meta } from '@storybook/react';
import WrapCanvasB from '@src/components/WrapCanvasB';

export default {
  title: 'Wrap Canvas B',
  component: WrapCanvasB,
} as Meta;

const Template: Story = () => <WrapCanvasB />;

export const wrapCanvasB = Template.bind({});
