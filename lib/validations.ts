import { type ValidationItem } from "jb-validation";
import { type JBInputValue } from "jb-input";

export const passwordLength:ValidationItem<JBInputValue> = {
  validator:({value})=>{
    return value.length > 7;
  },
  message:"طول گذرواژه حداقل باید 8 کارکتر باشد"
}; 