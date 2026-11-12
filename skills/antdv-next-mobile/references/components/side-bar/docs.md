---
title: SideBar
description: A vertical navigation bar for switching between different content areas.
---

## When To Use

- When there are many content categories (such as product categories or settings groups) and you need the entries arranged vertically on the left with the corresponding content on the right.
- When the categories exceed one screen, the side bar can scroll independently.

`SideBar` is a mobile-only component. It is only responsible for navigation; the content area is rendered by the user according to `activeKey`.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Badge | demo/badge.md |
| Disabled item | demo/disabled.md |
| Custom style | demo/custom.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| items | Navigation items | [SideBarItem](#sidebaritem)[] | `[]` |
| activeKey(v-model) | The `key` of the currently active item | `string \| number` | - |
| defaultActiveKey | The `key` of the default active item | `string \| number` | The `key` of the first item |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'item' \| 'title' \| 'badge', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'item' \| 'title' \| 'badge', CSSProperties>` | - |

### SideBarItem

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier | `string \| number` | - |
| title | Title | `VueNode` | - |
| badge | Badge content, shows a red dot when `true` | `number \| string \| boolean` | - |
| disabled | Whether disabled | `boolean` | `false` |
| class | Class name of the item | `string` | - |
| style | Style of the item | `CSSProperties` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the active item is switched | `(key: string \| number) => void` |
| update:activeKey | Triggered when the active item is switched, used by `v-model:activeKey` | `(key: string \| number) => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| title | Custom title, takes precedence over `item.title` | `{ item: SideBarItem, index: number, active: boolean }` |

## Design Token

Customize through `theme.components.SideBar` of `ConfigProvider`, or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-side-bar-width` | Width | `104px` |
| `--am-side-bar-background` | Background color of inactive items | `var(--am-color-bg-layout)` |
| `--am-side-bar-active-background` | Background color of the active item | `var(--am-color-bg-container)` |
| `--am-side-bar-color` | Text color | `var(--am-color-text)` |
| `--am-side-bar-active-color` | Text and indicator color of the active item | `var(--am-color-primary)` |
| `--am-side-bar-font-size` | Font size | `var(--am-font-size)` |
| `--am-side-bar-item-padding` | Item padding | `14px var(--am-padding-sm)` |
| `--am-side-bar-item-border-radius` | Border radius of the items adjacent to the active item | `var(--am-border-radius)` |
| `--am-side-bar-indicator-width` | Indicator width | `3px` |
| `--am-side-bar-indicator-height` | Indicator height | `16px` |
| `--am-side-bar-badge-color` | Badge background color | `var(--am-color-error)` |
