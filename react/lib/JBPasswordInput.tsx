'use client';
import React, { useRef, useEffect, useState, useImperativeHandle } from 'react';
import {BaseProps, useJBInputAttribute } from 'jb-input/react';
import 'jb-password-input';

// eslint-disable-next-line no-duplicate-imports
import {useJBInputEvents } from 'jb-input/react';
// eslint-disable-next-line no-duplicate-imports
import {type JBPasswordInputWebComponent, type PasswordValidationLevel} from 'jb-password-input';

interface JBPasswordInputType extends React.DetailedHTMLProps<React.HTMLAttributes<JBPasswordInputWebComponent>, JBPasswordInputWebComponent> {
  "class"?: string,
}
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
  const [refChangeCount, refChangeCountSetter] = useState(0);
  useImperativeHandle(
    ref,
    () => (element ? element.current : undefined),
    [element],
  );
  useEffect(() => {
    refChangeCountSetter(refChangeCount + 1);
  }, [element.current]);
  useJBInputAttribute(element,props);
  useJBInputEvents<JBPasswordInputWebComponent>(element,props);
  useEffect(() => {
    if( props.level && typeof props.level === "string"){
      element.current.level = props.level;
    }
  }, [props.level]);
  return (
    <jb-password-input ref={element} class={props.className?props.className:''}>
      {props.children}
    </jb-password-input>
  );
});

export type Props = BaseProps<JBPasswordInputWebComponent> & {
  level?: PasswordValidationLevel,
};
JBPasswordInput.displayName = "JBPasswordInput";
export {JBPasswordInput};