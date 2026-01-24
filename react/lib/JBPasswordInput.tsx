'use client';
import React, { useRef, useEffect, useState, useImperativeHandle } from 'react';
import {BaseProps, useJBInputAttribute, type DirectProps } from 'jb-input/react';
import 'jb-password-input';

// eslint-disable-next-line no-duplicate-imports
import {useJBInputEvents } from 'jb-input/react';
// eslint-disable-next-line no-duplicate-imports
import {type JBPasswordInputWebComponent} from 'jb-password-input';
import type { SizeVariants } from 'jb-input';

type JBPasswordInputType = React.DetailedHTMLProps<React.HTMLAttributes<JBPasswordInputWebComponent>, JBPasswordInputWebComponent> & DirectProps;

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'jb-password-input': JBPasswordInputType;
    }
  }
}
// eslint-disable-next-line react/display-name
const JBPasswordInput = React.forwardRef<JBPasswordInputWebComponent | undefined,Props>((props, ref) => {

  const element = useRef<JBPasswordInputWebComponent>(null);
  useImperativeHandle(
    ref,
    () => (element ? element.current : undefined),
    [element],
  );
   const { onBeforeinput, onBlur, onChange, onEnter, onFocus, onInput, onKeydown, onKeyup, size, disabled, error, inputmode, label, message, name, placeholder, required, type, validationList, value, ...standardProps } = props;
  // props that directly set in jsx dom and need no process or property set
  const directProps: Required<DirectProps> = { label, message, name, placeholder, size, type, error,inputmode }
  useJBInputEvents(element, { onBeforeinput, onBlur, onChange, onEnter, onFocus, onInput, onKeydown, onKeyup });
  useJBInputAttribute(element, { disabled, required, validationList, value });
  useEffect(() => {
      element.current.minLength = props.minLength;
  }, [props.minLength]);
  return (
    <jb-password-input ref={element} {...directProps} {...standardProps} >
      {props.children}
    </jb-password-input>
  );
});

export type Props = BaseProps<JBPasswordInputWebComponent> & {
  minLength?: number | null | undefined,
};
JBPasswordInput.displayName = "JBPasswordInput";
export {JBPasswordInput};