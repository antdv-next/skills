---
title: Cascader
description: Select hierarchical data level by level in a bottom popup.
---

## When To Use

- When you need to select from a set of associated data, such as province / city / district, company hierarchy or product categories.
- When the hierarchy is fixed and each level has few options (two or three columns), you can also use the cascading columns of [Picker](../picker/docs.md).

The API is aligned with `Cascader` of antdv-next: `options`, `fieldNames`, `value` (an array of the value path), `changeOnSelect`, `loadData`, `displayRender`. On mobile, selection happens level by level with "tabs + option list" in a bottom popup; once a leaf node is selected, the value is committed and the popup closes automatically.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Change on select | demo/change-on-select.md |
| Load options lazily | demo/lazy.md |
| Large data / virtual scrolling | demo/virtual.md |
| Custom display and field names | demo/custom.md |
| Custom trigger and form | demo/custom-trigger.md |
| Inline view CascaderView | demo/view.md |

## API

### Cascader Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| options | The data source of the options | `CascaderOption[]` | - |
| fieldNames | Custom field names | `{ label?: string, value?: string, children?: string }` | `{ label: 'label', value: 'value', children: 'children' }` |
| value (v-model) | The committed value path | `(string \| number)[]` | - |
| defaultValue | Default value (uncontrolled) | `(string \| number)[]` | - |
| changeOnSelect | Allow selecting a parent option only. When enabled, the popup shows an "OK" button and the selection must be confirmed manually | `boolean` | `false` |
| loadData | Load options lazily: called when an option with `isLeaf: false` is selected, to set `children` on the target option (may return a Promise) | `(selectedOptions: CascaderOption[]) => void \| Promise<void>` | - |
| displayRender | Customize the content displayed in the trigger; the same-named slot takes precedence | `(labels: string[], selectedOptions: CascaderOption[]) => VueNode` | `labels => labels.join(' / ')` |
| optionRender | Customize the option content; the `option` slot takes precedence | `(info: { option, level, selected }) => VueNode` | - |
| notFoundContent | Content shown when a level has no options; the same-named slot takes precedence | `VueNode` | `'No data'` |
| virtual | Virtual scrolling: the option list of each level is rendered through [VirtualList](../virtual-list/docs.md) and only mounts the options near the visible area; `false` renders all options | `boolean` | `true` |
| listHeight | Height of the option list | `number \| string` | View height (`--am-cascader-view-height`, `360px`) minus the tabs |
| listItemHeight | Option height (px): used as the minimum height of an option and the estimated height before measuring. Options are rendered with a fixed height when there is no custom rendering | `number` | `48` |
| open (v-model) | Whether the popup is open | `boolean` | - |
| defaultOpen | Whether the popup is open by default | `boolean` | `false` |
| placeholder | Placeholder text | `string` | `'Please select'` |
| title | Popup title; the same-named slot takes precedence | `VueNode` | - |
| okText | Text of the confirm button (shown with `changeOnSelect`) | `string` | `'OK'` |
| cancelText | Text of the cancel button | `string` | `'Cancel'` |
| disabled | Whether disabled | `boolean` | `false` |
| allowClear | Show a clear icon when there is a value | `boolean` | `false` |
| status | Validation status | `'error' \| 'warning'` | - |
| variant | Variant, defaults to `borderless` inside a form | `'outlined' \| 'filled' \| 'borderless' \| 'underlined'` | `'outlined'` |
| size | Size of the trigger | `'small' \| 'middle' \| 'large'` | `'middle'` |
| trigger | Whether to render the built-in trigger | `boolean` | `true` |
| suffixIcon | Suffix icon of the trigger; the same-named slot takes precedence, `null` hides it | `VueNode` | Arrow icon |
| getContainer | The node the popup is mounted to, `false` renders in place | `string \| HTMLElement \| (() => HTMLElement) \| false` | `document.body` |
| zIndex | The `z-index` of the popup | `number` | - |
| maskClosable | Whether to close when the mask is tapped (treated as cancel) | `boolean` | `true` |
| destroyOnHidden | Destroy the popup content when closed | `boolean` | `false` |
| id | The id of the trigger, defaults to the field id inside a form | `string` | - |
| rootClass | Class name of the root nodes of the trigger and the popup | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'content' \| 'suffix' \| 'popup', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'content' \| 'suffix' \| 'popup', CSSProperties>` | - |

### CascaderOption

| Property | Description | Type |
| --- | --- | --- |
| label | Option text | `string \| number` |
| value | Option value | `string \| number` |
| disabled | Whether disabled | `boolean` |
| children | Child options | `CascaderOption[]` |
| isLeaf | Whether it is a leaf node. Used with `loadData`; `false` means the child options need to be loaded lazily | `boolean` |

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the committed value changes | `(value: (string \| number)[], selectedOptions: CascaderOption[]) => void` |
| confirm | Triggered when the selection is finished (a leaf node is selected or OK is tapped) | `(value: (string \| number)[], selectedOptions: CascaderOption[]) => void` |
| cancel | Triggered when the cancel button or the mask is tapped | `() => void` |
| select | Triggered when an option of any level is tapped; the value is not committed yet | `(option: CascaderOption, level: number) => void` |
| tabChange | Triggered when the current level (tab) changes | `(index: number) => void` |
| openChange | Triggered when the popup opens / closes | `(open: boolean) => void` |
| clear | Triggered when the clear icon is tapped | `() => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Custom trigger, replaces the built-in field | `{ open, value, label, selectedOptions, disabled, toggle }` |
| displayRender | Customize the content displayed in the trigger | `{ labels, selectedOptions }` |
| option | Customize the option content | `{ option, level, selected }` |
| notFoundContent | Content shown when a level has no options | - |
| title | Popup title | - |
| suffixIcon | Suffix icon of the trigger | - |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| toggle | Toggle the popup; the target state can be passed in | `(open?: boolean) => void` |

