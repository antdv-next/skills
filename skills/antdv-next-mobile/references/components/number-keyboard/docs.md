---
title: NumberKeyboard
description: A virtual numeric keyboard for entering amounts, passwords, verification codes, ID numbers, etc.
---

## When To Use

- When a payment password or a verification code must be entered securely without bringing up the system keyboard.
- When you need custom keys (decimal point, `X`, `00`) or want to turn the "Done" button into the primary action (such as "Pay").

The keyboard slides in from the bottom, with **no mask, no page scroll lock and no focus stealing**. It is only responsible for producing key events and maintaining the `v-model:value` string; the "input" that displays the entered content is implemented by the application (for example with a read-only `Input` or password cells). It is a mobile-only component with no counterpart on PC.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Keyboard with a sidebar | demo/custom.md |
| Extra keys | demo/extra-key.md |
| Title and random order | demo/title.md |
| Password input | demo/password.md |
| Inline display | demo/inline.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| open (v-model) | Whether the keyboard is shown | `boolean` | `false` (`true` when inline) |
| defaultOpen | Whether shown by default (uncontrolled) | `boolean` | - |
| value (v-model) | The currently entered string | `string` | - |
| defaultValue | Default value (uncontrolled) | `string` | `''` |
| maxlength | Maximum length of the input; keys no longer take effect once it is exceeded | `number` | - |
| title | Keyboard title; the same-named slot takes precedence | `VueNode` | - |
| theme | Keyboard style. `custom` adds a delete key and a large done button on the right | `'default' \| 'custom'` | `'default'` |
| extraKey | Content of the extra keys. The default style supports 1 (bottom left), the `custom` style supports up to 2 | `string \| string[]` | - |
| randomKeyOrder | Shuffle the order of the number keys every time it opens, for security scenarios | `boolean` | `false` |
| showDeleteKey | Whether to show the delete key | `boolean` | `true` |
| closeButtonText | Text of the close button on the right of the title bar; not shown when empty (default style) | `string` | - |
| confirmText | Text of the done button on the right (`custom` style) | `string` | `'Done'` |
| hideOnClickOutside | Whether to hide when the area outside the keyboard is tapped | `boolean` | `true` |
| safeArea | Whether to enable bottom safe area adaptation | `boolean` | `true` |
| poppable | Whether it is fixed at the bottom of the screen. Embedded in the page when `false` | `boolean` | `true` |
| getContainer | The mount node in fixed mode, `false` renders in place | `string \| HTMLElement \| (() => HTMLElement) \| false` | `document.body` |
| zIndex | The `z-index` | `number` | Auto increment |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'header' \| 'body' \| 'key', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'header' \| 'body' \| 'key', CSSProperties>` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| input | Triggered when a number key or an extra key is tapped | `(key: string) => void` |
| delete | Triggered when the delete key is tapped; long press triggers it continuously | `() => void` |
| confirm | Triggered when the done button is tapped (`custom` style) | `() => void` |
| close | Triggered when the close button or the done button is tapped | `() => void` |
| blur | Triggered when the area outside the keyboard is tapped | `() => void` |
| openChange | Triggered when the keyboard shows / hides | `(open: boolean) => void` |
| update:value | `v-model:value` update | `(value: string) => void` |

### Slots

| Slot | Description |
| --- | --- |
| title | Custom title |
| delete | Custom content of the delete key |
| extraKey | Custom content of the bottom-left key (default style) |

## Design Token

Customize through `theme.components.NumberKeyboard` of `ConfigProvider`, or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-number-keyboard-bg` | Keyboard background color | `var(--am-color-bg-layout)` |
| `--am-number-keyboard-key-height` | Key height | `48px` |
| `--am-number-keyboard-key-font-size` | Key font size | `24px` |
| `--am-number-keyboard-key-bg` | Key background color | `var(--am-color-bg-container)` |
| `--am-number-keyboard-key-active-bg` | Color overlaid on a key when pressed | `var(--am-color-fill)` |
| `--am-number-keyboard-key-radius` | Key border radius | `var(--am-border-radius)` |
| `--am-number-keyboard-gap` | Gap between keys | `6px` |
| `--am-number-keyboard-padding` | Keyboard padding | `6px` |
| `--am-number-keyboard-title-height` | Title bar height | `40px` |
| `--am-number-keyboard-title-color` | Title color | `var(--am-color-text-secondary)` |
| `--am-number-keyboard-title-font-size` | Title font size | `var(--am-font-size-lg)` |
| `--am-number-keyboard-close-color` | Close button color | `var(--am-color-primary)` |
| `--am-number-keyboard-confirm-bg` | Done button background color | `var(--am-color-primary)` |
| `--am-number-keyboard-confirm-active-bg` | Done button background color when pressed | `var(--am-color-primary-active)` |
| `--am-number-keyboard-confirm-color` | Done button text color | `var(--am-color-text-light-solid)` |
| `--am-number-keyboard-confirm-font-size` | Done button font size | `var(--am-font-size-lg)` |
| `--am-number-keyboard-z-index` | Base `z-index` in fixed mode | `var(--am-z-index-popup-base)` |
