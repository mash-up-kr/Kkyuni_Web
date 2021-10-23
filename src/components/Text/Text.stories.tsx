import React from 'react';
import { Story, Meta } from '@storybook/react';
import Text, { TextProps } from '@src/components/Text';

export default {
  title: 'Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args: TextProps) => (
  <div style={{ backgroundColor: 'black', height: '100vh' }}>
    <Text {...args} />
  </div>
);

export const text = Template.bind({});

text.args = {
  text: 'test',
  className: 'text1',
  rotate: false,
};
