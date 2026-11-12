---
title: Select
description: Select one or more items from an option list in a bottom popup.
---

## When To Use

- To select from a flat set of options, when there are many options, the text is long, or search and descriptions are needed.
- When there are only a few options (2 ~ 6) and you want to show them directly, use [Selector](../selector/docs.md) or [Radio](../radio/docs.md); when a wheel experience is needed, use [Picker](../picker/docs.md).

The API is aligned with `Select` of Antdv Next: `options`, `fieldNames`, `value`, `mode="multiple"`, `labelInValue`, `showSearch`, `filterOption`, `optionRender`, `labelRender`, `maxCount`, `maxTagCount`. On mobile, a list in a bottom popup replaces the dropdown menu: in single mode a tap commits and closes, in multiple mode it is a checklist committed by tapping "OK".

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Multiple selection | demo/multiple.md |
| Search | demo/search.md |
| Option description and custom rendering | demo/option.md |
| Groups and field names | demo/group.md |
| Large data / virtual scrolling | demo/virtual.md |
| Variants and status | demo/variant.md |
| Custom trigger and form | demo/custom-trigger.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| options | Option data. Items with an `options` field are rendered as groups | `SelectOption[]` | - |
| fieldNames | Customize field names | `{ label?: string, value?: string, options?: string }` | `{ label: 'label', value: 'value', options: 'options' }` |
| value (v-model) | The committed value, an array in multiple mode | `string \| number \| (string \| number)[] \| LabeledValue \| LabeledValue[] \| null` | - |
| defaultValue | Default value (uncontrolled) | Same as `value` | - |
| mode | Set to `multiple` to enable multiple selection: checklist + confirm button | `'multiple'` | - |
| labelInValue | Use `{ label, value }` as the value instead of the plain `value` | `boolean` | `false` |
| showSearch | Show a search box at the top of the popup | `boolean \| { placeholder?: string, filterOption?: boolean \| Function, autoFocus?: boolean }` | `false` |
| filterOption | Whether to filter options by the input. `false` disables local filtering (for remote search); a function customizes the filter logic | `boolean \| ((input: string, option: SelectOption) => boolean)` | `true` (matches label and description) |
| optionRender | Customize the option content, the `option` slot takes precedence | `(info: { option, index, selected }) => VueNode` | - |
| labelRender | Customize how selected items are displayed in the trigger, the same-named slot takes precedence | `(item: { label, value }) => VueNode` | - |
| notFoundContent | Content shown when there are no options, the same-named slot takes precedence | `VueNode` | `'No data'` |
| maxCount | Maximum number of selectable items in multiple mode, the remaining options are disabled once it is reached | `number` | - |
| maxTagCount | Maximum number of selected items shown in the trigger in multiple mode | `number` | - |
| maxTagPlaceholder | Placeholder for the selected items hidden by `maxTagCount` | `VueNode \| ((omitted: LabeledValue[]) => VueNode)` | `+N...` |
| loading | Loading state, the list shows a loading icon | `boolean` | `false` |
| virtual | Virtual scrolling: the option list is rendered through [VirtualList](../virtual-list/docs.md) and only mounts options near the visible area; renders all options when `false` | `boolean` | `true` |
| listHeight | Maximum height of the option list in the popup | `number \| string` | `360` (`--am-select-list-max-height`) |
| listItemHeight | Option height (px): used as the minimum height of options and the estimated height before measuring. Options are rendered with a fixed height when there are no descriptions, groups or custom rendering | `number` | `48` |
| open (v-model) | Whether the popup is open | `boolean` | - |
| defaultOpen | Whether the popup is open by default | `boolean` | `false` |
| placeholder | Placeholder text | `string` | `'Please select'` |
| title | Popup title, the same-named slot takes precedence | `VueNode` | - |
| okText | Text of the confirm button (shown in multiple mode) | `string` | `'OK'` |
| cancelText | Text of the cancel button | `string` | `'Cancel'` |
| disabled | Whether the component is disabled | `boolean` | `false` |
| allowClear | Show a clear icon when there is a value | `boolean` | `false` |
| status | Validation status | `'error' \| 'warning'` | - |
| variant | Variant, defaults to `borderless` inside a form | `'outlined' \| 'filled' \| 'borderless' \| 'underlined'` | `'outlined'` |
| size | Size of the trigger | `'small' \| 'middle' \| 'large'` | `'middle'` |
| trigger | Whether to render the built-in trigger | `boolean` | `true` |
| suffixIcon | Suffix icon of the trigger, the same-named slot takes precedence, `null` hides it | `VueNode` | Arrow icon |
| getContainer | Mount node of the popup, `false` renders in place | `string \| HTMLElement \| (() => HTMLElement) \| false` | `document.body` |
| zIndex | z-index of the popup | `number` | - |
| maskClosable | Whether clicking the mask closes the popup (treated as cancel) | `boolean` | `true` |
| destroyOnHidden | Destroy the popup content when closed | `boolean` | `false` |
| id | The id of the trigger, defaults to the field id inside a form | `string` | - |
| rootClass | Class name of the root elements of the trigger and the popup | `string` | - |
| classes | Semantic class names | `Record<'root' \| 'content' \| 'suffix' \| 'popup', string>` | - |
| styles | Semantic styles | `Record<'root' \| 'content' \| 'suffix' \| 'popup', CSSProperties>` | - |

