import { i18n } from "jb-core/i18n";
import { dictionary } from "./i18n";

export function renderTriggerButtonHTML(): string {
  return /* html */ `
  <button class="password-trigger" type="button" aria-label="${dictionary.get(i18n, "showPassword")}" aria-pressed="false">
    <jb-icon-eye></jb-icon-eye>
  </button>
  `;
}
