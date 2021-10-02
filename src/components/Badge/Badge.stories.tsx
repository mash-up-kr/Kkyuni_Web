import React from 'react';
import { Story, Meta } from '@storybook/react';
import Badge, { BadgeProps } from '@src/components/Badge';

export default {
  title: 'Badge',
  component: Badge,
} as Meta;

const Template: Story<BadgeProps> = ({ type }: BadgeProps) => <Badge type={type} />;

export const badge = Template.bind({});

badge.args = {
  type: 'ANGRY',
};
