---
title: FloatButton
description: A button that floats above the page.
---

## When To Use

- For global functionality on the site: customer service, feedback, shopping cart entry, etc.
- Buttons that stay visible wherever you browse.
- Use `BackTop` to provide a shortcut back to the top when the page is long.

The API is aligned with `FloatButton` of antdv-next, with dragging and magnetic edge snapping added, which are common on mobile.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Type, shape and text | demo/type.md |
| Badge | demo/badge.md |
| Float button group | demo/group.md |
| Menu mode | demo/menu.md |
| Dragging and magnetic snapping | demo/draggable.md |
| Back to top | demo/back-top.md |

> The float button uses `position: fixed` by default and is fixed at the bottom right corner of the screen. To keep the button inside the demo area, the examples above all place it in a relatively positioned container through `:style="{ position: 'absolute' }"`.

## API

### FloatButton Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| icon | Custom icon, the same-named slot takes precedence | `VueNode` | `<FileTextOutlined />` |
| content | Text below the icon, the default slot takes precedence | `VueNode` | - |
| ~~description~~ | Please use `content` instead | `VueNode` | - |
| type | Button type | `'default' \| 'primary'` | `'default'` |
| shape | Button shape | `'circle' \| 'square'` | `'circle'` |
| href | The URL to navigate to on click. When specified, the button is rendered as `<a>` | `string` | - |
| target | Same as the `target` attribute of `<a>`, works when `href` is specified | `string` | - |
| htmlType | The `type` of the native `button` | `'button' \| 'submit' \| 'reset'` | `'button'` |
| badge | Float button with a badge | `{ count?: number \| string, dot?: boolean, overflowCount?: number, showZero?: boolean, color?: string }` | - |
| ariaLabel | Accessibility label | `string` | - |
| draggable | Whether the button is draggable | `boolean` | `false` |
| axis | The direction in which the button can be dragged | `'x' \| 'y' \| 'xy'` | `'xy'` |
| magnetic | Snap to the nearest edge in this direction after release | `'x' \| 'y'` | - |
| offset | Position of the top left corner of the button (px). Relative to the viewport, or to the positioned parent when absolutely positioned. Supports `v-model:offset` | `{ x: number, y: number }` | - |
| gap | Minimum distance to the edges while dragging (px) | `number` | `16` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic class names | `Record<'root' \| 'icon' \| 'content' \| 'badge', string>` | - |
| styles | Semantic styles | `Record<'root' \| 'icon' \| 'content' \| 'badge', CSSProperties>` | - |

### FloatButton Events

| Event | Description | Type |
| --- | --- | --- |
| click | Triggered when the button is clicked, not triggered at the end of a drag | `(event: MouseEvent) => void` |
| update:offset | The position changed after dragging ends | `(offset: { x: number, y: number }) => void` |
| offsetChange | Triggered after dragging ends (including magnetic snapping) | `(offset: { x: number, y: number }) => void` |

### FloatButton Slots

| Slot | Description |
| --- | --- |
| default | Text below the icon, takes precedence over the `content` prop |
| icon | Custom icon, takes precedence over the `icon` prop |

### FloatButton.Group Props

Used through `<am-float-button-group>`.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| shape | Shape of all buttons in the group | `'circle' \| 'square'` | `'circle'` |
| trigger | Trigger mode, enables menu mode when set | `'click'` | - |
| open | Whether the menu is open, use together with `trigger`, supports `v-model:open` | `boolean` | - |
| defaultOpen | Whether the menu is open by default | `boolean` | `false` |
| placement | The position where the menu pops up | `'top' \| 'left' \| 'right' \| 'bottom'` | `'top'` |
| icon | Icon of the trigger button, the same-named slot takes precedence | `VueNode` | `<FileTextOutlined />` |
| closeIcon | Icon of the trigger button when open, the same-named slot takes precedence | `VueNode` | `<CloseOutlined />` |
| content | Text of the trigger button | `VueNode` | - |
| type | Type of the trigger button | `'default' \| 'primary'` | `'default'` |
| badge | Badge of the trigger button | `FloatButtonBadgeProps` | - |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic class names | `Record<'root' \| 'list' \| 'trigger', string>` | - |
| styles | Semantic styles | `Record<'root' \| 'list' \| 'trigger', CSSProperties>` | - |

