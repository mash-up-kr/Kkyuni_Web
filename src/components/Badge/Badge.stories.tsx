import React from 'react';
import { Story, Meta } from '@storybook/react';
import Badge from '@src/components/Badge';

export default {
  title: 'Badge',
  component: Badge,
} as Meta;

const Template: Story = ({ type }) => <Badge type={type} />;

export const badge = Template.bind({});

badge.args = {
  type: 'yellow',
};
