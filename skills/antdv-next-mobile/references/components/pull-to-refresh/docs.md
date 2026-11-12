---
title: PullToRefresh
description: Pull down at the top of a list to refresh its content.
---

## When To Use

- Pages where users actively fetch the latest content, such as lists and feeds.
- Usually paired with [InfiniteScroll](../infinite-scroll/docs.md) to implement "pull down to refresh + pull up to load more".

Use `v-model:refreshing` to control the refreshing state: when the pull exceeds the threshold and is released, the component sets it to `true` and fires the `refresh` event; once the data has returned, your code sets it back to `false`. Pulling is only triggered when the nearest scroll container is at the top, and horizontal gestures (carousels, swipe actions) are not affected.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Custom text | demo/text.md |
| Custom pull area | demo/slots.md |
| Inside a scroll container | demo/scroll.md |
| Disabled | demo/disabled.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| refreshing | Whether it is refreshing, supports `v-model:refreshing` | `boolean` | `false` |
| pullingText | Tip while pulling, the same-named slot `pulling` takes precedence | `VueNode \| ((info: { distance: number }) => VueNode)` | `'Pull to refresh'` |
| canReleaseText | Tip when releasing will refresh, the `canRelease` slot takes precedence | `VueNode \| ((info: { distance: number }) => VueNode)` | `'Release to refresh'` |
| refreshingText | Tip while refreshing, the `refreshing` slot takes precedence | `VueNode \| ((info: { distance: number }) => VueNode)` | `'Loading...'` |
| completeText | Tip when the refresh is complete, the `complete` slot takes precedence; set to `false` to skip the complete state | `VueNode \| ((info: { distance: number }) => VueNode)` | `'Refreshed'` |
| completeDelay | How long the complete tip stays (in milliseconds), `0` means it is not shown | `number` | `500` |
| headHeight | Height of the top tip area | `number \| string` | `50` |
| threshold | Pull distance that triggers a refresh, same as `headHeight` by default | `number \| string` | - |
| duration | Duration of the rebound animation (in milliseconds) | `number` | `300` |
| disabled | Whether pulling is disabled | `boolean` | `false` |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'head' \| 'content', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'head' \| 'content', CSSProperties>` | - |

The default texts come from the locale `locale.PullToRefresh`.

### Events

| Event | Description | Type |
| --- | --- | --- |
| refresh | Fired when the pull exceeds the threshold and is released | `() => void` |
| change | Fired when the status or the pull distance changes | `(info: { status: 'normal' \| 'pulling' \| 'canRelease' \| 'refreshing' \| 'complete', distance: number }) => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Content | - |
| pulling | Content at the top while pulling | `{ distance: number }` |
| canRelease | Content at the top when releasing will refresh | `{ distance: number }` |
| refreshing | Content at the top while refreshing | `{ distance: number }` |
| complete | Content at the top when the refresh is complete | `{ distance: number }` |

## Design Token

Customize through `theme.components.PullToRefresh` of `ConfigProvider`, or override the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-pull-to-refresh-head-color` | Color of the tip text | `var(--am-color-text-description)` |
| `--am-pull-to-refresh-head-font-size` | Font size of the tip text | `var(--am-font-size)` |
| `--am-pull-to-refresh-icon-size` | Size of the loading icon | `16px` |

## FAQ

### Why can't the blank area below be pulled when there is little content?

The pull gesture is bound to the component itself, so make the component fill the visible area, for example by setting `min-height: 100%` / `min-height: 100vh` on it or on `classes.content`.

### Why is there no `onRefresh` that returns a Promise?

By convention this library does not use `on*` props, and state is always managed through `v-model:refreshing`: request the data in the `refresh` event and set `refreshing` to `false` when it is done.
