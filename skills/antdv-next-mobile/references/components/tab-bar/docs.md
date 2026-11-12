---
title: TabBar
description: Placed at the bottom of the page to switch between the top-level pages of an app.
---

## When To Use

- The app has 2 ~ 5 equally important top-level pages that users switch between at any time.
- To hint at unread counts or new content on the entries.

`TabBar` is a mobile-only component. To switch between content groups within a page, use [Tabs](../tabs/docs.md).

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Badge | demo/badge.md |
| Icon only / title only | demo/only.md |
| Custom rendering | demo/slot.md |
| Controlled page switching | demo/controlled.md |
| Fixed at the bottom | demo/fixed.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| items | Tab items | [TabBarItem](#tabbaritem)[] | `[]` |
| activeKey(v-model) | The `key` of the active item | `string \| number` | - |
| defaultActiveKey | The `key` of the item active by default | `string \| number` | The `key` of the first item |
| fixed | Whether to fix it at the bottom of the viewport | `boolean` | `false` |
| placeholder | Whether to keep a placeholder of the same height in the document flow when fixed | `boolean` | `false` |
| safeArea | Whether to adapt to the bottom safe area | `boolean` | `true` |
| bordered | Whether to show the top hairline | `boolean` | `true` |
| zIndex | The `z-index` when fixed | `number` | `100` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'content' \| 'item' \| 'icon' \| 'title' \| 'badge', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'content' \| 'item' \| 'icon' \| 'title' \| 'badge', CSSProperties>` | - |

### TabBarItem

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier | `string \| number` | - |
| title | Title | `VueNode` | - |
| icon | Icon; can be a function that receives the active state | `VueNode \| ((active: boolean) => VueNode)` | - |
| badge | Badge content; shows a red dot when `true` | `number \| string \| boolean` | - |
| disabled | Whether it is disabled | `boolean` | `false` |
| class | Class name of the tab item | `string` | - |
| style | Style of the tab item | `CSSProperties` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the tab is switched | `(key: string \| number) => void` |
| update:activeKey | Triggered when the tab is switched, for `v-model:activeKey` | `(key: string \| number) => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| icon | Custom icon, takes precedence over `item.icon` | `{ item: TabBarItem, index: number, active: boolean }` |
| title | Custom title, takes precedence over `item.title` | `{ item: TabBarItem, index: number, active: boolean }` |

## Design Token

Customize through `theme.components.TabBar` of `ConfigProvider`, or override the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-tab-bar-height` | Height of the tab bar (excluding the safe area) | `50px` |
| `--am-tab-bar-background` | Background color | `var(--am-color-bg-container)` |
| `--am-tab-bar-color` | Inactive color | `var(--am-color-text-secondary)` |
| `--am-tab-bar-active-color` | Active color | `var(--am-color-primary)` |
| `--am-tab-bar-icon-size` | Icon size | `24px` |
| `--am-tab-bar-font-size` | Title font size | `10px` |
| `--am-tab-bar-badge-color` | Badge background color | `var(--am-color-error)` |
| `--am-tab-bar-z-index` | The `z-index` when fixed | `100` |
