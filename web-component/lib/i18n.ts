import {JBDictionary} from 'jb-core/i18n';
export type JBPasswordInputDictionary = {
  lengthValidation:(length:number)=>string,
  showPassword:string,
  hidePassword:string,
}

/**
 * dictionary of jb password input. it's already loaded with persian and english lang but you can also extend it with you apps other language or replace already exist language 
 * @example 
 * ```js
 * import {dictionary} from 'jb-password-input'
 * dictionary.setLanguage("fr", {
 *  passwordValidation: "message in french",
 * // other dictionary keys
 * });
 * ```
 */
export const dictionary = new JBDictionary<JBPasswordInputDictionary>({
  "fa":{
    lengthValidation:(length:number)=>`گذرواژه شما حداقل میبایست ${length} کارکتر باشد`,
    showPassword:"نمایش گذرواژه",
    hidePassword:"پنهان کردن گذرواژه",
  },
  "en":{
    lengthValidation:(length:number)=>`Password must contain at least ${length} character`,
    showPassword:"Show password",
    hidePassword:"Hide password",
  }
});
