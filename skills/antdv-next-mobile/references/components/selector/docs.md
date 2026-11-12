---
title: Selector
description: Single or multiple selection among a flat set of options.
---

## When To Use

- When there are not many options (usually no more than 10) and you want to lay them all out and finish the selection in one step.
- As a single / multiple selection control in a form, replacing `Radio.Group` and `Checkbox.Group` for a larger tap area.
- Condition selection in a filter panel.

`Selector` is a mobile-only component. Its `value` is always an array, and it can be placed directly inside `Form.Item`.

## Examples

| Demo | Path |
| --- | --- |
| Single selection | demo/basic.md |
| Multiple selection | demo/multiple.md |
| Multi-column layout | demo/columns.md |
| Option description | demo/description.md |
| Disabled | demo/disabled.md |
| Hide the check mark | demo/check-mark.md |
| Custom field names and slots | demo/field-names.md |
| Component tokens | demo/style-class.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| options | Options | [SelectorOption](#selectoroption)[] | `[]` |
| value | Selected items, supports `v-model:value` | `(string \| number)[]` | - |
| defaultValue | Items selected by default | `(string \| number)[]` | `[]` |
| multiple | Whether multiple selection is allowed | `boolean` | `false` |
| columns | Number of columns, options are laid out with equal width when set; by default they wrap according to the content width | `number` | - |
| showCheckMark | Whether to show the check mark at the bottom right corner of selected items | `boolean` | `true` |
| disabled | Whether all options are disabled | `boolean` | `false` |
| fieldNames | Customize the field names of `label`, `description`, `value` and `disabled` in `options` | `{ label?: string, description?: string, value?: string, disabled?: string }` | - |
| id | The id of the root element, set automatically inside `Form.Item` | `string` | - |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic class names | `Record<'root' \| 'item' \| 'label' \| 'description', string>` | - |
| styles | Semantic styles | `Record<'root' \| 'item' \| 'label' \| 'description', CSSProperties>` | - |

### SelectorOption

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| label | Option text | `VueNode` | - |
| description | Option description | `VueNode` | - |
| value | Value of the option | `string \| number` | - |
| disabled | Whether the option is disabled | `boolean` | `false` |

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the selected items change, `extra.items` are the selected original options | `(value: (string \| number)[], extra: { items: SelectorOption[] }) => void` |
| update:value | `v-model:value` update | `(value: (string \| number)[]) => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| label | Customize the option text, takes precedence over `option.label` | `{ option, index, checked, disabled }` |
| description | Customize the option description, takes precedence over `option.description` | `{ option, index, checked, disabled }` |
| checkMark | Customize the content of the check mark | `{ option, index, checked, disabled }` |

## Design Token

Customize through `theme.components.Selector` of `ConfigProvider`, or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-selector-gap` | Gap between options | `var(--am-margin-xs)` |
| `--am-selector-padding` | Option padding | `var(--am-padding-xs) var(--am-padding)` |
| `--am-selector-min-height` | Minimum height of options | `var(--am-control-height)` |
| `--am-selector-border-radius` | Option border radius | `var(--am-border-radius-sm)` |
| `--am-selector-font-size` | Font size | `var(--am-font-size)` |
| `--am-selector-color` | Text color | `var(--am-color-text)` |
| `--am-selector-bg` | Option background color | `var(--am-color-fill-tertiary)` |
| `--am-selector-active-color` | Color of the selected text and check mark | `var(--am-color-primary)` |
| `--am-selector-active-bg` | Background color when selected | `var(--am-color-primary-bg)` |
| `--am-selector-check-mark-size` | Size of the check mark | `18px` |

## Differences from PC

- There is no counterpart on PC. Functionally it is close to the flat selection form of `Checkbox.Group` / `Radio.Group` / `Tag.CheckableTagGroup`.
- Prop names follow the conventions of Antdv Next: `options`, `value` / `v-model:value`, `defaultValue`, `fieldNames`, `disabled`.
- `value` is an array in both single and multiple mode; in single mode, tapping the selected option again deselects it (resulting in `[]`). When a selection is required, use it together with the `required` rule of `Form.Item`.
