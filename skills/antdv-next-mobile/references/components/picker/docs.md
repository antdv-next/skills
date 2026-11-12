---
title: Picker
description: Select one item, or several related items, from a wheel that pops up from the bottom.
---

## When To Use

- To select from one group of data (or several linked groups), when there are about 5 ~ 30 options.
- Use [Selector](../selector/docs.md) when there are few options that should be laid out flat, and [Select](../select/docs.md) when there are many options or search is needed.

Picker is a **form field**: by default it renders an input-like trigger; tapping it pops up the wheel from the bottom, tapping "OK" commits the value, and tapping "Cancel" or the mask discards it. Use [PickerView](../picker-view/docs.md) when only the wheel itself is needed.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Multiple columns and formatting | demo/format.md |
| Cascading selection | demo/cascade.md |
| Large data / virtual scrolling | demo/virtual.md |
| Custom trigger | demo/custom-trigger.md |
| Variant, size and status | demo/variant.md |
| In a form | demo/form.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| columns | Column data; pass a function for cascading, see [PickerView](../picker-view/docs.md) | `PickerOption[][] \| ((value: PickerValue[]) => PickerOption[][])` | - |
| fieldNames | Customize the field names of an option | `{ label?: string, value?: string, disabled?: string }` | - |
| value (v-model) | The committed value, one item per column | `PickerValue[]` | - |
| defaultValue | Default value (uncontrolled) | `PickerValue[]` | - |
| open (v-model) | Whether the popup is open | `boolean` | - |
| defaultOpen | Whether the popup is open by default | `boolean` | `false` |
| placeholder | Placeholder text | `string` | `'Please select'` |
| format | Customize the text shown in the trigger | `(items: PickerOption[]) => string` | The labels of the columns joined with ` / ` |
| title | Popup title. The same-named slot takes precedence | `VueNode` | - |
| okText | Text of the confirm button | `string` | `'OK'` |
| cancelText | Text of the cancel button | `string` | `'Cancel'` |
| disabled | Whether it is disabled | `boolean` | `false` |
| allowClear | Show a clear icon when there is a value | `boolean` | `false` |
| status | Validation status | `'error' \| 'warning'` | - |
| variant | Variant, `borderless` by default inside a form | `'outlined' \| 'filled' \| 'borderless' \| 'underlined'` | `'outlined'` |
| size | Size of the trigger | `'small' \| 'middle' \| 'large'` | `'middle'` |
| trigger | Whether to render the built-in trigger; when `false`, the popup is controlled only with `v-model:open` | `boolean` | `true` |
| suffixIcon | Suffix icon of the trigger. The same-named slot takes precedence; `null` hides it | `VueNode` | Arrow icon |
| loading | Loading state; the value cannot be confirmed while loading | `boolean` | `false` |
| itemHeight | Height of an option (px) | `number` | `40` |
| visibleItemCount | The number of visible options | `number` | `5` |
| virtual | Virtual scrolling: each column only renders the options near the visible area, so tens of thousands of options mount only a few dozen nodes; renders all options when `false` | `boolean` | `true` |
| optionRender | Custom option content. The `option` slot takes precedence | `VueNode \| ((info: PickerOptionRenderInfo) => VueNode)` | - |
| getContainer | The mount node of the popup; `false` renders in place | `string \| HTMLElement \| (() => HTMLElement) \| false` | `document.body` |
| zIndex | The `z-index` of the popup | `number` | - |
| maskClosable | Whether clicking the mask closes the popup (treated as cancel) | `boolean` | `true` |
| destroyOnHidden | Destroy the popup content when closed | `boolean` | `false` |
| id | The id of the trigger, defaults to the field id inside a form | `string` | - |
| rootClass | Class name of the trigger and the popup root | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'content' \| 'suffix' \| 'popup', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'content' \| 'suffix' \| 'popup', CSSProperties>` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the committed value changes (confirm or clear) | `(value: PickerValue[], info: { items: PickerOption[] }) => void` |
| confirm | Triggered when the confirm button is clicked | `(value: PickerValue[], info: { items: PickerOption[] }) => void` |
| cancel | Triggered when the cancel button or the mask is clicked | `() => void` |
| select | Triggered when the wheel settles on a new option; the value is not committed yet | `(value: PickerValue[], info: { items: PickerOption[], columnIndex: number }) => void` |
| openChange | Triggered when the popup opens / closes | `(open: boolean) => void` |
| clear | Triggered when the clear icon is clicked | `() => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Custom trigger, replaces the built-in input | `{ open, value, label, items, disabled, toggle }` |
| title | Popup title | - |
| suffixIcon | Suffix icon of the trigger | - |
| option | Custom option content | `{ option, index, columnIndex, selected }` |
| header | Content between the title bar and the wheel | - |
| footer | Content below the wheel | - |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| toggle | Toggle the popup; the target state can be passed | `(open?: boolean) => void` |

## Design Token

The trigger and the popup title bar are shared by all selection form fields (Picker, DatePicker, TimePicker, Cascader, Select, Calendar). For the wheel tokens, see [PickerView](../picker-view/docs.md).

| Token | Description | Default |
| --- | --- | --- |
| `--am-picker-trigger-height` | Trigger height | `var(--am-control-height)` |
| `--am-picker-trigger-font-size` | Trigger font size | `var(--am-font-size-lg)` |
| `--am-picker-trigger-padding-inline` | Horizontal padding of the trigger | `var(--am-padding-sm)` |
| `--am-picker-trigger-border-radius` | Border radius of the trigger | `var(--am-border-radius)` |
| `--am-picker-trigger-color` | Text color | `var(--am-color-text)` |
| `--am-picker-trigger-placeholder-color` | Placeholder color | `var(--am-color-text-placeholder)` |
| `--am-picker-trigger-icon-color` | Suffix icon color | `var(--am-color-icon)` |
| `--am-picker-trigger-bg` | Background color | `var(--am-color-bg-container)` |
| `--am-picker-trigger-border-color` | Border color | `var(--am-color-border)` |
| `--am-picker-trigger-active-border-color` | Border color when open | `var(--am-color-primary)` |
| `--am-picker-popup-header-height` | Height of the popup title bar | `48px` |
| `--am-picker-popup-title-font-size` | Font size of the popup title | `var(--am-font-size-lg)` |
| `--am-picker-popup-button-font-size` | Font size of the confirm / cancel buttons | `var(--am-font-size-lg)` |
| `--am-picker-popup-confirm-color` | Color of the confirm button | `var(--am-color-primary)` |
| `--am-picker-popup-cancel-color` | Color of the cancel button | `var(--am-color-text-secondary)` |
