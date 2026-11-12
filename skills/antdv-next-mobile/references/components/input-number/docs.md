---
title: InputNumber
description: Enter a number within a certain range by tapping buttons or with the keyboard. Rendered as a stepper by default on mobile.
---

## When To Use

When a standard numeric value is required, such as a product quantity, a number of people or an amount.

The API is aligned with `InputNumber` of Antdv Next. Mobile uses `mode="spinner"` by default (a stepper with the − / + buttons on both sides), supports long press to step continuously, and brings up the numeric keyboard.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Range and step | demo/range.md |
| Precision and formatting | demo/formatter.md |
| Sizes and variants | demo/size.md |
| Input mode and custom buttons | demo/mode.md |
| Status | demo/disabled.md |
| Use in a form | demo/form.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | The current value, supports `v-model:value`; `null` means empty | `number \| string \| null` | - |
| defaultValue | The initial value | `number \| string \| null` | - |
| min | The min value | `number \| string` | `-Infinity` |
| max | The max value | `number \| string` | `Infinity` |
| step | The number by which the value changes each time, can be a decimal | `number \| string` | `1` |
| precision | The precision of the value (number of decimal places) | `number` | - |
| mode | Display mode: `spinner` is a stepper with buttons on both sides, `input` is a full-width input | `'spinner' \| 'input'` | `'spinner'` |
| controls | Whether to show the +/- buttons; custom icons can also be set | `boolean \| { upIcon?: VueNode, downIcon?: VueNode }` | `true` |
| formatter | Specifies the format of the value presented in the input | `(value: number \| string, info: { userTyping: boolean, input: string }) => string` | - |
| parser | Specifies how to convert the output of `formatter` back to a number | `(displayValue: string) => number \| string` | - |
| stringMode | String value mode, `change` returns a string (keeps precision and trailing zeros) | `boolean` | `false` |
| changeOnBlur | Whether to commit (clamp to the range, format) the typed content on blur | `boolean` | `true` |
| keyboard | Whether to enable stepping with the keyboard up / down keys | `boolean` | `true` |
| longPress | Whether long-pressing a button steps continuously | `boolean` | `true` |
| disabled | Disabled | `boolean` | `false` |
| readOnly | Read only (can also be written as `readonly`) | `boolean` | `false` |
| prefix | Prefix; the same-named slot takes precedence | `VueNode` | - |
| suffix | Suffix; the same-named slot takes precedence | `VueNode` | - |
| placeholder | Placeholder text | `string` | - |
| status | Validation status | `'error' \| 'warning'` | - |
| size | Size | `'small' \| 'middle' \| 'large'` | `'middle'` |
| variant | Variant | `'outlined' \| 'filled' \| 'borderless' \| 'underlined'` | `'outlined'` (`'borderless'` inside a form) |
| inputmode | Type of the virtual keyboard; set it to `'text'` when negative numbers need to be entered | `string` | `'decimal'` |
| autofocus | Auto focus | `boolean` | `false` |
| name | Native `name` | `string` | - |
| id | The `id` of the native input, defaults to the field id inside `FormItem` | `string` | - |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'input' \| 'prefix' \| 'suffix' \| 'action', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'input' \| 'prefix' \| 'suffix' \| 'action', CSSProperties>` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| update:value | Triggered when the value changes | `(value: number \| string \| null) => void` |
| change | The callback triggered when the value changes | `(value: number \| string \| null) => void` |
| input | Triggered while typing, the argument is the raw text | `(text: string) => void` |
| step | Triggered when stepping by tapping a button or with the keyboard up / down keys | `(value: number \| string, info: { offset: number \| string, type: 'up' \| 'down', emitter: 'handler' \| 'keyboard' }) => void` |
| pressEnter | The callback triggered when Enter is pressed | `(event: KeyboardEvent) => void` |
| focus | Triggered when getting focus | `(event: FocusEvent) => void` |
| blur | Triggered when losing focus | `(event: FocusEvent) => void` |

### Slots

| Slot | Description |
| --- | --- |
| prefix | Prefix, takes precedence over the `prefix` prop |
| suffix | Suffix, takes precedence over the `suffix` prop |
| upIcon | Custom icon of the "plus" button, takes precedence over `controls.upIcon` |
| downIcon | Custom icon of the "minus" button, takes precedence over `controls.downIcon` |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| focus | Get focus | `(options?: FocusOptions) => void` |
| blur | Remove focus | `() => void` |
| input | The native `input` element | `HTMLInputElement` |
| nativeElement | The root element | `HTMLElement` |

## Design Token

Customize through `theme.components.InputNumber` of `ConfigProvider`, or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-input-number-height` | Height (also the width of the buttons) | `var(--am-control-height-sm)` |
| `--am-input-number-font-size` | Font size | `var(--am-font-size-lg)` |
| `--am-input-number-input-width` | Width of the input area in the stepper | `48px` |
| `--am-input-number-gap` | Gap between the buttons and the input area | `2px` |
| `--am-input-number-border-radius` | Border radius | `var(--am-border-radius-sm)` |
| `--am-input-number-color` | Text color | `var(--am-color-text)` |
| `--am-input-number-background` | Background color of the input area | `var(--am-color-bg-container)` |
| `--am-input-number-filled-background` | Background color of the input area in the `filled` / `borderless` variants | `var(--am-color-fill-tertiary)` |
| `--am-input-number-border-color` | Border color | `var(--am-color-border)` |
| `--am-input-number-active-border-color` | Border and caret color when focused | `var(--am-color-primary)` |
| `--am-input-number-action-color` | Icon color of the buttons | `var(--am-color-primary)` |
| `--am-input-number-action-background` | Background color of the buttons | `var(--am-color-fill-tertiary)` |
| `--am-input-number-action-active-background` | Background color of the buttons when pressed | `var(--am-color-fill)` |

## Differences from PC

- Defaults to `mode="spinner"` (PC defaults to `input`): the − / + buttons sit on both sides with a larger touch area, and long press steps continuously (`longPress`).
- `inputmode` defaults to `'decimal'` to bring up the numeric keyboard.
- `addonBefore` / `addonAfter`, `allowClear`, `changeOnWheel`, `type` and mouse events are not supported; the `emitter` of the `step` event has no `'wheel'`.
- `stringMode` is based on native number arithmetic and does not provide high-precision decimal support beyond the precision of `Number`.
- `classes` / `styles` only support the object form.
