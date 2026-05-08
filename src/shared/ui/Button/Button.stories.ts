import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';
import Button from '.';

const meta = {
   title: 'ui/Button',
   component: Button,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   argTypes: {},
   args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
   args: {
      variant: 'clear',
      children: 'Button',
   },
};

export const Primary: Story = {
   args: {
      variant: 'primary',
      children: 'Button',
   },
};

export const Secondary: Story = {
   args: {
      variant: 'secondary',
      children: 'Button',
   },
};

export const Small: Story = {
   args: {
      variant: 'primary',
      size: 'small',
      children: 'Button',
   },
};
