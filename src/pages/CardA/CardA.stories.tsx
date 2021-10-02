import React from 'react';
import { Story, Meta } from '@storybook/react';
import CardA from '@src/pages/CardA';

export default {
  title: 'Card A',
  component: CardA,
} as Meta;

const Template: Story = () => <CardA />;

export const cardA = Template.bind({});
