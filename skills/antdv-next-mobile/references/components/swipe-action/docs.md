---
title: SwipeAction
description: Swipe a list item left or right to reveal hidden action buttons.
---

## When To Use

- When a list item has secondary actions such as delete, pin or mark as read which should not take up screen space.
- Often used together with [List](../list/docs.md), wrapping each `am-list-item`.

The content follows the finger, with damping once it moves beyond the width of the buttons; on release, the swipe distance and velocity decide whether it opens or closes. It only responds to horizontal gestures and does not affect the vertical scroll of the page.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Actions on both sides | demo/both.md |
| Inside a list | demo/list.md |
| Manual control and no auto close | demo/manual.md |
| Custom action area | demo/custom.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| leftActions | Action buttons on the left (revealed by swiping right) | [SwipeActionItem](#swipeactionitem)`[]` | - |
| rightActions | Action buttons on the right (revealed by swiping left) | [SwipeActionItem](#swipeactionitem)`[]` | - |
| closeOnAction | Whether to close automatically after an action button is clicked | `boolean` | `true` |
| closeOnTouchOutside | Whether to close automatically when the area outside the component is touched | `boolean` | `true` |
| disabled | Whether swiping is disabled | `boolean` | `false` |
| stopPropagation | Whether to stop handled touch events from bubbling (used inside horizontal gesture containers such as a carousel or Tabs) | `boolean` | `false` |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'content' \| 'actions' \| 'action', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'content' \| 'actions' \| 'action', CSSProperties>` | - |

### SwipeActionItem

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier | `string \| number` | - |
| text | Button content | `VueNode` | - |
| color | Button color, a preset or any CSS color | `'primary' \| 'danger' \| 'warning' \| 'success' \| 'default' \| string` | `'default'` |
| onClick | Callback when the button is clicked | `(event: MouseEvent) => void` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| action | Triggered when an action button is clicked | `(action: SwipeActionItem, event: MouseEvent) => void` |
| actionsReveal | Triggered when the action buttons of one side are fully revealed | `(side: 'left' \| 'right') => void` |
| close | Triggered when it closes | `() => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | Content |
| left | Custom left action area, replaces `leftActions` |
| right | Custom right action area, replaces `rightActions` |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| show | Reveal the action buttons of one side | `(side?: 'left' \| 'right') => void` |
| close | Close | `() => void` |

## Design Token

Customize through `theme.components.SwipeAction` of `ConfigProvider`, or override the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-swipe-action-button-padding` | Horizontal padding of buttons | `var(--am-padding)` |
| `--am-swipe-action-button-min-width` | Minimum width of buttons | `64px` |
| `--am-swipe-action-button-font-size` | Font size of buttons | `var(--am-font-size-lg)` |
| `--am-swipe-action-button-color` | Text color of buttons | `var(--am-color-text-light-solid)` |
| `--am-swipe-action-button-default-bg` | Background color of `default` colored buttons | `var(--am-color-text-tertiary)` |
| `--am-swipe-action-duration` | Duration of the open / close animation | `0.35s` |

## FAQ

### Why does clicking the content area not trigger its click event while the actions are revealed?

This is expected. While the action buttons are revealed, clicking the content area only closes them, which avoids accidentally triggering the navigation of the list item; the click right after a swipe ends is ignored as well.

### How to close after a click when using the `left` / `right` slots?

`closeOnAction` only applies to the buttons generated from `leftActions` / `rightActions`. For custom content, call `close()` through a ref.
