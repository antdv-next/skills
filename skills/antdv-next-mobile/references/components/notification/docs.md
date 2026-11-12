---
title: Notification
description: Prompt notification message globally.
---

## When To Use

To display a notification as a card banner at the top (or bottom) of the screen. Typically it can be used in the following cases:

- A notification with complex content, made of a title and a description.
- A notification providing feedback based on the user interaction, or offering the next steps.
- A notification pushed by the application.

The API is aligned with `notification` of Antdv Next. On mobile it is styled as a full-width card banner that avoids the safe area and can be swiped away. For a short one-line feedback, use [Message](../message/docs.md) or [Toast](../toast/docs.md).

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Notification with icon | demo/type.md |
| Duration after which it closes | demo/duration.md |
| Custom action buttons | demo/actions.md |
| Update notification content | demo/update.md |
| Placement | demo/placement.md |
| Stack | demo/stack.md |
| Get context with hooks | demo/hooks.md |

## API

### Static methods

- `notification.success(config)`
- `notification.error(config)`
- `notification.info(config)`
- `notification.warning(config)`
- `notification.open(config)`
- `notification.destroy(key?: Key)`
- `notification.config(options)`
- `notification.useNotification(config)`

### NotificationArgsProps

The properties of `config` are as follows:

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | The title of the notification | `VueNode` | - |
| description | The content of the notification | `VueNode` | - |
| actions | Custom buttons, displayed below the content | `VueNode` | - |
| key | The unique identifier of the notification; one with the same `key` is updated in place and its timer restarts | `string \| number` | - |
| duration | Time in seconds before the notification is closed. `0` or `false` never closes it automatically | `number \| false` | `4.5` |
| showProgress | Show a progress bar of the auto-close timer | `boolean` | `false` |
| pauseOnHover | Whether the timer pauses while the notification is touched (or hovered with a mouse) | `boolean` | `true` |
| icon | Custom icon | `VueNode` | - |
| type | Type of the notification | `'success' \| 'info' \| 'warning' \| 'error'` | - |
| placement | Where it pops up. `topLeft` / `topRight` equal `top`, `bottomLeft` / `bottomRight` equal `bottom` | `NotificationPlacement` | `'top'` |
| closable | Whether to show the close button, or its config object | `boolean \| NotificationClosableType` | `true` |
| closeIcon | Custom close icon, `null` or `false` hides the close button | `VueNode` | - |
| class | Custom CSS class | `string` | - |
| style | Custom inline style | `CSSProperties` | - |
| classes | Class names of the semantic parts | `NotificationSemanticClassNames` | - |
| styles | Inline styles of the semantic parts | `NotificationSemanticStyles` | - |
| props | Attributes passed to the notification element, such as `data-*` and `aria-*` | `Record<string, any>` | - |
| role | The semantics of the notification content recognized by screen readers | `'alert' \| 'status'` | `'alert'` |
| onClick | Callback fired when the notification is tapped | `(event: MouseEvent) => void` | - |
| onClose | Fired when the notification is closed (timer, close button or swipe) | `() => void` | - |

The semantic keys of `classes` / `styles` are `root`, `icon`, `section`, `title`, `description`, `actions`, `close` and `progress`.

### NotificationClosableType

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| closeIcon | Custom close icon | `VueNode` | - |
| disabled | Whether the close button is disabled | `boolean` | `false` |
| onClose | Fired when the notification is closed | `() => void` | - |

### Global configuration

`notification.config(options)`

```ts
notification.config({
  placement: 'bottom',
  bottom: 50,
  duration: 3,
  maxCount: 5,
})
```

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| top | Distance from the top of the viewport when popping up from the top (the top safe area is added automatically) | `number \| string` | `8` |
| bottom | Distance from the bottom of the viewport when popping up from the bottom (the bottom safe area is added automatically) | `number \| string` | `8` |
| placement | Default placement | `NotificationPlacement` | `'top'` |
| duration | Default time in seconds before a notification is closed | `number \| false` | `4.5` |
| maxCount | Max notifications shown at once; the earliest one is closed when exceeded | `number` | - |
| stack | Stack mode: notifications of one edge collapse into a stack above the threshold, tap to expand | `boolean \| { threshold?: number }` | `{ threshold: 3 }` |
| showProgress | Show a progress bar of the auto-close timer | `boolean` | `false` |
| pauseOnHover | Whether the timer pauses while the notification is touched | `boolean` | `true` |
| closable | Whether to show the close button | `boolean \| NotificationClosableType` | `true` |
| closeIcon | Custom close icon, `null` or `false` hides the close button | `VueNode` | - |
| classes | Class names of the semantic parts | `NotificationSemanticClassNames` | - |
| styles | Inline styles of the semantic parts | `NotificationSemanticStyles` | - |
| getContainer | The mount node of the notifications | `() => HTMLElement` | `() => document.body` |
| appContext | App context, so globally registered components can be used inside the content | `AppContext` | - |

