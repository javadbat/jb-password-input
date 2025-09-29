import { JBPasswordInput, Props } from 'jb-password-input/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<Props> = {
  title: "Components/form elements/Inputs/JBPasswordInput",
  component: JBPasswordInput,
};
export default meta;
type Story = StoryObj<typeof JBPasswordInput>;

export const Normal: Story = {
  args: {
    label: 'password',
    message: "simple password input",
  }
};

export const MinimumLength: Story = {
  args: {
    label: 'with minimum length',
    message: "enter value with less than 8 char to see error",
    minLength: 8
  }
};
