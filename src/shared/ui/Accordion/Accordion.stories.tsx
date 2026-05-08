import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Accordion from '.';

const meta = {
   title: 'ui/Accordion',
   component: Accordion,
   parameters: {
      layout: 'centered',
   },
   tags: ['autodocs'],
   args: {
      data: [
         {
            button: {
               children: 'кнопка 1',
            },
            body: <div>контент 1</div>,
         },
         {
            button: {
               children: 'кнопка 2',
            },
            body: <div>контент 2</div>,
         },
         {
            button: {
               children: 'кнопка 3',
            },
            body: <div>контент 3</div>,
         },
      ],
   },
   argTypes: {
      data: {
         description: 'Массив элементов аккордеона',
      },
   },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const Multiple: Story = {
   args: {
      multiple: true,
   },
};

export const WithDefaultOpen: Story = {
   args: {
      defaultValue: 0,
   },
};
