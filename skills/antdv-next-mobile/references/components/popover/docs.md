---
title: Popover
description: The floating card or menu popped up by tapping an element.
---

## When To Use

- When the target element has further description and related actions, they can be put into a card which is shown after the user taps it.
- When you need a lightweight action menu next to the trigger element, use the `actions` menu mode (e.g. the "More" menu at the top-right of a navigation bar).

The API is aligned with `Popover` of antdv-next and adapted to touch screens: tap to trigger, touch a blank area to close, automatic flipping and shifting to stay within the screen.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Twelve placements | demo/placement.md |
| Dark mode and custom color | demo/mode.md |
| Menu mode | demo/menu.md |
| Controlled and manual trigger | demo/control.md |
| Arrow and auto adjustment | demo/arrow.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| open | Whether the popover is visible, supports `v-model:open` | `boolean` | - |
| defaultOpen | Whether the popover is visible by default | `boolean` | `false` |
| title | Title of the card, the same-named slot takes precedence | `VueNode` | - |
| content | Content of the card, the same-named slot takes precedence | `VueNode` | - |
| placement | Position of the popover | `'top' \| 'topLeft' \| 'topRight' \| 'bottom' \| 'bottomLeft' \| 'bottomRight' \| 'left' \| 'leftTop' \| 'leftBottom' \| 'right' \| 'rightTop' \| 'rightBottom'` | `'top'` |
| trigger | Trigger mode. With `manual` it can only be controlled through `open` or the instance methods | `'click' \| 'manual'` | `'click'` |
| arrow | Whether to show the arrow | `boolean` | `true` |
| mode | Color mode | `'light' \| 'dark'` | `'light'` |
| color | Custom background color | `string` | - |
| autoAdjustOverflow | Flip to the opposite side when there is not enough space, and shift along the edge to stay within the screen | `boolean` | `true` |
| closeOnClickAway | Whether to close when the area outside the popover is touched | `boolean` | `true` |
| destroyOnHidden | Destroy the content after closing | `boolean` | `false` |
| getPopupContainer | Parent node the popup is rendered into, `body` by default | `(triggerNode: HTMLElement) => HTMLElement` | `() => document.body` |
| zIndex | The `z-index` of the popup | `number` | Auto-incremented |
| actions | Menu mode: render a group of actions instead of `title` / `content` | [PopoverAction](#popoveraction)[] | - |
| closeOnAction | Whether to close after an action is clicked | `boolean` | `true` |
| rootClass | Class name of the popup root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'container' \| 'arrow' \| 'title' \| 'content', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'container' \| 'arrow' \| 'title' \| 'content', CSSProperties>` | - |

Fallthrough attributes such as `class` and `style` are applied to the `.am-popover-trigger` node which wraps the trigger element.

### Events

| Event | Description | Type |
| --- | --- | --- |
| update:open | The visible state changed | `(open: boolean) => void` |
| openChange | Callback when the visibility changes | `(open: boolean) => void` |
| action | Triggered when a menu action is clicked, disabled items do not trigger it | `(action: PopoverAction, index: number) => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | The element which triggers the popover |
| title | Title of the card, takes precedence over the `title` prop |
| content | Content of the card, takes precedence over the `content` prop |

### Methods

| Name | Description | Type |
| --- | --- | --- |
| show | Show the popover | `() => void` |
| hide | Hide the popover | `() => void` |
| updatePosition | Recalculate the position (call it after the trigger element moved or the content size changed) | `() => void` |

### PopoverAction

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier | `string \| number` | - |
| text | Text | `VueNode` | - |
| icon | Icon | `VueNode` | - |
| disabled | Whether it is disabled | `boolean` | `false` |
| danger | Dangerous action, the text is red | `boolean` | `false` |
| onClick | Click callback | `(action: PopoverAction, index: number) => void` | - |

## Design Token

Customize through `theme.components.Popover` of `ConfigProvider`, or override the CSS variables directly (on the popup root node where `rootClass` lands).

| Token | Description | Default |
| --- | --- | --- |
| `--am-popover-z-index` | The `z-index` (when not assigned automatically) | `var(--am-z-index-popup-base)` |
| `--am-popover-bg` | Background color | `var(--am-color-bg-elevated)` |
| `--am-popover-color` | Text color | `var(--am-color-text)` |
| `--am-popover-title-color` | Title color | `var(--am-color-text-heading)` |
| `--am-popover-font-size` | Font size | `var(--am-font-size)` |
| `--am-popover-padding` | Padding | `var(--am-padding-xs) var(--am-padding-sm)` |
| `--am-popover-border-radius` | Border radius | `var(--am-border-radius)` |
| `--am-popover-shadow` | Shadow | `var(--am-box-shadow)` |
| `--am-popover-max-width` | Maximum width | `min(280px, calc(100vw - 16px))` |
| `--am-popover-arrow-size` | Arrow size | `8px` |
| `--am-popover-menu-item-height` | Minimum height of menu items | `44px` |
| `--am-popover-menu-min-width` | Minimum width of the menu | `120px` |
| `--am-popover-split-color` | Color of the divider between menu items | `var(--am-color-split)` |

## Differences from PC

- `trigger` only supports `'click'` (default) and `'manual'`; `hover`, `focus` and `contextMenu` are not supported. Touching the area outside the popup closes it automatically.
- The trigger element is wrapped in an `inline-block` `.am-popover-trigger` node (PC clones the child node directly).
- `arrow` only supports a boolean, `{ pointAtCenter }` is not supported.
- Added `mode` (dark mode), `closeOnClickAway`, `actions` / `closeOnAction` (menu mode) and the `action` event, as well as the `show`, `hide` and `updatePosition` instance methods.
- Props inherited from Tooltip such as `mouseEnterDelay`, `mouseLeaveDelay`, `align`, `fresh` and `overlayClassName` are not supported; `classes` / `styles` only support the object form.
