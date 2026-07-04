import {JBDictionary} from 'jb-core/i18n';
export type JBNumberInputDictionary = {
  lengthValidation:(length:number)=>string,
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
export const dictionary = new JBDictionary<JBNumberInputDictionary>({
  "fa":{
    lengthValidation:(length:number)=>`گذرواژه شما حداقل میبایست ${length} کارکتر باشد`,
  },
  "en":{
    lengthValidation:(length:number)=>`Password must contain at least ${length} character`,
  }
});