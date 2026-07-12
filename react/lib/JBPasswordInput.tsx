'use client';
import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { type BaseProps, useJBInputAttribute, type DirectProps } from 'jb-input/react';
import 'jb-password-input';

// eslint-disable-next-line no-duplicate-imports
import { useJBInputEvents } from 'jb-input/react';
// eslint-disable-next-line no-duplicate-imports
import type { JBPasswordInputWebComponent } from 'jb-password-input';
import './module-declaration.js';

// eslint-disable-next-line react/display-name
const JBPasswordInput = React.forwardRef<JBPasswordInputWebComponent | undefined, Props>((props, ref) => {

  const element = useRef<JBPasswordInputWebComponent>(null);
  useImperativeHandle(ref, () => element.current ?? undefined, [element]);
  const { onBeforeinput, onBlur, onChange, onEnter, onFocus, onInput, onKeydown, onKeyup, size, disabled, error, initialValue, inputmode, label, message, name, placeholder, required, type, validationList, value, autocomplete, ...otherProps } = props;
  // props that directly set in jsx dom and need no process or property set
  const directProps: DirectProps & { value: string, initialValue: string } = { label, message, name, placeholder, size, type, error, inputmode, autocomplete, value: value?.toString() ?? "", initialValue: initialValue?.toString() ?? "" }
  useJBInputEvents(element, { onBeforeinput, onBlur, onChange, onEnter, onFocus, onInput, onKeydown, onKeyup, ...otherProps });
  useJBInputAttribute(element, { disabled, required, validationList, ...otherProps });
  useEffect(() => {
    if (element.current) {
      element.current.minLength = props.minLength ?? null;
    }
  }, [props.minLength]);
  return (
    <jb-password-input ref={element} {...directProps} {...otherProps} >
      {props.children}
    </jb-password-input>
  );
});

export type Props = BaseProps<JBPasswordInputWebComponent> & {
  minLength?: number | null | undefined,
  initialValue?: string | number | null,
};
JBPasswordInput.displayName = "JBPasswordInput";
export { JBPasswordInput };
