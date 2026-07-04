import CSS from "./jb-password-input.css";
import VariablesCSS from "./variables.css";
import "jb-input";
// eslint-disable-next-line no-duplicate-imports
import { JBInputWebComponent, type JBInputValue } from "jb-input";
import type { ValidationItem } from "jb-validation";
import type { PasswordInputElementsObject } from "./types";
import { renderTriggerButtonHTML } from "./render";
import { dictionary } from "./i18n";
import { i18n } from "jb-core/i18n";

export * from "./types.js";

//TODO: add contain number, contain special char,... to password validation 
export class JBPasswordInputWebComponent extends JBInputWebComponent {
  #passwordElements!: PasswordInputElementsObject;
  isPasswordVisible: boolean | undefined;
  #minLength: number | null = null;
  public get minLength(): number | null {
    return this.#minLength;
  }
  public set minLength(value: number | null | undefined) {
    if (value === undefined || value === null) {
      this.#minLength = null;
      this.checkValidity();
      return;
    }
    const newValue = Number(value);
    if (Number.isNaN(newValue)) {
      console.error("minLength value is not a valid number");
      return;
    }
    this.#minLength = newValue;
    this.checkValidity();
  }
  constructor() {
    super();
    //to prevent initWebComponent  method override
    this.#initPasswordInputWebComponent();
  }
  #initPasswordInputWebComponent() {
    const html = `<style>${CSS} ${VariablesCSS}</style>`;
    const element = document.createElement("template");
    element.innerHTML = html;
    this.shadowRoot?.appendChild(element.content.cloneNode(true));
    this.elements.slots.endSection.innerHTML = renderTriggerButtonHTML();
    this.elements.input.setAttribute('type', 'password');
    this.#passwordElements = {
      passwordTrigger: this.shadowRoot!.querySelector('.password-trigger') as HTMLDivElement
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
    switch (name) {
      case 'type':
        //ignore user trying to change input type of password input
        break;
    }
  }
  #getPasswordInputValidations(): ValidationItem<JBInputValue>[] {
    const validations: ValidationItem<JBInputValue>[] = [];

    if (this.minLength !== null) {
      const passwordLength: ValidationItem<JBInputValue> = {
        validator: ({ value }) => {
          return value.length >= (this.minLength??0);
        },
        message: dictionary.get(i18n, "lengthValidation")(this.minLength)
      };
      validations.push(passwordLength);
    }
    return validations;
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