### FloatButton.Group Events

| Event | Description | Type |
| --- | --- | --- |
| update:open | The open state changed | `(open: boolean) => void` |
| openChange | Callback when the menu opens or closes | `(open: boolean) => void` |
| click | Callback when the trigger button is clicked (menu mode only) | `(event: MouseEvent) => void` |

### FloatButton.Group Slots

| Slot | Description |
| --- | --- |
| default | Float buttons in the group |
| icon | Icon of the trigger button |
| closeIcon | Icon of the trigger button when open |

### FloatButton.BackTop Props

Used through `<am-back-top>`.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visibilityHeight | The button appears only after the scroll height reaches this value | `number` | `400` |
| target | The element whose scroll event is listened to | `() => HTMLElement \| Window` | `() => window` |
| duration | Time to return to the top (ms); has no effect when "Reduce Motion" is enabled | `number` | `450` |
| icon | Custom icon, the same-named slot takes precedence | `VueNode` | `<VerticalAlignTopOutlined />` |
| content | Text below the icon, the default slot takes precedence | `VueNode` | - |
| type | Button type | `'default' \| 'primary'` | `'default'` |
| shape | Button shape | `'circle' \| 'square'` | `'circle'` |
| badge | Badge | `FloatButtonBadgeProps` | - |
| ariaLabel | Accessibility label | `string` | - |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic class names | Same as FloatButton | - |
| styles | Semantic styles | Same as FloatButton | - |

### FloatButton.BackTop Events

| Event | Description | Type |
| --- | --- | --- |
| click | Callback when the button is clicked | `(event: MouseEvent) => void` |

## Design Token

Customize through `theme.components.FloatButton` of `ConfigProvider`, or by overriding the CSS variables directly. The variables are declared on the root element of a standalone float button or of a button group; buttons inside a group inherit the variables of the group.

| Token | Description | Default |
| --- | --- | --- |
| `--am-float-button-size` | Button size | `48px` |
| `--am-float-button-inset-inline-end` | Distance from the right side of the screen (left side in RTL), the safe area is added automatically | `24px` |
| `--am-float-button-inset-block-end` | Distance from the bottom of the screen, the bottom safe area is added automatically | `48px` |
| `--am-float-button-z-index` | z-index | `99` |
| `--am-float-button-bg` | Background color of the default type | `var(--am-color-bg-elevated)` |
| `--am-float-button-color` | Text color of the default type | `var(--am-color-text)` |
| `--am-float-button-primary-bg` | Background color of the primary type | `var(--am-color-primary)` |
| `--am-float-button-primary-color` | Text color of the primary type | `var(--am-color-text-light-solid)` |
| `--am-float-button-icon-size` | Icon size | `20px` |
| `--am-float-button-content-font-size` | Font size of the text | `10px` |
| `--am-float-button-border-radius` | Border radius of square buttons | `var(--am-border-radius)` |
| `--am-float-button-shadow` | Shadow | `var(--am-box-shadow)` |
| `--am-float-button-group-gap` | Gap between buttons in a group | `var(--am-margin-sm)` |

## Differences from PC

- Dragging is added: `draggable`, `axis`, `magnetic`, `offset` (`v-model:offset`), `gap`, and the `offsetChange` event. To drag arbitrary content, use [Draggable](../draggable/docs.md).
- The position is controlled by the `--am-float-button-inset-inline-end` / `--am-float-button-inset-block-end` variables and avoids the safe area automatically.
- `tooltip` is not supported (there is no hover on mobile); `trigger` of `FloatButton.Group` only supports `'click'`, not `'hover'`.
- `badge` is a built-in lightweight implementation that only supports `count`, `dot`, `overflowCount`, `showZero` and `color`.
- `BackTop` does not support `showProgress`; its tag is `<am-back-top>`, and it is also accessible through `FloatButton.BackTop`.
- `classes` / `styles` only support the object form.
