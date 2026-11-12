---
title: ActionBar
description: Placed at the bottom of the page, with icon actions on the left and one or more prominent buttons on the right.
---

## When To Use

- On product or article detail pages, to keep secondary entries such as "Chat / Shop / Cart" and primary actions such as "Add to cart / Buy now" at the bottom.
- On cart or order confirmation pages, to show a summary at the bottom and submit (use `prefix`).

`ActionBar` is a mobile-only component. To switch between top-level pages, use [TabBar](../tab-bar/docs.md).

The bar is `fixed` by default and sticks to the bottom of the viewport. To avoid covering other demos, every demo on this page except "Fixed at the bottom" sets `:fixed="false"`.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Badge and disabled | demo/badge.md |
| Button types | demo/button.md |
| Submit bar | demo/prefix.md |
| Fixed at the bottom | demo/fixed.md |

## API

### ActionBar Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| fixed | Whether to fix it at the bottom of the viewport | `boolean` | `true` |
| placeholder | Whether to keep a placeholder of the same height in the document flow when fixed | `boolean` | `false` |
| safeArea | Whether to adapt to the bottom safe area | `boolean` | `true` |
| bordered | Whether to show the top hairline | `boolean` | `true` |
| zIndex | The `z-index` when fixed | `number` | `100` |
| prefix | Free content before the actions that takes the remaining width | `VueNode` | - |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'content' \| 'prefix', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'content' \| 'prefix', CSSProperties>` | - |

### ActionBar Slots

| Slot | Description |
| --- | --- |
| default | `ActionBarIcon` / `ActionBarButton` or any content |
| prefix | Free content before the actions, takes precedence over the `prefix` prop |

### ActionBarIcon Props

Also available as `ActionBar.Icon`.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| icon | Icon | `VueNode` | - |
| text | Text | `VueNode` | - |
| badge | Badge content; shows a red dot when `true` | `number \| string \| boolean` | - |
| disabled | Whether it is disabled | `boolean` | `false` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'icon' \| 'text' \| 'badge', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'icon' \| 'text' \| 'badge', CSSProperties>` | - |

### ActionBarIcon Events

| Event | Description | Type |
| --- | --- | --- |
| click | Triggered on tap, not when disabled | `(event: MouseEvent) => void` |

### ActionBarIcon Slots

| Slot | Description |
| --- | --- |
| icon | Custom icon, takes precedence over the `icon` prop |
| text | Custom text, takes precedence over the default slot and the `text` prop |
| default | The text, same as the `text` slot |

### ActionBarButton Props

Also available as `ActionBar.Button`. It renders a [Button](../button/docs.md); the props below mean the same as on Button.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| type | Button type, syntactic sugar of `color` + `variant` | `'default' \| 'primary' \| 'dashed' \| 'link' \| 'text'` | `'primary'` |
| color | Button color | `'default' \| 'primary' \| 'danger' \| 'success' \| 'warning'` | - |
| variant | Button variant | `'outlined' \| 'dashed' \| 'solid' \| 'filled' \| 'text' \| 'link'` | - |
| danger | Danger button | `boolean` | `false` |
| ghost | Ghost button | `boolean` | `false` |
| icon | Icon | `VueNode` | - |
| iconPlacement | Position of the icon | `'start' \| 'end'` | `'start'` |
| disabled | Whether it is disabled | `boolean` | `false` |
| loading | Loading state | `boolean \| { delay?: number, icon?: VueNode }` | `false` |
| href | Link target; renders an `a` when set | `string` | - |
| target | Same as `target` of `a`, works when `href` is set | `string` | - |
| htmlType | The `type` of the native `button` | `'submit' \| 'button' \| 'reset'` | `'button'` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'icon' \| 'content', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'icon' \| 'content', CSSProperties>` | - |

### ActionBarButton Events

| Event | Description | Type |
| --- | --- | --- |
| click | Triggered on tap, not when disabled or loading | `(event: MouseEvent) => void` |

### ActionBarButton Slots

| Slot | Description |
| --- | --- |
| default | Button content |
| icon | Custom icon, takes precedence over the `icon` prop |

## Design Token

Customize through `theme.components.ActionBar` of `ConfigProvider`, or override the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-action-bar-height` | Height of the bar (excluding the safe area) | `50px` |
| `--am-action-bar-background` | Background color | `var(--am-color-bg-container)` |
| `--am-action-bar-padding-inline` | Inline padding | `var(--am-padding-xs)` |
| `--am-action-bar-z-index` | The `z-index` when fixed | `100` |
| `--am-action-bar-icon-width` | Minimum width of an icon action | `48px` |
| `--am-action-bar-icon-size` | Icon size | `20px` |
| `--am-action-bar-icon-color` | Icon color | `var(--am-color-text)` |
| `--am-action-bar-icon-font-size` | Text font size of an icon action | `10px` |
| `--am-action-bar-icon-text-color` | Text color of an icon action | `var(--am-color-text-secondary)` |
| `--am-action-bar-badge-color` | Badge background color | `var(--am-color-error)` |
| `--am-action-bar-button-height` | Button height | `var(--am-control-height)` |
| `--am-action-bar-button-font-size` | Button font size | `var(--am-font-size)` |
| `--am-action-bar-button-gap` | Gap between the icon actions and the buttons | `var(--am-padding-xs)` |

## Differences from PC

- Antdv Next has no such component; `ActionBar` is mobile-only.
- `ActionBarButton` reuses [Button](../button/docs.md), so `type` / `color` / `variant` / `danger` / `loading` and friends match the PC Button; `size`, `shape` and `block` are owned by the bar and not exposed.
