---
title: Divider
description: A divider line that separates content.
---

## When To Use

- Divide sections of an article.
- Divide inline text / links, such as the operation column of a list.

The API is aligned with `Divider` of Antdv Next: `orientation` controls the direction, `titlePlacement` controls the position of the title, and `variant` controls the line style.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Divider with text | demo/with-text.md |
| Line style | demo/variant.md |
| Vertical divider | demo/vertical.md |
| Spacing size | demo/size.md |
| Semantic class names and component tokens | demo/style-class.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| orientation | Direction of the divider | `'horizontal' \| 'vertical'` | `'horizontal'` |
| vertical | Whether vertical, equivalent to `orientation="vertical"` | `boolean` | `false` |
| type | Alias of `orientation`, kept for compatibility with Antdv Next | `'horizontal' \| 'vertical'` | - |
| titlePlacement | Position of the title (`left` / `right` are equivalent to `start` / `end`) | `'start' \| 'center' \| 'end'` | `'center'` |
| variant | Line style | `'solid' \| 'dashed' \| 'dotted'` | `'solid'` |
| dashed | Whether the line is dashed, equivalent to `variant="dashed"` | `boolean` | `false` |
| plain | Whether the title is displayed in plain body text style | `boolean` | `true` |
| size | Vertical spacing of a horizontal divider | `'small' \| 'middle' \| 'large'` | `'large'` |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'rail' \| 'content', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'rail' \| 'content', CSSProperties>` | - |

### Slots

| Slot | Description |
| --- | --- |
| default | The title inside the divider, only works for a horizontal divider |

## Design Token

Customize through `theme.components.Divider` of `ConfigProvider`, or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-divider-color` | Line color | `var(--am-color-split)` |
| `--am-divider-line-width` | Line thickness | `var(--am-line-width)` |
| `--am-divider-margin` | Vertical spacing of a horizontal divider | `var(--am-margin)` |
| `--am-divider-vertical-margin` | Horizontal spacing of a vertical divider | `var(--am-margin-xs)` |
| `--am-divider-text-color` | Title color | `var(--am-color-text)` |
| `--am-divider-text-font-size` | Title font size | `var(--am-font-size-lg)` |
| `--am-divider-text-padding` | Spacing between the title and the line | `var(--am-padding-sm)` |
| `--am-divider-placement-rail-width` | Width of the short line when the title is placed at an edge | `5%` |

## Differences from PC

- The default vertical spacing is `16px` (`24px` on PC), and `middle` / `small` are `12px` / `8px`, which better suits the information density of mobile.
- The deprecated `orientationMargin` is not supported; use `--am-divider-placement-rail-width` or `styles.content` instead.
- `classes` / `styles` only support the object form, not the function form.
