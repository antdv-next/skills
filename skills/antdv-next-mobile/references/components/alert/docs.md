---
title: Alert
description: Display warning messages that require attention.
---

## When To Use

- When you need to show alert messages to users.
- When you need a persistent static container which is not a floating layer: it stays visible, never disappears by itself, and can be closed by the user.

The API is aligned with `Alert` of antdv-next: `title` (compatible with the deprecated `message`), `description`, `showIcon`, `closable`, `action`, `banner`, `variant`. Use [NoticeBar](../notice-bar/docs.md) when you need a single-line scrolling notice.

## Examples

| Demo | Path |
| --- | --- |
| Four styles | demo/basic.md |
| Description | demo/description.md |
| Icon | demo/icon.md |
| Closable | demo/closable.md |
| Action | demo/action.md |
| Outlined variant | demo/variant.md |
| Banner | demo/banner.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Type of the alert style | `'success' \| 'info' \| 'warning' \| 'error'` | `'info'` (`'warning'` in `banner` mode) |
| variant | Variant: `filled` has a light background, `outlined` keeps the border only | `'filled' \| 'outlined'` | `'filled'` |
| title | Content of the alert, the same-named slot takes precedence | `VueNode` | - |
| description | Additional content of the alert, the same-named slot takes precedence | `VueNode` | - |
| showIcon | Whether to show the icon | `boolean` | `false` (`true` in `banner` mode) |
| icon | Custom icon, effective when `showIcon` is `true` | `VueNode` | - |
| closable | Whether to show the close button, a config object is also accepted | `boolean \| { closeIcon?: VueNode, disabled?: boolean, 'aria-label'?: string }` | `false` |
| closeIcon | Custom close icon, the close button is shown automatically once it is set | `VueNode` | - |
| action | Custom action | `VueNode` | - |
| banner | Whether to show as a top banner: no border, no border radius | `boolean` | `false` |
| role | The `role` of the root node | `string` | `'alert'` |
| message | Deprecated, please use `title` | `VueNode` | - |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'icon' \| 'section' \| 'title' \| 'description' \| 'actions' \| 'close', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'icon' \| 'section' \| 'title' \| 'description' \| 'actions' \| 'close', CSSProperties>` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| close | Triggered when the close button is clicked | `(event: MouseEvent) => void` |
| afterClose | Triggered when the close animation ends | `() => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | Content of the alert, same as `title` |
| title | Content of the alert |
| description | Additional content |
| icon | Custom icon |
| action | Custom action |
| closeIcon | Custom close icon |

## Design Token

Customize through `theme.components.Alert` of `ConfigProvider`, or override the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-alert-padding-block` | Vertical padding | `var(--am-padding-xs)` |
| `--am-alert-padding-inline` | Horizontal padding | `var(--am-padding-sm)` |
| `--am-alert-with-description-padding` | Padding when there is a description | `var(--am-padding-sm) var(--am-padding)` |
| `--am-alert-border-radius` | Border radius | `var(--am-border-radius)` |
| `--am-alert-font-size` | Font size | `var(--am-font-size)` |
| `--am-alert-icon-size` | Icon size | `16px` |
| `--am-alert-with-description-icon-size` | Icon size when there is a description | `22px` |
| `--am-alert-title-color` | Title color | `var(--am-color-text-heading)` |
| `--am-alert-description-color` | Description color | `var(--am-color-text)` |
| `--am-alert-color` | Main color of the icon (varies with `type`) | `var(--am-color-info)` |
| `--am-alert-bg` | Background color (varies with `type`) | `var(--am-color-info-bg)` |
| `--am-alert-border-color` | Border color (varies with `type`) | `var(--am-color-info-border)` |

## Differences from PC

- The default slot can be used directly as the title content (`<am-alert>content</am-alert>`).
- The close button has an enlarged touch area, and press feedback uses `:active`.
- `Alert.ErrorBoundary` is not provided, and the `mouseenter` / `mouseleave` events are not emitted (native events can be listened to through attrs).
- The `closable` config object does not support the `onClose` / `afterClose` callbacks, use the `close` / `afterClose` events instead.
- Use the mobile-only `NoticeBar` for carousel / scrolling notices.
