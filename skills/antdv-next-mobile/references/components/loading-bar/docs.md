---
title: LoadingBar
description: A thin progress bar at the top of the page, for global loading feedback such as route changes and requests.
---

## When To Use

- To give global loading feedback that does not interrupt the user during route changes or full-page requests.
- Use `Toast.loading()` of [Toast](../toast/docs.md) when the user must be blocked, and [Spin](../spin/docs.md) for local loading.

LoadingBar is a mobile-only component with a single global instance.

## Examples

| Demo | Path |
| --- | --- |
| Basic | demo/basic.md |
| Custom style | demo/custom.md |

## API

`LoadingBar` only supports imperative calls:

```ts
import { LoadingBar } from '@antdv-next/mobile'

LoadingBar.start()
LoadingBar.finish()
LoadingBar.error()
```

With Vue Router:

```ts
router.beforeEach(() => LoadingBar.start())
router.afterEach(() => LoadingBar.finish())
router.onError(() => LoadingBar.error())
```

### Methods

| Method | Description | Type |
| --- | --- | --- |
| LoadingBar.start | Show the bar and let it creep forward (up to 90%). Calling it again while loading restarts it | `() => void` |
| LoadingBar.finish | Complete the bar and fade it out. Does nothing when the bar was not started | `() => void` |
| LoadingBar.error | Complete the bar in the error color and fade it out. Also shown when the bar was not started | `() => void` |
| LoadingBar.config | Global configuration | `(options: LoadingBarConfigOptions) => void` |

### LoadingBarConfigOptions

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| color | Color of the bar | `string` | primary color |
| errorColor | Color after an error | `string` | error color |
| height | Thickness of the bar, numbers are px | `number \| string` | `3` |
| top | Distance to the top of the viewport, numbers are px | `number \| string` | `0` |
| zIndex | Stacking order, above the opened popups by default | `number` | - |
| getContainer | Mount node | `() => HTMLElement` | `document.body` |
| appContext | App context of the host app | `AppContext` | - |

Static calls follow the global theme set by `ConfigProvider.config()`.

## Design Token

Customize through `theme.components.LoadingBar` of `ConfigProvider` or by overriding the CSS variables.

| Variable | Description | Default |
| --- | --- | --- |
| `--am-loading-bar-height` | Thickness of the bar | `3px` |
| `--am-loading-bar-top` | Distance to the top | `0px` |
| `--am-loading-bar-color` | Color of the bar | `var(--am-color-primary)` |
| `--am-loading-bar-error-color` | Color after an error | `var(--am-color-error)` |

## Differences from PC

- A mobile-only component, Antdv Next has no counterpart.
