---
title: Radio
description: Used to select a single option from a set of options.
---

## When To Use

- Used to select a single state from multiple options.
- The difference from `Select` / `Picker` is that all options of `Radio` are visible by default, which makes it easy for users to compare and choose, so there should not be too many options.

The API is aligned with `Radio` of antdv-next: `v-model:value`, `options`, `optionType` and `buttonStyle` of `Radio.Group` and the parameter structure of the `change` event are kept the same. Mobile additionally provides a list form (`block`) and custom icons.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Disabled | demo/disabled.md |
| Configured with options | demo/options.md |
| Vertical layout | demo/vertical.md |
| List form | demo/block.md |
| Button style | demo/button.md |
| Button size and full width | demo/button-size.md |
| Custom icon | demo/icon.md |

## API

### Radio / Radio.Button Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| checked (v-model) | Whether it is checked | `boolean` | - |
| defaultChecked | Whether it is checked initially | `boolean` | `false` |
| disabled | Disabled state | `boolean` | `false` |
| value | The option value when used inside `Radio.Group` | `any` | - |
| block | Full-width display: text on the left, radio on the right (`Radio` only) | `boolean` | `false` |
| icon | Custom icon. The same-named slot takes precedence (`Radio` only) | `VueNode \| (ctx: { checked, disabled }) => VueNode` | - |
| name | The `name` of the native `input` | `string` | - |
| id | The `id` of the native `input`, defaults to the field id inside `Form.Item` | `string` | - |
| title | The native `title` | `string` | - |
| tabIndex | The native `tabindex` | `number` | - |
| autoFocus | Get focus automatically | `boolean` | `false` |
| required | The native `required` | `boolean` | `false` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'icon' \| 'label', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'icon' \| 'label', CSSProperties>` | - |

### Radio / Radio.Button Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when it is checked | `(e: RadioChangeEvent) => void` |
| update:checked | Triggered when it is checked, for `v-model:checked` | `(checked: boolean) => void` |
| click | Triggered on click | `(event: MouseEvent) => void` |
| focus | Triggered when it gets focus | `(event: FocusEvent) => void` |
| blur | Triggered when it loses focus | `(event: FocusEvent) => void` |

```ts
interface RadioChangeEvent {
  target: RadioProps & { checked: boolean }
  stopPropagation: () => void
  preventDefault: () => void
  nativeEvent: Event
}
```

### Radio Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Text content | - |
| icon | Custom icon, takes precedence over the `icon` prop (`Radio` only) | `{ checked: boolean, disabled: boolean }` |

### Radio Methods

| Name | Description | Type |
| --- | --- | --- |
| focus | Get focus | `() => void` |
| blur | Remove focus | `() => void` |
| input | The native `input` element | `HTMLInputElement` |
| nativeElement | The root element | `HTMLElement` |

### Radio.Group Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value (v-model) | The currently selected value | `any` | - |
| defaultValue | The value selected by default | `any` | - |
| options | Option configuration; the default slot is ignored when set | `(string \| number \| RadioOptionType)[]` | - |
| optionType | The display type of the options | `'default' \| 'button'` | `'default'` |
| buttonStyle | The style of the button type | `'outline' \| 'solid'` | `'outline'` |
| size | The size of the button type | `'small' \| 'middle' \| 'large'` | `'middle'` |
| disabled | Disable the whole group | `boolean` | `false` |
| name | The `name` of all `input` elements in the group, generated automatically by default | `string` | - |
| id | The `id` of the root element, defaults to the field id inside `Form.Item` | `string` | - |
| block | Fit the width to the parent; equal widths in button style, list form in default style | `boolean` | `false` |
| vertical | Vertical layout | `boolean` | `false` |
| orientation | Layout orientation; `vertical` takes precedence | `'horizontal' \| 'vertical'` | `'horizontal'` |
| labelRender | Custom option text. The same-named slot takes precedence | `(params: { item: RadioOptionType, index: number }) => VueNode` | - |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'item' \| 'itemIcon' \| 'itemLabel', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'item' \| 'itemIcon' \| 'itemLabel', CSSProperties>` | - |

```ts
interface RadioOptionType {
  label: VueNode
  value: any
  disabled?: boolean
  title?: string
  id?: string
  required?: boolean
  class?: string
  style?: CSSProperties
}
```

### Radio.Group Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the selection changes | `(e: RadioChangeEvent) => void` |
| update:value | Triggered when the selection changes, for `v-model:value` | `(value: any) => void` |

### Radio.Group Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Compose `Radio` / `Radio.Button` freely; works when `options` is not set | - |
| labelRender | Custom option text | `{ item: RadioOptionType, index: number }` |
| icon | Custom icon for all options in the group | `{ checked: boolean, disabled: boolean }` |

## Design Token

Customize through `theme.components.Radio` of `ConfigProvider`, or override the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-radio-size` | Radio size | `20px` |
| `--am-radio-dot-size` | Size of the checked dot | `8px` |
| `--am-radio-gap` | Gap between the radio and the text | `var(--am-padding-xs)` |
| `--am-radio-font-size` | Font size | `var(--am-font-size-lg)` |
| `--am-radio-color` | Checked color | `var(--am-color-primary)` |
| `--am-radio-border-color` | Border color when unchecked | `var(--am-color-border)` |
| `--am-radio-min-height` | Minimum height (touch target) | `32px` |
| `--am-radio-block-height` | Minimum row height of the `block` form | `48px` |
| `--am-radio-group-gap` | Horizontal gap between the options in a group | `var(--am-padding)` |
| `--am-radio-button-height` | Height of the button style | `var(--am-control-height)` |
| `--am-radio-button-font-size` | Font size of the button style | `var(--am-font-size-lg)` |
| `--am-radio-button-padding-inline` | Horizontal padding of the button style | `var(--am-padding)` |
| `--am-radio-button-border-radius` | Border radius of the button style | `var(--am-border-radius)` |
| `--am-radio-button-color` | Checked color of the button style | `var(--am-color-primary)` |
| `--am-radio-button-checked-bg` | Checked background of the `outline` style | `var(--am-color-primary-bg)` |

## Differences from PC

- Added `block` (list form for `Radio` and the default-style `Radio.Group`) and the `icon` prop / slot; `Radio.Group` gains an `icon` slot.
- The radio is larger (20px), the whole `label` row is the tap target, and the minimum height is 32px.
- A checked button of the `outline` style has a light background; press feedback uses `:active`, and there is no hover state or wave effect.
- The `mouseenter`, `mouseleave`, `keypress` and `keydown` events are not provided; switching with the arrow keys is handled by native `radio` inputs sharing the same name.
- `classes` / `styles` only support the object form, not the function form.
