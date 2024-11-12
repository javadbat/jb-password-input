import CSS from "./jb-password-input.scss";
import "jb-input";
// eslint-disable-next-line no-duplicate-imports
import { JBInputWebComponent } from "jb-input";
import { type JBInputValue, type ValidationValue } from "jb-input/types";
//TODO: update it when you move validation to core package
import { type WithValidation, type ValidationItem } from "jb-validation/types";
import { passwordLength } from "./validations";
import TriggerHTML from './password-trigger.html';
import { PasswordInputElementsObject, PasswordValidationLevel } from "./types";
//TODO: add barcode scanner or nfc reader
export class JBPasswordInputWebComponent extends JBInputWebComponent {
  #passwordElements:PasswordInputElementsObject;
  #level:PasswordValidationLevel = "NONE";
  get level(){
    return this.#level;
  }
  set level(value:PasswordValidationLevel){
    this.#level = value;
  }
  isPasswordVisible: boolean | undefined;
  constructor() {
    super();
    //to prevent initWebComponent  method override
    this.#initPasswordInputWebComponent();
  }
    #initPasswordInputWebComponent() {
    const html = `<style>${CSS}</style>`;
    const element = document.createElement("template");
    element.innerHTML = html;
    this.shadowRoot.appendChild(element.content.cloneNode(true));
    this.elements.slots.endSection.innerHTML = TriggerHTML;
    this.elements.input.setAttribute('type','password');
    this.#passwordElements = {
      passwordTrigger:this.shadowRoot.querySelector('.password-trigger') as HTMLDivElement
    };
    this.validation.addValidationListGetter(this.#getPasswordInputValidations.bind(this));
    this.#addPasswordInputEventListeners();
  }
    #addPasswordInputEventListeners() {
      this.#passwordElements.passwordTrigger.addEventListener(
        "click",
        this.#onPasswordTriggerClicked.bind(this)
      );
    }
    static get observedAttributes() {
      return [
        ...JBInputWebComponent.observedAttributes,
      ];
    }
    attributeChangedCallback(name: string, oldValue: string, newValue: string): void {
      // call base jb-input on attribute changes
      if (["type"].includes(name)) {
        this.#onPasswordAttributeChange(name, newValue);
      } else {
        this.onAttributeChange(name, newValue);
      }
    }
    #onPasswordAttributeChange(name: string, value: string) {
      switch(name){
        case 'type':
          //ignore user trying to change input type of password input
          break;
      }
    }
    #getPasswordInputValidations(): ValidationItem<JBInputValue>[] {
      if (this.#level == "BASIC") {
        return [passwordLength];
      }
      if (this.#level == "PRO") {
        //TODO: add number include & special char include
        return [passwordLength];
      }
      return [];
    }
    #onPasswordTriggerClicked(): void {
      this.isPasswordVisible = !this.isPasswordVisible;
      const textField = this.elements.input;
      const passwordTriggerSVG =
        this.#passwordElements.passwordTrigger.querySelector("svg")!;
      if (this.isPasswordVisible) {
        passwordTriggerSVG.classList.add("password-visible");
        textField.setAttribute("type", "text");
      } else {
        passwordTriggerSVG.classList.remove("password-visible");
        textField.setAttribute("type", "password");
      }
    }
}

const myElementNotExists = !customElements.get("jb-password-input");
if (myElementNotExists) {
  window.customElements.define("jb-password-input", JBPasswordInputWebComponent);
}