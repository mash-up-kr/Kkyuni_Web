import React from 'react';
import { Story, Meta } from '@storybook/react';
import Toggle from '@src/components/Toggle';

export default {
  title: 'Toggle',
  component: Toggle,
} as Meta;

const Template: Story = () => <Toggle />;

export const toggle = Template.bind({});
