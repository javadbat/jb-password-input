import React from 'react';
import { JBButton } from 'jb-button/react';
import type { JBPasswordInputWebComponent } from 'jb-password-input';
import { JBPasswordInput } from 'jb-password-input/react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, waitFor } from 'storybook/test';
const meta = {
  title: "Components/form elements/Inputs/JBPasswordInput",
  component: JBPasswordInput,
} satisfies Meta<typeof JBPasswordInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    label: 'password',
    message: "simple password input",
  }
};

export const InitialValue: Story = {
  render: (args) => {
    const formRef = React.useRef<HTMLFormElement>(null);
    return (
      <form ref={formRef}>
        <JBPasswordInput {...args} />
        <JBButton type="button" onClick={() => formRef.current?.reset()}>Reset</JBButton>
      </form>
    );
  },
  args: {
    label: 'initial password',
    initialValue: 'initial-secret',
  },
  play: async ({ canvasElement }) => {
    const passwordInput = canvasElement.querySelector<JBPasswordInputWebComponent>('jb-password-input');
    const resetButton = canvasElement.querySelector('jb-button')?.shadowRoot?.querySelector<HTMLButtonElement>('button');

    expect(passwordInput).toBeTruthy();
    expect(resetButton).toBeTruthy();

    await waitFor(() => {
      expect(passwordInput?.initialValue).toBe('initial-secret');
      expect(passwordInput?.value).toBe('initial-secret');
      expect(passwordInput?.isDirty).toBe(false);
    });

    passwordInput!.value = 'changed-secret';
    await userEvent.click(resetButton!);

    await waitFor(() => {
      expect(passwordInput?.value).toBe('initial-secret');
      expect(passwordInput?.isDirty).toBe(false);
    });
  },
};

export const InitialValueDoesNotOverrideValue: Story = {
  args: {
    initialValue: 'initial-secret',
    value: 'current-secret',
  },
  play: async ({ canvasElement }) => {
    const passwordInput = canvasElement.querySelector<JBPasswordInputWebComponent>('jb-password-input');

    await waitFor(() => {
      expect(passwordInput?.initialValue).toBe('initial-secret');
      expect(passwordInput?.value).toBe('current-secret');
      expect(passwordInput?.isDirty).toBe(true);
    });
  },
};

export const ExplicitNullValueDoesNotFallBackToInitialValue: Story = {
  args: {
    initialValue: 'initial-secret',
    value: null,
  },
  play: async ({ canvasElement }) => {
    const passwordInput = canvasElement.querySelector<JBPasswordInputWebComponent>('jb-password-input');

    await waitFor(() => {
      expect(passwordInput?.initialValue).toBe('initial-secret');
      expect(passwordInput?.value).toBe('');
      expect(passwordInput?.isDirty).toBe(true);
    });
  },
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
