---
title: Switch
description: Used to toggle between two states.
---

## When To Use

- If you need to represent the switching between two states or on-off state.
- The difference between `Switch` and `Checkbox` is that `Switch` triggers a state change directly when you toggle it, while `Checkbox` is generally used for state marking, which should work in conjunction with a submit operation.

The API is aligned with `Switch` of Antdv Next: `v-model:checked`, `checkedChildren` / `unCheckedChildren`, `checkedValue` / `unCheckedValue`, `loading`. Mobile additionally provides the asynchronous `beforeChange` interceptor.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Disabled | demo/disabled.md |
| Text and icon | demo/children.md |
| Two sizes | demo/size.md |
| Loading | demo/loading.md |
| Async control | demo/before-change.md |
| Custom checked values | demo/checked-value.md |
| Custom colors | demo/token.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| checked (v-model) | Whether currently checked | `boolean \| string \| number \| object` | - |
| defaultChecked | Whether initially checked | `boolean \| string \| number \| object` | `false` |
| value (v-model) | Alias of `checked` | `boolean \| string \| number \| object` | - |
| defaultValue | Alias of `defaultChecked` | `boolean \| string \| number \| object` | - |
| checkedValue | The value when checked | `boolean \| string \| number \| object` | `true` |
| unCheckedValue | The value when unchecked | `boolean \| string \| number \| object` | `false` |
| checkedChildren | The content shown when checked; the same-named slot takes precedence | `VueNode` | - |
| unCheckedChildren | The content shown when unchecked; the same-named slot takes precedence | `VueNode` | - |
| disabled | Whether disabled | `boolean` | `false` |
| loading | Loading state of the switch; it cannot be operated meanwhile | `boolean` | `false` |
| size | The size of the switch | `'default' \| 'small'` | `'default'` |
| beforeChange | Interceptor called before toggling, the argument is the value it is about to become; returning `false`, resolving `false` or rejecting cancels the toggle, and the switch enters the loading state automatically while the Promise is pending | `(checked) => boolean \| void \| Promise<boolean \| void>` | - |
| autoFocus | Get focus automatically | `boolean` | `false` |
| id | The `id` of the root node, defaults to the field id inside `Form.Item` | `string` | - |
| title | Native `title` | `string` | - |
| tabIndex | Native `tabindex` | `number` | - |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'content' \| 'indicator', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'content' \| 'indicator', CSSProperties>` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the state changes | `(checked, event: MouseEvent) => void` |
| click | Triggered when clicked (not when disabled or loading), before `beforeChange` | `(checked, event: MouseEvent) => void` |
| update:checked | Triggered when the state changes, used by `v-model:checked` | `(checked) => void` |
| update:value | Triggered when the state changes, used by `v-model:value` | `(checked) => void` |
| focus | Triggered when getting focus | `(event: FocusEvent) => void` |
| blur | Triggered when losing focus | `(event: FocusEvent) => void` |

### Slots

| Slot | Description |
| --- | --- |
| checkedChildren | The content shown when checked, takes precedence over the same-named prop |
| unCheckedChildren | The content shown when unchecked, takes precedence over the same-named prop |

### Methods

| Name | Description | Type |
| --- | --- | --- |
| focus | Get focus | `() => void` |
| blur | Remove focus | `() => void` |
| nativeElement | The root element | `HTMLButtonElement` |

## Design Token

Customize through `theme.components.Switch` of `ConfigProvider`, or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-switch-height` | Switch height | `30px` (small: `22px`) |
| `--am-switch-min-width` | Minimum width of the switch | `50px` (small: `36px`) |
| `--am-switch-handle-size` | Handle size | `26px` (small: `18px`) |
| `--am-switch-padding` | Gap between the handle and the track | `2px` |
| `--am-switch-font-size` | Font size of the content | `var(--am-font-size-sm)` |
| `--am-switch-color` | Background color when checked | `var(--am-color-primary)` |
| `--am-switch-color-active` | Background color when checked and pressed | `var(--am-color-primary-active)` |
| `--am-switch-bg` | Background color when unchecked | `var(--am-color-text-quaternary)` |
| `--am-switch-bg-active` | Background color when unchecked and pressed | `var(--am-color-text-tertiary)` |
| `--am-switch-handle-bg` | Handle background color | `var(--am-color-white)` |
| `--am-switch-duration` | Animation duration | `var(--am-motion-duration-mid)` |

## Differences from PC

- Adds `beforeChange` for synchronous / asynchronous confirmation before toggling; the loading state is shown automatically while waiting.
- The default size is larger (30px high), and the handle stretches when pressed like the native iOS switch; there is no hover state or wave effect.
- Adds the `focus` and `blur` events; the second argument of `change` / `click` is only a `MouseEvent` (keyboard operations are dispatched as `click` events too).
- `classes` / `styles` only support the object form, not the function form.
