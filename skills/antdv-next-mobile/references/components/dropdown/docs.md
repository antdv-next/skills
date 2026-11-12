---
title: Dropdown
description: A filter menu bar that expands downwards, commonly used for sorting and filtering at the top of a list page.
---

## When To Use

- When the top of a list page needs a row of filters (sort, category, more filters...), each of which expands a panel below the menu bar for selection.
- The panel content can be a single-select list or any custom content (multiple selection, forms, etc.).

> Note: the mobile `Dropdown` is a "filter menu bar". It is not the same interaction as the "dropdown action menu" of Antdv Next on PC, which pops up on hover / click. For action menus on mobile, use [ActionSheet](../action-sheet/docs.md) or the menu mode of [Popover](../popover/docs.md).

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Custom panel | demo/custom.md |
| Highlight and disabled | demo/highlight.md |
| Controlled expansion | demo/control.md |
| Custom arrow and style | demo/arrow.md |

## API

```vue
<am-dropdown v-model:active-key="activeKey">
  <am-dropdown-item key="sort" v-model:value="sort" :options="options" />
  <am-dropdown-item key="filter" title="Filter">
    Custom content
  </am-dropdown-item>
</am-dropdown>
```

`DropdownItem` identifies itself with Vue's `key`, which corresponds to the `activeKey` of `Dropdown`. A key is generated automatically when `key` is not set.

### Dropdown Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| activeKey | The `key` of the currently expanded item, `null` means all collapsed, supports `v-model:activeKey` | `string \| number \| null` | - |
| defaultActiveKey | The `key` of the item expanded by default | `string \| number \| null` | `null` |
| closeOnMaskClick | Whether to collapse when the mask is clicked | `boolean` | `true` |
| closeOnClickAway | Whether to collapse when touching outside the menu bar and the panel | `boolean` | `true` |
| arrowIcon | Custom arrow icon, the same-named slot takes precedence | `VueNode` | `<CaretDownOutlined />` |
| getContainer | The mount node of the panel, `false` mounts it in place | `string \| HTMLElement \| (() => HTMLElement) \| false` | `document.body` |
| zIndex | The z-index of the panel | `number` | Auto-incremented |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'nav' \| 'item' \| 'title' \| 'arrow', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'nav' \| 'item' \| 'title' \| 'arrow', CSSProperties>` | - |

### Dropdown Events

| Event | Description | Type |
| --- | --- | --- |
| update:activeKey | The expanded item changed | `(key: string \| number \| null) => void` |
| change | Triggered when the expanded item changes, `null` when collapsed | `(key: string \| number \| null) => void` |

### Dropdown Slots

| Slot | Description |
| --- | --- |
| default | The list of `DropdownItem` |
| arrowIcon | Custom arrow icon, takes precedence over the `arrowIcon` prop |

### Dropdown Methods

| Name | Description | Type |
| --- | --- | --- |
| close | Collapse the currently expanded panel | `() => void` |

### DropdownItem Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | The title on the menu bar, the same-named slot takes precedence. Shows the `label` of the selected option when not set | `VueNode` | - |
| options | Options of the single-select list, rendered when no default slot is provided | `{ label: VueNode, value: string \| number, disabled?: boolean }[]` | `[]` |
| value | The value of the selected option, supports `v-model:value` | `string \| number` | - |
| defaultValue | The value of the option selected by default | `string \| number` | - |
| highlight | Whether to highlight the title (e.g. a filter has been applied) | `boolean` | `false` |
| disabled | Whether it is disabled | `boolean` | `false` |
| closeOnSelect | Whether to collapse the panel after an option is selected | `boolean` | `true` |
| showFooter | Whether to show the "Reset / Confirm" footer, for custom panels | `boolean` | `false` |
| confirmText | Text of the confirm button | `VueNode` | `Confirm` |
| resetText | Text of the reset button | `VueNode` | `Reset` |
| arrowIcon | Custom arrow icon, takes precedence over the `arrowIcon` of `Dropdown` | `VueNode` | - |
| forceRender | Pre-render the panel before it is first expanded | `boolean` | `false` |
| destroyOnHidden | Destroy the panel content after it is collapsed | `boolean` | `false` |
| rootClass | Class name of the root node of the panel layer | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'mask' \| 'panel' \| 'body' \| 'option' \| 'footer', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'mask' \| 'panel' \| 'body' \| 'option' \| 'footer', CSSProperties>` | - |

### DropdownItem Events

| Event | Description | Type |
| --- | --- | --- |
| update:value | The selected value changed | `(value: string \| number) => void` |
| change | Triggered when the selected option changes | `(value: string \| number, option: DropdownOption) => void` |
| confirm | Triggered when the confirm button in the footer is clicked, the panel then collapses | `() => void` |
| reset | Triggered when the reset button in the footer is clicked, the panel does not collapse | `() => void` |
| afterOpenChange | Triggered after the expand / collapse animation ends | `(open: boolean) => void` |

### DropdownItem Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Custom panel content, replaces the option list | `{ close }` |
| title | The title on the menu bar | - |
| arrowIcon | Custom arrow icon | - |

## Design Token

Customize through `theme.components.Dropdown` of `ConfigProvider` or by overriding the CSS variables directly. The menu bar variables apply to `.am-dropdown`, and the panel variables apply to the `rootClass` of `DropdownItem` (`.am-dropdown-layer`).

| Token | Description | Default |
| --- | --- | --- |
| `--am-dropdown-height` | Height of the menu bar | `44px` |
| `--am-dropdown-bg` | Background color of the menu bar | `var(--am-color-bg-container)` |
| `--am-dropdown-color` | Title color | `var(--am-color-text)` |
| `--am-dropdown-active-color` | Title color when expanded / highlighted | `var(--am-color-primary)` |
| `--am-dropdown-font-size` | Title font size | `var(--am-font-size)` |
| `--am-dropdown-arrow-size` | Arrow size | `10px` |
| `--am-dropdown-arrow-color` | Arrow color | `var(--am-color-text-quaternary)` |
| `--am-dropdown-z-index` | The z-index of the panel (when not assigned automatically) | `var(--am-z-index-popup-base)` |
| `--am-dropdown-panel-bg` | Background color of the panel | `var(--am-color-bg-elevated)` |
| `--am-dropdown-panel-max-height` | Max height of the panel (relative to the available space below the menu bar) | `70%` |
| `--am-dropdown-panel-border-radius` | Bottom border radius of the panel | `var(--am-border-radius-lg)` |
| `--am-dropdown-option-height` | Min height of an option | `48px` |
| `--am-dropdown-option-active-color` | Color of the selected option | `var(--am-color-primary)` |

## Differences from PC

- **A completely different interaction**: on PC, `Dropdown` is a floating action menu that wraps a trigger element (`menu`, `trigger`, `placement`...); on mobile, `Dropdown` is a filter menu bar whose children are `DropdownItem`, and the panel slides out below the menu bar with a mask. Therefore the PC `menu`, `trigger`, `placement`, `arrow`, `popupRender`, `Dropdown.Button`, etc. do not apply.
- The expanded state uses `activeKey` (instead of `open`), because only one item is expanded at a time.
- For action menus on mobile, use [ActionSheet](../action-sheet/docs.md) or the `actions` of [Popover](../popover/docs.md).
