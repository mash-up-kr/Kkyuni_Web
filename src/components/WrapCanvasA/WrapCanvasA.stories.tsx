import React from 'react';
import { Story, Meta } from '@storybook/react';
import WrapCanvasA from '@src/components/WrapCanvasA';

export default {
  title: 'Wrap Canvas A',
  component: WrapCanvasA,
} as Meta;

const Template: Story = () => <WrapCanvasA />;

export const wrapCanvasA = Template.bind({});
