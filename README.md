# jb-password-input

this superset component on [jb-input](https://github.com/javadbat/jb-input) , just for password input with ready to use validators & show icon

## instructions

### install

#### using npm

1- install npm package
```cmd
npm i jb-password-input
```

2- import module in one of your js in page

```js
import 'jb-password-input';

```

3- use component in your html or jsx file like any other html tag

```html
<jb-password-input label="password:" message="subtitle of input box"></jb-password-input>
```
#### using cdn

1- add script tag to your html file.

```HTML
<script src="https://unpkg.com/jb-input/dist/jb-input.umd.js"></script>
<script src="https://unpkg.com/jb-password-input/dist/jb-password-input.umd.js"></script>
```
2- use web component like any other html tag whenever you need

```html
<div class="some-app-div">
  <jb-number-input label="number:" message="subtitle of input box"></jb-number-input>
</div>
```
### get/set value

```js
//get value
const inputValue = document.getElementByTagName('jb-password-input').value;
//set value
document.getElementByTagName('jb-password-input').value = "new string";
```

### set custom style

in some cases in your project you need to change default style of web-component for example you need zero margin or different border-radius and etc.    
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component.
since jb-payment-input use jb-input underneath, read [jb-input](https://github.com/javadbat/jb-input) custom style list.
