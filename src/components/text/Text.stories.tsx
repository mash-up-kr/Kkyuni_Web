import React from 'react';
import { Story, Meta } from '@storybook/react';
import Text, { TextProps } from '@src/components/Text';

export default {
  title: 'Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args: TextProps) => <Text {...args} />;

export const text = Template.bind({});

text.args = {
  text: 'test',
  className: 'text1',
  rotate: false,
};
