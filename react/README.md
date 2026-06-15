# jb-password-input-react

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-password-input)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-password-input/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-password-input-react)](https://www.npmjs.com/package/jb-password-input-react)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-password-input)

password input react component
this component props and functionality are all come from [jb-input-react](https://github.com/javadbat/jb-input-react) just for password input so for doc just read jb-input-react document
in jb-time-input you can create a input special for time the advantage is:

- all jb-input benefits include customizations, validation,...
- show password toggle button to let user see inputted password
- ready to use password validation like minimum length.

## Demo

 - [codeSandbox preview](https://3f63dj.csb.app/samples/jb-password-input) for just see the demo and [codeSandbox editor](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBPasswordInput.tsx) if you want to see and play with code
 - [Storybook](https://javadbat.github.io/design-system/?path=/docs/components-form-elements-inputs-jbpasswordinput)

## Demo image:    
![](pass.png)
![](passShow.png)

## set minimum length

```jsx
<JBPasswordInput minLength={8}></JBPasswordInput>
```
You can also set your own validation but we put this option for ease of use.

## Other Related Docs:

- see [jb-password-input](https://github.com/javadbat/jb-password-input) if you want to use this as a web-component in a pure-js app or any other framework.

- see [All JB Design system Component List](https://javadbat.github.io/design-system/) for more components.

- use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute in this component.
