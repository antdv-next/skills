---
title: Checkbox
description: Select multiple items from a set of options.
---

## When To Use

- Used for selecting multiple values from a set of options.
- Used alone, it can represent a switch between two states (such as "Agree to the terms"), similar to `Switch`. The difference is that toggling `Switch` triggers the state change directly, while `Checkbox` is generally used for marking a state and works together with a submit operation.

The API is aligned with `Checkbox` of antdv-next: `v-model:checked`, `v-model:value` / `options` of `Checkbox.Group`, and the params of the `change` event keep the same structure, so handlers written for PC can be reused as is. Mobile additionally provides a list form (`block`), a round shape (`shape`) and custom icons.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Disabled | demo/disabled.md |
| Checkbox group | demo/group.md |
| Check all | demo/check-all.md |
| List form | demo/block.md |
| Shape and custom icon | demo/shape-icon.md |
| Limit the number of selections | demo/max.md |
| Custom checked value | demo/checked-value.md |

## API

### Checkbox Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| checked (v-model) | Whether the checkbox is checked | `boolean \| string \| number \| object` | - |
| defaultChecked | Whether the checkbox is checked initially | `boolean \| string \| number \| object` | `false` |
| checkedValue | Value of `checked` when checked | `boolean \| string \| number \| object` | `true` |
| unCheckedValue | Value of `checked` when unchecked | `boolean \| string \| number \| object` | `false` |
| indeterminate | Indeterminate state, only controls the style and takes effect when unchecked | `boolean` | `false` |
| disabled | Disabled state | `boolean` | `false` |
| value | Option value when used inside `Checkbox.Group` | `any` | - |
| block | Full-width display: text on the left, check icon on the right | `boolean` | `false` |
| shape | Shape of the check icon | `'square' \| 'round'` | `'square'` |
| icon | Custom icon, the same-named slot takes precedence | `VueNode \| (ctx: { checked, indeterminate, disabled }) => VueNode` | - |
| name | `name` of the native `input` | `string` | - |
| id | `id` of the native `input`, defaults to the field id inside `Form.Item` | `string` | - |
| title | Native `title` | `string` | - |
| tabIndex | Native `tabindex` | `number` | - |
| autoFocus | Get focus automatically | `boolean` | `false` |
| required | Native `required` | `boolean` | `false` |
| skipGroup | Ignore the outer `Checkbox.Group` | `boolean` | `false` |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'icon' \| 'label', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'icon' \| 'label', CSSProperties>` | - |

### Checkbox Events

| Event | Description | Type |
| --- | --- | --- |
| change | Fired when the state changes | `(e: CheckboxChangeEvent) => void` |
| update:checked | Fired when the state changes, used by `v-model:checked` | `(checked: any) => void` |
| click | Fired on click | `(event: MouseEvent) => void` |
| focus | Fired when focused | `(event: FocusEvent) => void` |
| blur | Fired when focus is lost | `(event: FocusEvent) => void` |

```ts
interface CheckboxChangeEvent {
  target: CheckboxProps & { checked: boolean }
  stopPropagation: () => void
  preventDefault: () => void
  nativeEvent: Event
}
```

### Checkbox Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Text content | - |
| icon | Custom icon, takes precedence over the `icon` prop | `{ checked: boolean, indeterminate: boolean, disabled: boolean }` |

### Checkbox Methods

| Name | Description | Type |
| --- | --- | --- |
| focus | Get focus | `() => void` |
| blur | Remove focus | `() => void` |
| input | Native `input` element | `HTMLInputElement` |
| nativeElement | Root element | `HTMLElement` |

### Checkbox.Group Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value (v-model) | Values of the checked options | `any[]` | - |
| defaultValue | Values of the options checked by default | `any[]` | `[]` |
| options | Option configuration, the default slot is ignored once it is set | `(string \| number \| CheckboxOptionType)[]` | - |
| disabled | Disable the whole group | `boolean` | `false` |
| name | `name` of every `input` in the group | `string` | - |
| max | Maximum number of selections, the remaining options become unavailable once it is reached | `number` | - |
| block | List form, every option is displayed full-width | `boolean` | `false` |
| shape | Shape of the check icons in the group | `'square' \| 'round'` | `'square'` |
| labelRender | Customize the option text, the same-named slot takes precedence | `(params: { item: CheckboxOptionType, index: number }) => VueNode` | - |
| role | `role` of the root node | `string` | `'group'` |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'item' \| 'itemIcon' \| 'itemLabel', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'item' \| 'itemIcon' \| 'itemLabel', CSSProperties>` | - |

```ts
interface CheckboxOptionType {
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

### Checkbox.Group Events

| Event | Description | Type |
| --- | --- | --- |
| change | Fired when the value changes, values are sorted in option order | `(checkedValue: any[]) => void` |
| update:value | Fired when the value changes, used by `v-model:value` | `(checkedValue: any[]) => void` |

### Checkbox.Group Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Compose `Checkbox` freely, takes effect when `options` is not set | - |
| labelRender | Customize the option text | `{ item: CheckboxOptionType, index: number }` |
| icon | Customize the icon of every checkbox in the group | `{ checked: boolean, indeterminate: boolean, disabled: boolean }` |

## Design Token

Customize through `theme.components.Checkbox` of `ConfigProvider`, or override the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-checkbox-size` | Size of the check icon | `20px` |
| `--am-checkbox-gap` | Gap between the check icon and the text | `var(--am-padding-xs)` |
| `--am-checkbox-font-size` | Font size of the text | `var(--am-font-size-lg)` |
| `--am-checkbox-border-radius` | Border radius of the check icon | `var(--am-border-radius-sm)` |
| `--am-checkbox-color` | Checked color | `var(--am-color-primary)` |
| `--am-checkbox-border-color` | Border color when unchecked | `var(--am-color-border)` |
| `--am-checkbox-min-height` | Minimum height (touch target) | `32px` |
| `--am-checkbox-block-height` | Minimum row height of the `block` form | `48px` |
| `--am-checkbox-group-gap` | Horizontal gap between options in a group | `var(--am-padding)` |

## Differences from PC

- Adds the `block` (list form), `shape` (round check icon) and `icon` prop / slot. `Checkbox.Group` adds `max`, `block`, `shape` and the `icon` slot.
- The check icon is larger (20px), the whole `label` row is the touch target, and the minimum height is 32px.
- The `mouseenter`, `mouseleave`, `keypress` and `keydown` events are not provided, and there is no hover state or wave effect.
- `CheckboxOptionType` does not support `onChange`, listen to the `change` event of `Checkbox.Group` instead.
- `classes` / `styles` only support the object form, not the function form.
