---
title: Drawer
description: A floating panel that slides in from the edge of the screen, with a title, a close button and a footer.
---

## When To Use

- When an additional panel is needed to hold a form, details, filters and so on, and users should return to the original page once they are done.
- On mobile it slides in from the bottom by default (Bottom Sheet), and can also slide in from the left, right or top.

The API is aligned with `Drawer` of Antdv Next, and it is built on [Popup](../popup/docs.md).

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Placement | demo/placement.md |
| Extra actions and footer | demo/extra-footer.md |
| Size | demo/size.md |
| Swipe down to close | demo/swipe.md |
| Loading | demo/loading.md |
| Close button | demo/closable.md |
| Semantic class names and component tokens | demo/style-class.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| open | Whether the drawer is visible, supports `v-model:open` | `boolean` | `false` |
| title | Title, the same-named slot takes precedence | `VueNode` | - |
| extra | Extra actions on the right side of the header, the same-named slot takes precedence | `VueNode` | - |
| footer | Footer, the same-named slot takes precedence | `VueNode` | - |
| placement | Placement of the drawer | `'top' \| 'right' \| 'bottom' \| 'left'` | `'bottom'` |
| closable | Whether to show the close button, its icon, disabled state and placement are configurable | `boolean \| { closeIcon?: VueNode, disabled?: boolean, placement?: 'start' \| 'end' }` | `true` |
| closeIcon | Custom close icon, set to `null` or `false` to hide the close button | `VueNode` | `<CloseOutlined />` |
| mask | Whether to show the mask | `boolean` | `true` |
| maskClosable | Whether to close when the mask is clicked | `boolean` | `true` |
| keyboard | Whether pressing ESC closes the drawer | `boolean` | `true` |
| size | Preset size or custom size. `default`: top / bottom drawers are sized by their content (90% at most), left / right drawers are 80%; `large`: 90% for top / bottom, 100% for left / right | `'default' \| 'large' \| number \| string` | `'default'` |
| width | Width of left / right drawers, takes precedence over `size` | `number \| string` | - |
| height | Height of top / bottom drawers, takes precedence over `size` | `number \| string` | - |
| loading | Show a loading indicator instead of the content | `boolean` | `false` |
| destroyOnHidden | Destroy the content after closing | `boolean` | `false` |
| forceRender | Pre-render the content before the first open | `boolean` | `false` |
| getContainer | Mount node, `false` mounts in place | `string \| HTMLElement \| (() => HTMLElement) \| false` | `document.body` |
| zIndex | z-index | `number` | Auto increment |
| round | Use rounded corners on the side facing the page | `boolean` | `true` |
| safeArea | Reserve the bottom safe area when sliding in from the bottom | `boolean` | `true` |
| lockScroll | Lock page scrolling while open | `boolean` | `true` |
| swipeToClose | Show a drag handle and support swiping down to close (only for `placement="bottom"`) | `boolean` | `false` |
| rootClass | Class name of the root node | `string` | - |
| rootStyle | Style of the root node (including the mask) | `CSSProperties` | - |
| classes | Semantic structure class names | `Record<SemanticDOM, string>` | - |
| styles | Semantic structure styles | `Record<SemanticDOM, CSSProperties>` | - |

`SemanticDOM`: `root` (root node), `mask` (mask), `section` (panel), `header`, `title`, `extra`, `body`, `footer`, `close` (close button), `handle` (drag handle).

### Events

| Event | Description | Type |
| --- | --- | --- |
| update:open | Fired when the visible state changes | `(open: boolean) => void` |
| close | Fired when the close button or the mask is clicked, ESC is pressed, or the drawer is swiped down to close | `(event?: Event) => void` |
| afterOpenChange | Fired after the open / close animation ends | `(open: boolean) => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | Drawer content |
| title | Title, takes precedence over the `title` prop |
| extra | Extra actions, takes precedence over the `extra` prop |
| footer | Footer, takes precedence over the `footer` prop |
| closeIcon | Custom close icon, takes precedence over the `closeIcon` prop |

### Methods

| Name | Description | Type |
| --- | --- | --- |
| nativeElement | DOM node of the drawer panel | `HTMLElement` |

## Design Token

Customize through `theme.components.Drawer` of `ConfigProvider`, or override the CSS variables directly (on the root node that carries `rootClass`).

| Token | Description | Default |
| --- | --- | --- |
| `--am-drawer-size` | Default width of left / right drawers | `80%` |
| `--am-drawer-size-large` | Width of `large` left / right drawers | `100%` |
| `--am-drawer-max-height` | Maximum height of top / bottom drawers, also the height of `large` | `90%` |
| `--am-drawer-header-padding` | Padding of the header | `var(--am-padding-sm) var(--am-padding)` |
| `--am-drawer-body-padding` | Padding of the body | `var(--am-padding)` |
| `--am-drawer-footer-padding` | Padding of the footer | `var(--am-padding-sm) var(--am-padding)` |
| `--am-drawer-title-font-size` | Font size of the title | `var(--am-font-size-lg)` |
| `--am-drawer-close-size` | Size of the close icon | `18px` |
| `--am-drawer-handle-width` | Width of the drag handle | `36px` |
| `--am-drawer-handle-height` | Height of the drag handle | `4px` |
| `--am-drawer-handle-color` | Color of the drag handle | `var(--am-color-fill)` |

The panel background and border radius reuse `--am-popup-bg` and `--am-popup-border-radius` of Popup.

## Differences from PC

- `placement` defaults to `'bottom'` (`'right'` on PC).
- The presets of `size` are computed as a ratio of the screen (fixed `378px` / `736px` on PC), and string sizes (such as `'60%'`) are additionally supported.
- `loading` shows a loading icon instead of a skeleton.
- Adds `round`, `safeArea`, `lockScroll` and `swipeToClose`.
- `push` (pushing nested drawers), `resizable` (drag to resize), the blur configuration of `mask`, and PC interaction events such as `keydown` and `mouseenter` are not supported.
- `classes` / `styles` only support the object form, not the function form; `wrapper` and `dragger` are not included, and `handle` is added.