### notification.useNotification()

Static methods render in a separate app whose theme and locale follow the global config of `ConfigProvider.config()`; they cannot read the `ConfigProvider` context of the calling site. Use `notification.useNotification()` when the context is needed:

```vue
<script setup lang="ts">
import { notification } from '@antdv-next/mobile'

const [api, ContextHolder] = notification.useNotification()
</script>

<template>
  <ContextHolder />
  <am-button @click="api.info({ title: 'Hello' })">
    Show
  </am-button>
</template>
```

`useNotification(config)` accepts the same config as `notification.config` (except `appContext`), and `api` has the `open`, `success`, `error`, `info`, `warning` and `destroy` methods.

> The [App](../app/docs.md) wrapper saves placing the `ContextHolder` by hand.

## Design Token

Customize through `theme.components.Notification` of `ConfigProvider`, or by overriding the CSS variables on `.am-notification` directly.

| Variable | Description | Default |
| --- | --- | --- |
| `--am-notification-z-index` | z-index (when not assigned automatically) | `2010` |
| `--am-notification-top` | Distance from the top | `8px` |
| `--am-notification-bottom` | Distance from the bottom | `8px` |
| `--am-notification-margin` | Distance between the card and the left / right screen edges | `var(--am-margin-sm)` |
| `--am-notification-gap` | Gap between notifications | `var(--am-margin-xs)` |
| `--am-notification-max-width` | Max width of the card (centered on tablets / in landscape) | `480px` |
| `--am-notification-bg` | Background color | `var(--am-color-bg-elevated)` |
| `--am-notification-color` | Text color | `var(--am-color-text)` |
| `--am-notification-title-color` | Title color | `var(--am-color-text-heading)` |
| `--am-notification-description-color` | Description color | `var(--am-color-text-secondary)` |
| `--am-notification-font-size` | Font size | `var(--am-font-size)` |
| `--am-notification-title-font-size` | Title font size | `var(--am-font-size-lg)` |
| `--am-notification-padding` | Padding | `var(--am-padding-sm) var(--am-padding)` |
| `--am-notification-border-radius` | Border radius | `var(--am-border-radius-lg)` |
| `--am-notification-shadow` | Shadow | `var(--am-box-shadow)` |
| `--am-notification-icon-size` | Icon size | `22px` |
| `--am-notification-close-size` | Width of the close button | `24px` |
| `--am-notification-close-color` | Color of the close button | `var(--am-color-icon)` |
| `--am-notification-progress-height` | Height of the progress bar | `2px` |
| `--am-notification-progress-color` | Color of the progress bar | `var(--am-color-primary)` |
| `--am-notification-stack-offset` | How far the cards behind peek out of a stack | `8px` |
| `--am-notification-stack-scale` | How much each layer of a stack shrinks | `0.05` |

## Differences from PC

- Styled as a full-width card banner (screen width minus the side margins); the default `placement` is `top` (`topRight` on PC). `topLeft` / `topRight` map to `top`, `bottomLeft` / `bottomRight` map to `bottom`.
- `top` / `bottom` default to `8` (`24` on PC), accept a string with a unit, and the safe area is added automatically.
- Gestures: swipe towards its edge (up for a top notification, down for a bottom one) or sideways to close it, which fires `onClose`.
- `pauseOnHover` means "pause the timer while touched" on mobile; hovering with a mouse works as well.
- A collapsed `stack` expands on tap (on hover on PC) and folds again on an outside tap; a tap on a collapsed stack does not fire `onClick`.
- `onClick` receives the `MouseEvent`.
- `notification.destroy()` removes notifications immediately without firing `onClose` (same as the mobile `message`).
- Type names carry the component prefix: `NotificationArgsProps`, `NotificationConfig`, `NotificationGlobalConfig`, `NotificationInstance`, `NotificationIconType`, `NotificationClosableType`.
- `classes` / `styles` only accept objects; the semantic parts are `root`, `icon`, `section`, `title`, `description`, `actions`, `close`, `progress` (no `list`, `listContent`, `wrapper`).
- Not supported: `prefixCls`, `rtl` (the direction follows `direction` of `ConfigProvider`), a `ShadowRoot` returned by `getContainer`, `props` in the global config.
