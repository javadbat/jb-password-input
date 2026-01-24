import React from 'react';
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


export const Sizes: Story = {
  render:()=>{
    return(
      <div style={{display:'flex', flexDirection:'column' ,gap:'0.5rem'}}>
        <JBPasswordInput label='xl' size='xl'/>
        <JBPasswordInput label='lg' size='lg'/>
        <JBPasswordInput label='md' size='md'/>
        <JBPasswordInput label='sm' size='sm'/>
        <JBPasswordInput label='xs' size='xs'/>
      </div>
    )
  }
};
