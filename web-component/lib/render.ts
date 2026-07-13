import { i18n } from "jb-core/i18n";
import { dictionary } from "./i18n";

export function renderTriggerButtonHTML(): string {
  return /* html */ `
  <div class="password-trigger" role="button" aria-label="${dictionary.get(i18n, "showPassword")}" aria-pressed="false">
    <svg viewBox="0 0 120 120" aria-hidden="true">
        <path class="eye-line" stroke-linecap="round" ></path>
        <circle cx="60" cy="60" r="20"></circle>
    </svg>
  </div>
  `;
}