### CascaderView

The cascading view without the trigger and the popup, also available as `Cascader.View`.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| options / fieldNames / changeOnSelect / loadData / optionRender / notFoundContent / virtual / listHeight / listItemHeight | Same as Cascader | - | - |
| value (v-model) | The current value path | `(string \| number)[]` | - |
| defaultValue | Default value (uncontrolled) | `(string \| number)[]` | - |
| placeholder | Tab text of the level that has not been selected yet | `string` | `'Please select'` |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'tabs' \| 'tab' \| 'list' \| 'option', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'tabs' \| 'tab' \| 'list' \| 'option', CSSProperties>` | - |

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the value changes: only when a leaf node is selected by default, at every level with `changeOnSelect` | `(value, selectedOptions) => void` |
| finish | Triggered when a leaf node is selected (the path is complete) | `(value, selectedOptions) => void` |
| select | Triggered when an option of any level is tapped | `(option, level) => void` |
| tabChange | Triggered when the current level changes | `(index: number) => void` |

| Method | Description | Type |
| --- | --- | --- |
| scrollToSelected | Scroll the selected option of the current level to the middle of the list (called automatically when switching tabs or opening the popup) | `() => void` |

## Design Token

For the trigger and popup tokens, see [Picker](../picker/docs.md).

| Token | Description | Default |
| --- | --- | --- |
| `--am-cascader-view-height` | View height | `360px` |
| `--am-cascader-view-font-size` | Font size | `var(--am-font-size-lg)` |
| `--am-cascader-view-tab-height` | Tab height | `44px` |
| `--am-cascader-view-tab-color` | Tab text color | `var(--am-color-text)` |
| `--am-cascader-view-tab-placeholder-color` | Text color of the unselected tab | `var(--am-color-text-tertiary)` |
| `--am-cascader-view-active-color` | Color of the current tab and the selected option | `var(--am-color-primary)` |
| `--am-cascader-view-option-height` | Minimum height of an option | `48px` |
| `--am-cascader-view-option-padding-inline` | Horizontal padding of an option | `var(--am-padding)` |
| `--am-cascader-view-disabled-color` | Text color of a disabled option | `var(--am-color-text-disabled)` |

## Differences from PC

- Uses "tabs + list" in a bottom popup instead of a multi-column dropdown menu: selecting an option moves to the next level automatically, and selecting a leaf node commits the value and closes the popup.
- With `changeOnSelect` enabled, the value is not committed on every tap; an "OK" button is shown instead so that the user confirms the current path.
- APIs such as `multiple`, `showCheckedStrategy`, `showSearch`, `expandTrigger`, `popupRender`, `placement`, `tagRender`, `maxTagCount` and `Cascader.Panel` are not supported; use `CascaderView` for inline scenarios.
- Besides the PC way of "mutating the `children` of the target option", `loadData` can also return a Promise; if there are no child options after loading, the option is treated as a leaf node.
- Adds `virtual`, `listHeight` and `listItemHeight`, consistent with Select: the list of every level is virtually scrolled, and switching tabs scrolls the selected option of that level to the middle of the list.
- `allowClear` defaults to `false` and only supports a boolean.
- The popup container uses `getContainer` (consistent with Popup); `getPopupContainer` is not supported.
- Adds the `confirm`, `cancel`, `select` and `tabChange` events, the `title`, `okText`, `cancelText` and `trigger` props, and the `default` (custom trigger) slot.
- The semantic structure of `classes` / `styles` is `root`, `content`, `suffix`, `popup`.
