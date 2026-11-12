---
title: Toast
description: A translucent black tip shown in the center of the screen, for lightweight feedback such as operation results and loading states.
---

## When To Use

- To give brief feedback on the result of a user operation, which requires no action from the user and disappears automatically after a while.
- When the user must be prevented from operating the page while loading, use `Toast.loading()`.

Toast is a mobile-only component. Only one is shown at a time, and a new toast replaces the old one. If you want multiple messages to stack at the top without covering the content, use [Message](../message/docs.md).

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Icon | demo/icon.md |
| Loading | demo/loading.md |
| Position | demo/position.md |
| Block background clicks | demo/mask.md |
| Dynamic update and manual close | demo/update.md |

## API

`Toast` only supports imperative calls:

```ts
import { Toast } from '@antdv-next/mobile'

Toast.show('Hello')
Toast.show({ content: 'Saved', icon: 'success' })
```

### Methods

| Method | Description | Type |
| --- | --- | --- |
| Toast.show | Show a toast, text can be passed directly | `(config: ToastShowConfig \| string) => { close }` |
| Toast.success | Show a success toast, same as `icon: 'success'` | `(config: ToastShowConfig \| string) => { close }` |
| Toast.fail | Show a failure toast, same as `icon: 'fail'` | `(config: ToastShowConfig \| string) => { close }` |
| Toast.loading | Show a loading toast. By default it does not close automatically (`duration: 0`) and blocks background clicks (`maskClickable: false`) | `(config?: ToastShowConfig \| string) => { close }` |
| Toast.clear | Close the toast currently shown | `() => void` |
| Toast.config | Global configuration | `(options: ToastConfigOptions) => void` |
| Toast.useToast | Returns `[toast, ContextHolder]`: the toast renders where `<ContextHolder />` is placed and follows the `ConfigProvider` around it (also available as `App.useApp().toast`) | `(config?: ToastConfigOptions) => [ToastInstance, Component]` |

The returned `close` method only closes the toast it belongs to: if that toast has already been replaced by a new one, calling `close` has no effect.

### ToastShowConfig

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| content | The toast content | `VueNode` | - |
| icon | The icon, a preset or a custom node | `'success' \| 'fail' \| 'loading' \| VueNode` | - |
| duration | Display duration in **milliseconds**. It does not close automatically when set to 0 | `number` | `2000` |
| position | Vertical position | `'top' \| 'center' \| 'bottom'` | `'center'` |
| maskClickable | Whether the background can be clicked. When `false`, the page cannot be operated while the toast is shown | `boolean` | `true` |
| class | Class name of the root node | `string` | - |
| style | Style of the root node | `CSSProperties` | - |
| afterClose | Callback after the toast is closed (or replaced) | `() => void` | - |

### ToastConfigOptions

```ts
Toast.config({ duration: 3000, position: 'bottom' })
```

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| duration | Default display duration in milliseconds | `number` | `2000` |
| position | Default position | `'top' \| 'center' \| 'bottom'` | `'center'` |
| maskClickable | Whether the background can be clicked by default | `boolean` | `true` |
| getContainer | The mount node | `() => HTMLElement` | `() => document.body` |
| appContext | The app context, so that globally registered components can be used in the content | `AppContext` | - |

The theme and locale of Toast follow the global configuration of `ConfigProvider.config()`.

## Design Token

Customize through `theme.components.Toast` of `ConfigProvider` or by overriding the CSS variables on `.am-toast-root` directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-toast-z-index` | The z-index (when not assigned automatically) | `2020` |
| `--am-toast-bg` | Background color | Black at 75% opacity |
| `--am-toast-color` | Text color | `var(--am-color-white)` |
| `--am-toast-font-size` | Font size | `var(--am-font-size)` |
| `--am-toast-padding` | Padding of a text-only toast | `var(--am-padding-xs) var(--am-padding-sm)` |
| `--am-toast-border-radius` | Border radius | `var(--am-border-radius)` |
| `--am-toast-max-width` | Max width | `70%` |
| `--am-toast-min-width` | Min width | `96px` |
| `--am-toast-icon-size` | Icon size | `36px` |
| `--am-toast-offset` | Distance from the screen edge for the `top` / `bottom` positions, as a ratio | `15%` |

## Differences from Message

Toast has no PC counterpart. It differs from [Message](../message/docs.md) as follows:

| | Toast | Message |
| --- | --- | --- |
| Position | Center of the screen (optionally top / bottom) | Top |
| Count | Only one at a time | Multiple, stacked |
| Duration unit | Milliseconds | Seconds (same as PC) |
| Blocking page operations | Supported (`maskClickable: false`) | Not supported |
| API | Mobile-only | Aligned with the `message` of Antdv Next |
