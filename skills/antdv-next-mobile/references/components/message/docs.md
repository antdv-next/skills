---
title: Message
description: Display global messages as feedback in response to user operations.
---

## When To Use

- To provide feedback such as success, warning and error.
- A message is displayed at the top center and dismissed automatically, a lightweight way to give feedback without interrupting the user.

The API is aligned with `message` of antdv-next. On mobile it is styled as a compact capsule at the top that avoids the top safe area automatically. To display in the center of the screen, or to block page interaction while loading, use [Toast](../toast/docs.md).

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Other types of message | demo/type.md |
| Customize duration | demo/duration.md |
| Loading | demo/loading.md |
| Update message content | demo/update.md |
| Promise interface | demo/thenable.md |
| Get context with hooks | demo/hooks.md |

## API

This component provides some static methods, with usage and arguments as follows:

- `message.success(content, [duration], onClose)`
- `message.error(content, [duration], onClose)`
- `message.info(content, [duration], onClose)`
- `message.warning(content, [duration], onClose)`
- `message.loading(content, [duration], onClose)`

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| content | The content of the message; a config object can be passed directly as well | `VueNode \| MessageArgsProps` | - |
| duration | Time before auto-dismiss, in seconds. Never dismissed automatically when set to 0 | `number` | `3` |
| onClose | Callback triggered when the message is closed | `() => void` | - |

Each of these methods returns a close function that dismisses the message manually when called; it is also thenable, so you can continue after the message is closed:

```ts
const hide = message.loading('Loading...', 0)
hide()

message.success('Saved').then(() => router.back())
```

The arguments can also be passed as an object:

- `message.open(config)`
- `message.success(config)`
- `message.error(config)`
- `message.info(config)`
- `message.warning(config)`
- `message.loading(config)`

The properties of the `config` object are as follows:

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| content | The content of the message | `VueNode` | - |
| duration | Time before auto-dismiss, in seconds. Never dismissed automatically when set to 0 | `number` | `3` |
| type | The type of the message | `'info' \| 'success' \| 'error' \| 'warning' \| 'loading'` | - |
| icon | Custom icon | `VueNode` | - |
| key | The unique identifier of the message; messages with the same `key` are updated in place | `string \| number` | - |
| class | Custom CSS class | `string` | - |
| style | Custom inline style | `CSSProperties` | - |
| onClick | Callback triggered when the message is clicked | `(event: MouseEvent) => void` | - |
| onClose | Callback triggered when the message is closed | `() => void` | - |

### Global Methods

Methods for global configuration and global destruction are also provided:

- `message.config(options)`
- `message.destroy()`

A single message can also be closed with `message.destroy(key)`.

#### message.config

```ts
message.config({
  top: 60,
  duration: 2,
  maxCount: 3,
})
```

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| top | Distance of the messages from the top (the top safe area is added automatically) | `number \| string` | `8` |
| duration | Default time before auto-dismiss, in seconds | `number` | `3` |
| maxCount | The maximum number of messages shown; when exceeded, the earliest message is closed automatically | `number` | - |
| getContainer | Returns the mount node of the messages | `() => HTMLElement` | `() => document.body` |
| appContext | The app context, so that globally registered components can be used in the content | `AppContext` | - |

### message.useMessage()

The static methods render in a separate app. Their theme and locale follow the global configuration of `ConfigProvider.config()`, and they cannot read the `ConfigProvider` context of the call site. Use `message.useMessage()` when the context is needed:

```vue
<script setup lang="ts">
import { message } from '@antdv-next/mobile'

const [messageApi, ContextHolder] = message.useMessage()
</script>

<template>
  <ContextHolder />
  <am-button @click="messageApi.success('Hello')">
    Show
  </am-button>
</template>
```

`useMessage(config)` accepts the same configuration as `message.config` (`top`, `duration`, `maxCount`, `getContainer`), and `messageApi` has the `open`, `success`, `error`, `info`, `warning`, `loading` and `destroy` methods.

## Design Token

Customize through `theme.components.Message` of `ConfigProvider`, or override the CSS variables on `.am-message` directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-message-z-index` | The `z-index` (when not assigned automatically) | `2010` |
| `--am-message-top` | Distance from the top | `8px` |
| `--am-message-gap` | Gap between multiple messages | `var(--am-margin-xs)` |
| `--am-message-bg` | Background color | `var(--am-color-bg-elevated)` |
| `--am-message-color` | Text color | `var(--am-color-text)` |
| `--am-message-font-size` | Font size | `var(--am-font-size)` |
| `--am-message-padding` | Padding | `9px var(--am-padding)` |
| `--am-message-border-radius` | Border radius | `999px` |
| `--am-message-shadow` | Shadow | `var(--am-box-shadow)` |
| `--am-message-max-width` | Maximum width | `calc(100% - 32px)` |
| `--am-message-icon-size` | Icon size | `16px` |

## Differences from PC

- Styled as a compact capsule; `top` automatically adds the top safe area (notched screens).
- Type names carry the component prefix: `MessageArgsProps`, `MessageConfigOptions`, `MessageInstance`, `MessageType`, `MessageNoticeType`.
- `pauseOnHover` (there is no hover on mobile), the `stack` mode, the `classes` / `styles` semantic configuration, `prefixCls`, `transitionName` and `rtl` (the direction follows `direction` of `ConfigProvider`) are not supported.
- `message.destroy()` removes messages immediately without triggering `onClose`.
