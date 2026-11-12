---
title: InfiniteScroll
description: Load more data automatically when the list is scrolled to the bottom (or the top).
---

## When To Use

- Long lists with a large amount of data that need to be loaded page by page, such as feeds and order lists.
- Scenarios that load history when scrolling up, such as chat records (`direction="up"`).

The component listens to the nearest scroll container (`window` or an ancestor with `overflow: auto / scroll`): when the end of the list is less than `threshold` away from the visible area of the container, it sets `loading` to `true` and fires the `load` event. Once the data has returned, your code sets `loading` back to `false`, and sets `hasMore` to `false` (or `finished` to `true`) when everything has been loaded.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Load failure and retry | demo/error.md |
| Custom tips | demo/slots.md |
| Load upwards | demo/up.md |
| With pull to refresh | demo/pull-to-refresh.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| loading | Whether it is loading, `load` is not fired again while loading, supports `v-model:loading` | `boolean` | `false` |
| hasMore | Whether there is more data | `boolean` | `true` |
| finished | Whether everything has been loaded, the opposite of `hasMore`; loading stops when either one is satisfied | `boolean` | `false` |
| error | Whether loading failed, clicking the tip after a failure fires `load` again, supports `v-model:error` | `boolean` | `false` |
| threshold | Distance in pixels between the end of the list and the visible area of the scroll container at which `load` is fired | `number \| string` | `250` |
| direction | Loading direction, `up` loads when scrolled to the top | `'down' \| 'up'` | `'down'` |
| disabled | Whether loading is disabled | `boolean` | `false` |
| immediateCheck | Whether to check the position once right after mounting | `boolean` | `true` |
| loadingText | Tip while loading, the `loading` slot takes precedence | `VueNode` | `'Loading...'` |
| finishedText | Tip when everything has been loaded, the `finished` slot takes precedence | `VueNode` | `'No more'` |
| errorText | Tip when loading failed, the `error` slot takes precedence | `VueNode` | `'Failed to load Retry'` |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'indicator', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'indicator', CSSProperties>` | - |

The default texts come from the locale `locale.InfiniteScroll`.

### Events

| Event | Description | Type |
| --- | --- | --- |
| load | Fired when scrolled within the threshold, `loading` has already been set to `true` at this point | `() => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | List content |
| loading | Customize the loading tip |
| finished | Customize the finished tip |
| error | Customize the error tip |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| check | Check the current scroll position and fire `load` when the conditions are met | `() => void` |

## Design Token

Customize through `theme.components.InfiniteScroll` of `ConfigProvider`, or override the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-infinite-scroll-color` | Color of the tip text | `var(--am-color-text-description)` |
| `--am-infinite-scroll-font-size` | Font size of the tip text | `var(--am-font-size)` |
| `--am-infinite-scroll-indicator-height` | Minimum height of the tip area | `48px` |
| `--am-infinite-scroll-retry-color` | Color of the "Retry" text | `var(--am-color-primary)` |

## FAQ

### Why is `load` fired only once?

When `load` is fired the component sets `loading` to `true` and stops checking in the meantime. Use `v-model:loading` and set it to `false` once the data has returned; if the content still does not fill the container at that point, the component keeps firing `load` until it is filled or there is no more data.

### Why is `load` fired repeatedly as soon as the page is entered?

Make sure the scroll container is correct: the component looks upwards for the first ancestor whose `overflow-y` is `auto` / `scroll`, and falls back to `window` when none is found. If the ancestor has no height limit, the content is always "within the visible area", so it keeps loading.

### Does it load inside a hidden panel such as Tabs?

No. Nothing is fired while the root node is `display: none`; call `check()` to check once after the panel is shown again.