### SelectOption

| Property | Description | Type |
| --- | --- | --- |
| label | Option text | `string \| number` |
| value | Option value | `string \| number` |
| disabled | Whether the option is disabled | `boolean` |
| description | Description shown below the text (mobile only) | `string` |
| options | When set, the item is rendered as a group, and the value is the options in the group | `SelectOption[]` |

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the committed value changes | `(value, option: SelectOption \| SelectOption[]) => void` |
| select | Triggered when an option is selected (checked but not yet committed in multiple mode) | `(value: string \| number, option: SelectOption) => void` |
| deselect | Triggered when an option is unchecked in multiple mode (not yet committed) | `(value: string \| number, option: SelectOption) => void` |
| search | Triggered when the search box content changes, also triggered once with an empty string when the popup closes | `(value: string) => void` |
| confirm | Triggered when the selection is completed (tapping an option in single mode, tapping OK in multiple mode) | `(value) => void` |
| cancel | Triggered when the cancel button or the mask is clicked | `() => void` |
| openChange | Triggered when the popup opens / closes | `(open: boolean) => void` |
| clear | Triggered when the clear icon is clicked | `() => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Custom trigger, replaces the built-in input box | `{ open, value, label, disabled, toggle }` |
| option | Customize the option content | `{ option, index, selected }` |
| labelRender | Customize how selected items are displayed in the trigger | `{ label, value }` |
| notFoundContent | Content shown when there are no options | - |
| title | Popup title | - |
| suffixIcon | Suffix icon of the trigger | - |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| toggle | Toggle the popup, the target state can be passed in | `(open?: boolean) => void` |

## Design Token

For the trigger and popup variables, see [Picker](../picker/docs.md). The variables below are declared on the popup content `.am-select-panel`.

| Token | Description | Default |
| --- | --- | --- |
| `--am-select-list-max-height` | Maximum height of the list | `360px` |
| `--am-select-list-min-height` | Minimum height of the list | `160px` |
| `--am-select-font-size` | Option font size | `var(--am-font-size-lg)` |
| `--am-select-option-height` | Minimum height of options | `48px` |
| `--am-select-option-padding-inline` | Horizontal padding of options | `var(--am-padding)` |
| `--am-select-active-color` | Color of the selected option | `var(--am-color-primary)` |
| `--am-select-description-color` | Description text color | `var(--am-color-text-tertiary)` |
| `--am-select-disabled-color` | Text color of disabled options | `var(--am-color-text-disabled)` |
| `--am-select-search-bg` | Background color of the search box | `var(--am-color-fill-tertiary)` |
| `--am-select-search-height` | Height of the search box | `36px` |
| `--am-select-check-size` | Size of the checkbox in multiple mode | `20px` |

## Differences from PC

- A list in a bottom popup replaces the dropdown menu; the search box is at the top of the popup instead of inside the trigger.
- In multiple mode, options are checked inside the popup and committed only after tapping "OK"; `select` / `deselect` are triggered on check, and `change` is triggered on commit. The trigger joins the selected items as text (`A, B +2...`) and has no Tag form, so `tagRender` and `maxTagTextLength` are not supported.
- APIs such as `mode="tags"`, `tokenSeparators`, `popupRender`, `placement`, `popupMatchSelectWidth`, `optionFilterProp`, `optionLabelProp`, `defaultActiveFirstOption` and the `Select.Option` / `Select.OptGroup` child component syntax (use `options` instead) are not supported.
- `virtual`, `listHeight` and `listItemHeight` have the same names as on PC: `listHeight` defaults to `360` (`256` on PC), and `listItemHeight` defaults to `48` (`24` on PC) and also serves as the minimum height of options; the option height is measured from the actual content by default, so options with descriptions can be virtually scrolled as well. The selected option is scrolled to the middle of the list when the popup opens.
- The value after clearing is `null` in single mode (`undefined` on PC) and `[]` in multiple mode; `allowClear` defaults to `false` and only supports boolean values.
- Options gain a `description` field; the `title`, `okText`, `cancelText` and `trigger` props, the `confirm` and `cancel` events and the `default` (custom trigger) slot are added.
- The popup container uses `getContainer` (consistent with Popup), `getPopupContainer` is not supported.
- The semantic parts of `classes` / `styles` are `root`, `content`, `suffix` and `popup`.
