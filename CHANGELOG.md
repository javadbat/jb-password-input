# Changelog

## [3.0.0] - 2026-09-03

### Changed

- Standardized private DOM event handlers on the `#on<Target><Event>()` naming convention.
- Breaking: updated inherited input styling parts to use `control`.
- Breaking: renamed React keyboard event props to the React convention: `onBeforeInput`, `onKeyDown`, and `onKeyUp`; old prop names are removed.

## [2.4.0] - 2026-09-01

### Changed

- Made custom-element module evaluation SSR-safe by extending `JBBaseComponent` where needed and registering elements through the shared `defineWebComponent()` helper; raised the minimum `jb-core` version to `0.35.0`.
- Updated component color defaults to use the shared semantic content and surface tokens.
- Updated the React wrapper so an omitted `value` no longer writes an empty live value, allowing the inherited `initialValue` behavior to initialize the component; explicit `null` still clears the live value.

## [2.2.0] - 2026-07-19

### Changed

- The password visibility trigger now uses a native button with visible keyboard focus and follows the input's disabled state.
- Added the React `initialValue` prop and forwarded `value` and `initialValue` directly as React 19 custom-element properties.
- Breaking: renamed `--jb-password-input-active-eye-color` to `--jb-password-input-eye-color-active`.
