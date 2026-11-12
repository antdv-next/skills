---
title: Button
description: To trigger an operation.
---

## When To Use

A button means an operation (or a series of operations). Clicking a button will trigger the corresponding business logic.

The API is aligned with `Button` of antdv-next: `type` is syntactic sugar for `color` + `variant`. On mobile the default height is larger and the pressed state uses `:active` feedback.

## Examples

| Demo | Path |
| --- | --- |
| Button type | demo/basic.md |
| Color & variant | demo/color-variant.md |
| Block button | demo/block.md |
| Button size | demo/size.md |
| Button shape | demo/shape.md |
| Icon button | demo/icon.md |
| Loading state | demo/loading.md |
| Disabled state | demo/disabled.md |
| Ghost button | demo/ghost.md |
| Semantic class names and component tokens | demo/style-class.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Button type, syntactic sugar for `color` and `variant` | `'default' \| 'primary' \| 'dashed' \| 'text' \| 'link'` | `'default'` |
| color | Button color | `'default' \| 'primary' \| 'danger' \| 'success' \| 'warning'` | - |
| variant | Button variant | `'solid' \| 'outlined' \| 'dashed' \| 'filled' \| 'text' \| 'link'` | - |
| danger | Danger button, equivalent to `color="danger"` | `boolean` | `false` |
| ghost | Ghost button with a transparent background, for dark or image backgrounds | `boolean` | `false` |
| block | Fit the button width to its parent | `boolean` | `false` |
| size | Button size | `'small' \| 'middle' \| 'large'` | `'middle'` |
| shape | Button shape | `'default' \| 'round' \| 'circle'` | `'default'` |
| icon | Icon. The same-named slot takes precedence | `VueNode` | - |
| iconPlacement | Icon position | `'start' \| 'end'` | `'start'` |
| loading | Loading state; a delay and a custom icon can be configured | `boolean \| { delay?: number, icon?: VueNode }` | `false` |
| disabled | Disabled state | `boolean` | `false` |
| href | Renders an `<a>` when set | `string` | - |
| target | Same as `target` of `<a>`, works when `href` is set | `string` | - |
| htmlType | The `type` of the native `button` | `'button' \| 'submit' \| 'reset'` | `'button'` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'icon' \| 'content', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'icon' \| 'content', CSSProperties>` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| click | Triggered when the button is clicked; not triggered while disabled or loading | `(event: MouseEvent) => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | Button content |
| icon | Custom icon, takes precedence over the `icon` prop |

## Design Token

Customize through `theme.components.Button` of `ConfigProvider`, or override the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-button-height` | Button height | `var(--am-control-height)` |
| `--am-button-font-size` | Font size | `var(--am-font-size-lg)` |
| `--am-button-padding-inline` | Horizontal padding | `var(--am-padding)` |
| `--am-button-border-radius` | Border radius | `var(--am-border-radius)` |
| `--am-button-font-weight` | Font weight | `400` |
| `--am-button-icon-gap` | Gap between icon and text | `6px` |

## Differences from PC

- Added two `color` values, `success` and `warning`; the preset palette colors of PC (such as `magenta`) are not supported.
- `autoInsertSpace` is not supported; no space is inserted between two Chinese characters on mobile.
- There is no hover state or wave effect; press feedback uses `:active`.
