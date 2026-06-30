import type { DirectProps } from 'jb-input/react';
import type { JBPasswordInputWebComponent } from 'jb-password-input';

type JBPasswordInputType = React.DetailedHTMLProps<React.HTMLAttributes<JBPasswordInputWebComponent>, JBPasswordInputWebComponent> & DirectProps;

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'jb-password-input': JBPasswordInputType;
    }
  }
}
