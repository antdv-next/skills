---
title: Space
description: Set the spacing between components.
---

## When To Use

- Avoid components clinging together and set a unified space.
- Suitable for horizontal spacing of inline elements; when a separator needs to be inserted between children.
- Difference from `Flex`: `Space` adds a wrapper element around each child for alignment and supports separators; `Flex` adds no wrapper element and is suitable for block-level layout.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Vertical space | demo/vertical.md |
| Space size | demo/size.md |
| Align | demo/align.md |
| Wrap | demo/wrap.md |
| Separator | demo/separator.md |
| Block mode | demo/block.md |
| Compact group | demo/compact.md |
| Group selection fields | demo/compact-fields.md |
| Search input and textarea | demo/compact-search.md |
| Button group | demo/compact-buttons.md |
| Vertical group | demo/compact-vertical.md |
| Nesting and form | demo/compact-nested.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| size | The space size. Presets are `small`(8px) / `middle`(16px) / `large`(24px), numbers are in px; the array form is `[horizontal, vertical]` | `Size \| [Size, Size]` (`Size = 'small' \| 'middle' \| 'large' \| number \| string`) | `'small'` |
| orientation | The space direction | `'horizontal' \| 'vertical'` | `'horizontal'` |
| vertical | Whether vertical, equivalent to `orientation="vertical"` | `boolean` | `false` |
| direction | Alias of `orientation`, kept for compatibility with antdv-next | `'horizontal' \| 'vertical'` | - |
| align | Cross-axis alignment, defaults to `center` in the horizontal direction | `'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch'` | - |
| wrap | Whether to wrap automatically, only works in the horizontal direction | `boolean` | `false` |
| separator | The separator between children; the same-named slot takes precedence | `VueNode` | - |
| block | Whether to fit the width of the parent element (mobile only) | `boolean` | `false` |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'item' \| 'separator', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'item' \| 'separator', CSSProperties>` | - |

### Space.Compact

Joins multiple bordered components into one seamless whole. Components that can take part in a group: `Button`, `Input`, `Input.Password`, `Input.Search`, `TextArea`, `InputNumber`, `Select`, `Picker`, `DatePicker`, `TimePicker`, `Cascader`, `Calendar` (trigger mode) and `Space.Addon`.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| size | Size of the members of the group; a member's own `size` takes precedence | `'small' \| 'middle' \| 'large'` | `'middle'` |
| orientation | Orientation | `'horizontal' \| 'vertical'` | `'horizontal'` |
| vertical | Arrange vertically, equivalent to `orientation="vertical"` | `boolean` | `false` |
| direction | Alias of `orientation`, for compatibility with antdv-next | `'horizontal' \| 'vertical'` | - |
| block | Fit the width of the parent element; inputs and selection fields share the remaining space equally | `boolean` | `false` |
| rootClass | Class name of the root node | `string` | - |

- In a horizontal group, `Input`, selection fields and `InputNumber` in input mode share the remaining width equally; add `style="flex: 0 0 96px"` to a member that needs a fixed width.
- `Input.Search` becomes a bordered, non-pill segment by default inside a group; `TextArea` stretches the row it is in, and the members in the same row follow its height.
- Fields in a group use the `outlined` variant by default, even inside a `Form` that is borderless by default; an explicitly set `variant` wins.
- Layers popped up from a field in the group (picker panels, etc.) do not belong to the group, and the components inside them are not affected.

### Space.Addon

A prefix / suffix block in a group, used to hold text or an icon.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| variant | Variant | `'outlined' \| 'filled' \| 'borderless'` | `'outlined'` |
| size | Size, follows the enclosing `Space.Compact` by default | `'small' \| 'middle' \| 'large'` | - |
| disabled | Disabled style | `boolean` | `false` |
| rootClass | Class name of the root node | `string` | - |

### Custom components

Your own bordered components can take part in a group too: put `classes` on the root element that draws the border, and merge `size`.

```ts
import { useCompactItemContext } from '@antdv-next/mobile'

const compact = useCompactItemContext()
// compact.classes.value -> ['am-compact-item', 'am-compact-first-item']
// compact.size.value    -> 'small' | 'middle' | 'large' | undefined
// compact.inCompact.value
```

### Slots

| Slot | Description |
| --- | --- |
| default | Children. Fragments produced by `v-for` / `<template>` are flattened, and nodes whose `v-if` is false are ignored |
| separator | Custom separator, takes precedence over the `separator` prop |

## Design Token

| Token | Description | Default |
| --- | --- | --- |
| `--am-space-gap-small` | Gap of `size="small"` | `var(--am-padding-xs)` |
| `--am-space-gap-middle` | Gap of `size="middle"` | `var(--am-padding)` |
| `--am-space-gap-large` | Gap of `size="large"` | `var(--am-padding-lg)` |

## Differences from PC

- Adds the `block` prop, which fits the width of the parent element; commonly used for full-row buttons arranged vertically.
- `size` additionally supports a CSS length as a string.
- `Space.Compact` additionally supports fields sharing the width equally with `block`; `Space.Addon` adds `variant`.
- In `Space.Compact`, the stepper mode of `InputNumber` adds borders to the plus / minus buttons to align the seams.
- `size` does not follow `componentSize` of `ConfigProvider`.
